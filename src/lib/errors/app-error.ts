import { ErrorCode, type ErrorCodeType } from './error-codes';

export class AppError extends Error {
  public readonly code: ErrorCodeType;
  public readonly statusCode: number;
  public readonly context?: Record<string, unknown>;

  constructor(
    message: string,
    code: ErrorCodeType = ErrorCode.INTERNAL_ERROR,
    statusCode = 500,
    context?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = statusCode;
    this.context = context;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  static badRequest(message: string, context?: Record<string, unknown>): AppError {
    return new AppError(message, ErrorCode.BAD_REQUEST, 400, context);
  }

  static unauthorized(message = 'Acesso não autorizado', context?: Record<string, unknown>): AppError {
    return new AppError(message, ErrorCode.UNAUTHORIZED, 401, context);
  }

  static forbidden(message = 'Permissão negada', context?: Record<string, unknown>): AppError {
    return new AppError(message, ErrorCode.FORBIDDEN, 403, context);
  }

  static notFound(message = 'Recurso não encontrado', context?: Record<string, unknown>): AppError {
    return new AppError(message, ErrorCode.NOT_FOUND, 404, context);
  }

  static internal(message = 'Erro interno do servidor', context?: Record<string, unknown>): AppError {
    return new AppError(message, ErrorCode.INTERNAL_ERROR, 500, context);
  }
}
