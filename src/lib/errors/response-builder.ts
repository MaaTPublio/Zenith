import { NextResponse } from 'next/server';
import { ErrorCode, type ErrorCodeType } from './error-codes';
import { AppError } from './app-error';
import type { ApiSuccessResponse, ApiErrorResponse } from './api-response';

const DEFAULT_STATUS_BY_CODE: Record<ErrorCodeType, number> = {
  [ErrorCode.UNAUTHORIZED]: 401,
  [ErrorCode.FORBIDDEN]: 403,
  [ErrorCode.SESSION_EXPIRED]: 401,
  [ErrorCode.VALIDATION_ERROR]: 400,
  [ErrorCode.BAD_REQUEST]: 400,
  [ErrorCode.NOT_FOUND]: 404,
  [ErrorCode.CONFLICT]: 409,
  [ErrorCode.INTERNAL_ERROR]: 500,
  [ErrorCode.DATABASE_ERROR]: 500,
  [ErrorCode.EXTERNAL_SERVICE_ERROR]: 502,
  [ErrorCode.RATE_LIMITED]: 429,
};

function successBody<T>(data: T, requestId?: string): ApiSuccessResponse<T> {
  return { success: true, data, timestamp: new Date().toISOString(), requestId };
}

function errorBody(
  code: ErrorCodeType,
  message: string,
  context?: Record<string, unknown>,
  requestId?: string
): ApiErrorResponse {
  return { success: false, error: { code, message, context }, timestamp: new Date().toISOString(), requestId };
}

export function success<T>(data: T, status = 200, requestId?: string) {
  return NextResponse.json(successBody(data, requestId), { status });
}

export function created<T>(data: T, requestId?: string) {
  return success(data, 201, requestId);
}

export function error(
  code: ErrorCodeType,
  message: string,
  status?: number,
  context?: Record<string, unknown>,
  requestId?: string
) {
  return NextResponse.json(errorBody(code, message, context, requestId), {
    status: status ?? DEFAULT_STATUS_BY_CODE[code] ?? 500,
  });
}

export function fromAppError(err: AppError, requestId?: string) {
  return error(err.code, err.message, err.statusCode, err.context, requestId);
}

export function internalError(message = 'Erro interno do servidor', context?: Record<string, unknown>, requestId?: string) {
  return error(ErrorCode.INTERNAL_ERROR, message, 500, context, requestId);
}
