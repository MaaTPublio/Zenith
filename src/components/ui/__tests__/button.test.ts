import { describe, expect, it } from 'vitest';
import { Button } from '../button';

describe('Button Component', () => {
  it('exporta o componente Button com displayName correto', () => {
    expect(Button).toBeDefined();
    expect(Button.displayName).toBe('Button');
  });
});
