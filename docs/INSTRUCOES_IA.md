# Instruções para a IA (Zenith) — Diretrizes de Engenharia & Blueprint

Este documento consolida as orientações de engenharia e regras de conduta para qualquer IA colaborando no projeto **Zenith**.

---

## 1. Princípios Inegociáveis (Charter)

1. **Filosofia de Produto:** Foco total na experiência do usuário, baixa carga cognitiva, simplicidade e Mobile First. Não construa complexidade desnecessária.
2. **Prioridade Absoluta:**
   `Segurança` ➔ `Confiabilidade` ➔ `Experiência do Usuário` ➔ `Performance Percebida` ➔ `Performance Real` ➔ `Novas Features`.
3. **Descoberta Obrigatória em Duas Fases:**
   * **Fase 1 (Descoberta):** Sem código. Apresentar análise, riscos, simulação de cenário e lista exata de arquivos afetados. Parar e aguardar aprovação explícita.
   * **Fase 2 (Implementação):** Executar apenas após aprovação formal.
4. **Sem Abstrações Prematuras (YAGNI / Ponytail):** Priorize a solução mais simples que resolve o problema de forma sustentável. Não adicione bibliotecas desnecessárias nem crie arquivos duplicados (`utils2.ts`, `helpers-new.ts`).
5. **Observabilidade:** NUNCA utilize `console.log`. Use o logger oficial em `src/lib/logger.ts`.
6. **Tratamento de Erros:** NUNCA lance `Error` genérico. Utilize `AppError` com `ErrorCode` padronizado.
7. **Teto de Linhas por Arquivo:** Mantenha arquivos com menos de 350 linhas para preservar o raciocínio da IA e facilitar a manutenibilidade.
8. **Orquestração de Subagentes:** Ondas concorrentes somente com arquivos 100% disjuntos. Subagentes nunca executam commits.

---

## 2. Quality Gates

Nenhuma tarefa é concluída sem aprovação em:
- `npm run typecheck`
- `npm run lint` (Biome — zero erros tolerados)
- `npm run test` (Vitest)
- `npm run build`
