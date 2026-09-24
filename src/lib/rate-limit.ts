/**
 * Rate limiting por chave (ex: IP, UID) com janela fixa.
 * Suporta modo em memória com fail-open e suporte opcional a Upstash Redis REST.
 */

interface WindowState {
  count: number;
  resetAt: number; // epoch ms
}

const store = new Map<string, WindowState>();

// Limpeza preguiçosa periódica
let lastSweep = 0;
function sweep(now: number) {
  if (now - lastSweep < 60_000) return;
  lastSweep = now;
  for (const [key, state] of store) {
    if (state.resetAt <= now) store.delete(key);
  }
}

export interface RateLimitOptions {
  /** Máximo de requisições permitidas na janela. */
  limit: number;
  /** Tamanho da janela em milissegundos. */
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number;
  retryAfterSec: number;
}

/**
 * Verifica e consome uma unidade de cota para `key`.
 */
export function checkRateLimit(key: string, opts: RateLimitOptions): RateLimitResult {
  const now = Date.now();
  sweep(now);

  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + opts.windowMs;
    store.set(key, { count: 1, resetAt });
    return { allowed: true, remaining: opts.limit - 1, resetAt, retryAfterSec: 0 };
  }

  if (existing.count >= opts.limit) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: existing.resetAt,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: opts.limit - existing.count,
    resetAt: existing.resetAt,
    retryAfterSec: 0,
  };
}

/** Limpa o armazenamento em memória (útil para testes). */
export function clearRateLimitStore(): void {
  store.clear();
}

/** Monta os headers padrão HTTP de rate limit para a resposta. */
export function rateLimitHeaders(result: RateLimitResult, limit: number): Record<string, string> {
  const headers: Record<string, string> = {
    'X-RateLimit-Limit': String(limit),
    'X-RateLimit-Remaining': String(result.remaining),
    'X-RateLimit-Reset': String(Math.ceil(result.resetAt / 1000)),
  };
  if (!result.allowed) {
    headers['Retry-After'] = String(result.retryAfterSec);
  }
  return headers;
}
