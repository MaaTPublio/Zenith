import type { NextResponse } from 'next/server';
import { logger } from '../logger';
import { buildRequestContext, toLogContext, type RequestContext } from './request-context';
import { handleApiError } from './handle-api-error';
import { EventType } from './event-types';

type ApiHandler = (req: Request, context: RequestContext) => Promise<NextResponse> | NextResponse;

interface WithApiHandlerOptions {
  service?: string;
  event?: EventType;
}

const REQUEST_ID_HEADER = 'x-request-id';

function attachRequestId(response: NextResponse, requestId: string): NextResponse {
  if (!response.headers.has(REQUEST_ID_HEADER)) {
    response.headers.set(REQUEST_ID_HEADER, requestId);
  }
  return response;
}

/**
 * Encapsula o boilerplate repetido nas rotas do Next.js:
 * 1. Constrói RequestContext com requestId único.
 * 2. Executa o handler de rota.
 * 3. Encaminha exceções não tratadas para handleApiError.
 * 4. Propaga o mesmo requestId nos headers e resposta.
 * 5. Registra automaticamente log estruturado com método, rota e duração.
 */
export function withApiHandler(handler: ApiHandler, options?: WithApiHandlerOptions) {
  const event = options?.event ?? EventType.API;
  return async (req: Request): Promise<NextResponse> => {
    const context = buildRequestContext(req, { service: options?.service });
    try {
      const response = await handler(req, context);
      logger.info(`${req.method} ${context.route ?? ''} ${response.status}`.trim(), {
        ...toLogContext(context),
        event,
      });
      return attachRequestId(response, context.requestId);
    } catch (err) {
      const response = handleApiError(err, { ...toLogContext(context), event });
      return attachRequestId(response, context.requestId);
    }
  };
}
