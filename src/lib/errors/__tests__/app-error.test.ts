import { describe, expect, it } from 'vitest';
import { AppError } from '../app-error';
import { ErrorCode } from '../error-codes';

describe('AppError', () => {
  it('deve instanciar AppError com valores padrão corretos', () => {
    const error = new AppError('Erro interno de teste');

    expect(error.message).toBe('Erro interno de teste');
    expect(error.code).toBe(ErrorCode.INTERNAL_ERROR);
    expect(error.statusCode).toBe(500);
    expect(error.name).toBe('AppError');
  });

  it('deve criar erro badRequest com status 400', () => {
    const error = AppError.badRequest('Payload inválido', { field: 'email' });

    expect(error.message).toBe('Payload inválido');
    expect(error.code).toBe(ErrorCode.BAD_REQUEST);
    expect(error.statusCode).toBe(400);
    expect(error.context).toEqual({ field: 'email' });
  });

  it('deve criar erro notFound com status 404', () => {
    const error = AppError.notFound('Item não localizado');

    expect(error.message).toBe('Item não localizado');
    expect(error.code).toBe(ErrorCode.NOT_FOUND);
    expect(error.statusCode).toBe(404);
  });
});
