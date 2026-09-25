# Aprendizados e Lições do Projeto (Zenith Memory Ledger)

Este arquivo é a memória contínua do projeto. Registre aprendizados gerados após depurações complexas, decisões arquiteturais ou correções de comportamento do agente, evitando a repetição dos mesmos erros em sessões futuras.

---

## Formato de Entrada

```markdown
### [YYYY-MM-DD] Resumo do Aprendizado em Uma Linha
- **Contexto:** O que estava sendo tentado ou o bug ocorrido.
- **Causa Raiz:** O motivo técnico do erro ou atrito.
- **Regra Aprendida:** A diretriz exata para nunca mais repetir.
- **Arquivos Afetados:** Caminhos relativos dos arquivos envolvidos.
```

---

## Entradas Registradas

### [2026-09-24] Validação de Tipagem em Handlers de API
- **Contexto:** Integração de handlers com `withApiHandler` e Zod schemas em rotas Next.js.
- **Causa Raiz:** Inferência de tipagem genérica precisa coincidir estritamente com `AppError` e `ApiResponse<T>`.
- **Regra Aprendida:** Sempre usar o envelope `createApiResponse` e `AppError` com `ErrorCode` explícito. Nunca retornar `NextResponse.json` bruto despadronizado.
- **Arquivos Afetados:** `src/lib/errors/with-api-handler.ts`, `src/lib/errors/app-error.ts`

### [2026-09-24] Pre-commit Hook em Ambiente Windows
- **Contexto:** Execução de hooks git no Windows com PowerShell.
- **Causa Raiz:** Scripts de hook shell precisam chamar binários via `npx` ou comando local compatível sem bloquear interatividade.
- **Regra Aprendida:** Hook pre-commit deve rodar `npm run typecheck && npm run lint && npm run test` silenciosamente e com código de saída 0 ou 1 limpos.
- **Arquivos Afetados:** `.git/hooks/pre-commit`
