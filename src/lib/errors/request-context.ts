import { randomUUID } from 'crypto';
import type { LogContext } from './log-context';

export interface RequestContext {
  requestId: string;
  route?: string;
  service?: string;
  environment: string;
  startedAt: number;
  userId?: string;
}

export function createRequestId(): string {
  return randomUUID();
}

function extractRoute(req: Request): string | undefined {
  try {
    return new URL(req.url).pathname;
  } catch {
    return undefined;
  }
}

export function buildRequestContext(
  req?: Request,
  overrides?: Partial<Pick<RequestContext, 'requestId' | 'route' | 'service' | 'userId'>>
): RequestContext {
  return {
    requestId: overrides?.requestId ?? createRequestId(),
    route: overrides?.route ?? (req ? extractRoute(req) : undefined),
    service: overrides?.service,
    environment: process.env.NODE_ENV ?? 'development',
    startedAt: Date.now(),
    userId: overrides?.userId,
  };
}

export function getRequestDuration(context: RequestContext): number {
  return Date.now() - context.startedAt;
}

export function toLogContext(context: RequestContext): LogContext {
  return {
    requestId: context.requestId,
    route: context.route,
    service: context.service,
    userId: context.userId,
    duration: getRequestDuration(context),
  };
}
