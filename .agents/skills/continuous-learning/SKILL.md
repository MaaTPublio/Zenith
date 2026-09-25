---
name: continuous-learning
description: "Extrai, sintetiza e persiste lições aprendidas e regras de projeto no ledger de memória (.agents/memory/learnings.md), prevenindo repetição de erros entre sessões."
---

# Continuous Learning Skill

Esta skill sistematiza o loop de aprendizagem contínua do agente no projeto Zenith, inspirado no Everything Claude Code (ECC).

## Quando Ativar

- Após resolver um bug não trivial ou erro de build recorrente.
- Quando o desenvolvedor corrigir uma premissa ou rejeitar uma implementação.
- Ao tomar uma decisão arquitetural sutil que precisa ser lembrada em sessões futuras.
- Ao final de tarefas complexas contendo lições técnicas de alto valor.

## Procedimento

1. **Identificar o Padrão:** Não registre o trivial (ex: "esqueci um ponto e vírgula"). Foque em:
   - Peculiaridades do ambiente (Windows, Next.js App Router, Biome, Vitest).
   - Inconsistências de schema ou tipagem Zod/TypeScript.
   - Padrões de arquitetura específicos do Zenith.
2. **Formatar a Entrada:** Siga rigorosamente o template em `.agents/memory/learnings.md`:
   ```markdown
   ### [YYYY-MM-DD] Resumo em Uma Linha
   - **Contexto:** Cenário original.
   - **Causa Raiz:** Explicação técnica direta.
   - **Regra Aprendida:** Diretriz imperativa para o futuro.
   - **Arquivos Afetados:** Lista de caminhos.
   ```
3. **Sobriedade (Ponytail):** Seja conciso. Frases curtas, sem preâmbulos e sem duplicação de entradas existentes.
