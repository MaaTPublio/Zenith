/**
 * Logger central com redaction de dados sensíveis (PII) e controle de verbosidade.
 * Substitui o uso de console.log no projeto Zenith.
 */

const isProduction = process.env.NODE_ENV === 'production';

const SENSITIVE_KEY_PATTERNS = [
  'password',
  'pass',
  'token',
  'secret',
  'authorization',
  'apikey',
  'api_key',
  'email',
  'phone',
  'cpf',
  'cnpj',
];

const REDACTED = '[REDACTED]';

function isSensitiveKey(key: string): boolean {
  const k = key.toLowerCase();
  return SENSITIVE_KEY_PATTERNS.some((pattern) => k.includes(pattern));
}

function sanitizeData(data: unknown, depth = 0): unknown {
  if (depth > 4) return '[MAX_DEPTH]';
  if (data === null || data === undefined) return data;

  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return data.map((item) => sanitizeData(item, depth + 1));
    }

    const cleaned: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      if (isSensitiveKey(key)) {
        cleaned[key] = REDACTED;
      } else {
        cleaned[key] = sanitizeData(value, depth + 1);
      }
    }
    return cleaned;
  }

  return data;
}

export const logger = {
  info(message: string, context?: Record<string, unknown>) {
    if (!isProduction) {
      console.info(`[INFO] ${new Date().toISOString()} - ${message}`, context ? sanitizeData(context) : '');
    }
  },

  warn(message: string, context?: Record<string, unknown>) {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`, context ? sanitizeData(context) : '');
  },

  error(message: string, error?: unknown, context?: Record<string, unknown>) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, {
      error: error instanceof Error ? { message: error.message, stack: error.stack } : error,
      context: context ? sanitizeData(context) : undefined,
    });
  },

  debug(message: string, context?: Record<string, unknown>) {
    if (!isProduction) {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`, context ? sanitizeData(context) : '');
    }
  },
};
