/**
 * Pattern de Test Factories para geração determinística de dados mockados em testes unitários.
 */

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export function buildUser(overrides: Partial<UserEntity> = {}): UserEntity {
  return {
    id: overrides.id ?? 'usr_test_default_123',
    name: overrides.name ?? 'Usuário Teste',
    email: overrides.email ?? 'teste@exemplo.com',
    role: overrides.role ?? 'user',
    createdAt: overrides.createdAt ?? new Date('2026-01-01T00:00:00Z').toISOString(),
  };
}
