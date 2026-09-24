/**
 * Catálogo centralizado de categorias de evento para observabilidade.
 */
export const EventType = {
  AUTH: 'AUTH',
  API: 'API',
  DATABASE: 'DATABASE',
  CACHE: 'CACHE',
  AI: 'AI',
  SECURITY: 'SECURITY',
  CRON: 'CRON',
  SYSTEM: 'SYSTEM',
} as const;

export type EventType = (typeof EventType)[keyof typeof EventType];
