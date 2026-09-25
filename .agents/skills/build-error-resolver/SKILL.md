---
name: build-error-resolver
description: "Protocolo determinístico e sistemático para triagem e resolução de falhas em Quality Gates (TypeScript typecheck, Biome lint e Vitest), sem mutações colaterais."
---

# Build & Quality Gate Error Resolver

Esta skill formaliza a rotina de recuperação determinística quando um dos Quality Gates do Zenith falhar (`npm run typecheck`, `npm run lint`, `npm run test` ou `npm run build`).

## Regras Fundamentais

1. **Correção Cirúrgica:** Altere apenas o arquivo e o bloco de código estritamente necessários para sanar o diagnóstico do compilador ou linter.
2. **Proibição de Supressões Preguiçosas:**
   - Proibido usar `// @ts-ignore`, `// @ts-nocheck` ou tipagem `any` para "calar" o TypeScript.
   - Proibido adicionar comentários de supressão do Biome sem justificativa arquitetural documentada.
3. **Não Refatorar Durante o Fix:** Não aproveite a oportunidade do erro para reestruturar funções adjacentes, trocar bibliotecas ou alterar estilos.

## Ciclo de Resolução em 4 Passos

### Passo 1: Isolação do Diagnóstico
- Identifique o arquivo exato, número da linha e código de erro (`TSxxxx`, regra Biome ou falha de assertion no Vitest).

### Passo 2: Reprodução Escopada
- Reproduza apenas o comando mínimo afetado:
  - TypeScript: `npx tsc --noEmit`
  - Biome: `npx @biomejs/biome check src/path/to/file.ts`
  - Vitest: `npx vitest run src/path/to/test.test.ts`

### Passo 3: Aplicação da Correção Mínima Viável
- Ajuste tipagem, imports ou lógica quebrada no ponto de origem.

### Passo 4: Verificação do Quality Gate Completo
- Uma vez resolvido o erro pontual, execute a suíte completa de Quality Gate para garantir que não houve regressão colateral:
  ```bash
  npm run typecheck && npm run lint && npm run test
  ```
