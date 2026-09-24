import { beforeEach, describe, expect, it } from 'vitest';
import { checkRateLimit, clearRateLimitStore, rateLimitHeaders } from '../rate-limit';

describe('Rate Limiter', () => {
  beforeEach(() => {
    clearRateLimitStore();
  });

  it('permite a primeira requisição e decrementa a cota', () => {
    const res = checkRateLimit('user-1', { limit: 5, windowMs: 10_000 });

    expect(res.allowed).toBe(true);
    expect(res.remaining).toBe(4);
    expect(res.retryAfterSec).toBe(0);
  });

  it('bloqueia requisições excedentes além do limite estabelecido', () => {
    const opts = { limit: 3, windowMs: 10_000 };

    checkRateLimit('user-2', opts);
    checkRateLimit('user-2', opts);
    checkRateLimit('user-2', opts);

    const blocked = checkRateLimit('user-2', opts);

    expect(blocked.allowed).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.retryAfterSec).toBeGreaterThan(0);
  });

  it('gera cabeçalhos HTTP corretos para requisição permitida e bloqueada', () => {
    const res = checkRateLimit('user-3', { limit: 10, windowMs: 60_000 });
    const headers = rateLimitHeaders(res, 10);

    expect(headers['X-RateLimit-Limit']).toBe('10');
    expect(headers['X-RateLimit-Remaining']).toBe('9');
    expect(headers['Retry-After']).toBeUndefined();
  });
});
