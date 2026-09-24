import { describe, expect, it } from 'vitest';
import { buildUser } from '../example-factory';

describe('User Factory', () => {
  it('cria entidade com valores padrão determinísticos', () => {
    const user = buildUser();

    expect(user.id).toBe('usr_test_default_123');
    expect(user.name).toBe('Usuário Teste');
    expect(user.role).toBe('user');
  });

  it('permite sobrescrita pontual de propriedades', () => {
    const user = buildUser({ name: 'Admin Customizado', role: 'admin' });

    expect(user.name).toBe('Admin Customizado');
    expect(user.role).toBe('admin');
    expect(user.id).toBe('usr_test_default_123');
  });
});
