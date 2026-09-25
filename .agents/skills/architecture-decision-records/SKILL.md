---
name: architecture-decision-records
description: "Guia para criação, numeração e manutenção de Architecture Decision Records (ADRs) na pasta docs/adr/, preservando o histórico de decisões técnicas."
---

# Architecture Decision Records (ADR) Skill

Esta skill define as diretrizes para propor, documentar e versionar decisões arquiteturais estruturantes no Zenith.

## Quando Registrar um ADR

- Introdução ou remoção de um framework, banco de dados ou biblioteca principal.
- Mudança na estratégia de autenticação, autorização ou criptografia.
- Alteração no padrão de contratos de API ou governança de estado global.
- Mudanças significativas na esteira de CI/CD ou política de testes.

## Fluxo de Trabalho

1. **Verificar Próximo Número:** Inspecione `docs/adr/README.md` e identifique o próximo sequencial livre (`NNN`).
2. **Copiar Template:** Use `docs/adr/000-template.md` como base e crie `docs/adr/NNN-nome-da-decisao.md`.
3. **Preencher Seções:**
   - **Contexto:** Por que a decisão é necessária agora.
   - **Decisão:** A escolha técnica exata.
   - **Alternativas:** Pelo menos 1 alternativa avaliada e por que foi descartada.
   - **Consequências:** Trade-offs reais assumidos.
4. **Atualizar Tabela:** Insira a nova linha na tabela de `docs/adr/README.md`.
