import { logger } from '../logger';
import { AppError } from './app-error';
import { ErrorCode } from './error-codes';
import { fromAppError, internalError } from './response-builder';
import type { LogContext } from './log-context';

const isProduction = process.env.NODE_ENV === 'production';

export function handleApiError(err: unknown, context?: Omit<LogContext, 'errorCode'>) {
  if (err instanceof AppError) {
    logger.error(err.message, err, { ...context, errorCode: err.code });
    return fromAppError(err, context?.requestId);
  }

  logger.error(
    err instanceof Error ? err.message : 'Erro desconhecido',
    err,
    { ...context, errorCode: ErrorCode.INTERNAL_ERROR }
  );

  const message = !isProduction && err instanceof Error ? err.message : 'Erro interno do servidor.';
  return internalError(message, undefined, context?.requestId);
}
