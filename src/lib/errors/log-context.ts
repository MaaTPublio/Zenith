import type { ErrorCodeType } from './error-codes';
import type { EventType } from './event-types';

export interface LogContext {
  requestId?: string;
  userId?: string;
  service?: string;
  route?: string;
  event?: EventType;
  errorCode?: ErrorCodeType;
  duration?: number;
  metadata?: Record<string, unknown>;
}
