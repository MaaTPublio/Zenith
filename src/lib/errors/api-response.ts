import type { ErrorCodeType } from './error-codes';

export interface ApiSuccessResponse<T = unknown> {
  success: true;
  data: T;
  timestamp: string;
  requestId?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: ErrorCodeType;
    message: string;
    context?: Record<string, unknown>;
  };
  timestamp: string;
  requestId?: string;
}

export type ApiResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse;
