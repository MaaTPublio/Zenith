# ADR 001: Adoção da Arquitetura Blueprint Zenith

* **Status:** Aceito
* **Data:** 2026-09-25
* **Autores / Decisores:** Mateus / Zenith Agent

---

## 1. Contexto do Problema
O desenvolvimento de novos produtos frequentemente sofre com sobrecarga de configuração inicial (tooling sprawl), inconsistência de padrões de qualidade, duplicação de boilerplate de tratamento de erros e falta de diretrizes operacionais para pair programming com agentes de IA.

## 2. Decisão Arquitetural
Adotar uma fundação unificada e minimalista (Ponytail / YAGNI) baseada em:
1. **Framework & Runtime:** Next.js (App Router) + TypeScript Strict + React 18.
2. **Estilização:** Tailwind CSS com variáveis HSL e tema de alto contraste / funcionalidade pura (Design System sóbrio).
3. **Qualidade & Linting:** Biome como linter/formatter único ultra-rápido (substituindo ESLint + Prettier).
4. **Testes:** Vitest com Testing Library e JSDOM, com TDD scoped e factories tipadas.
5. **Tratamento de Erros & Observabilidade:** Handlers tipados (`withApiHandler`, `AppError`, `createApiResponse`, `logger` estruturado sem `console.log`).
6. **Governança de IA:** Descoberta em Duas Fases, teto de 350 linhas por arquivo e Quality Gates com pre-commit hook bloqueante.

## 3. Alternativas Consideradas
- **ESLint + Prettier Tradicional:** Rejeitado pelo tempo excessivo de execução em CI e conflitos frequentes de plugins.
- **Jest:** Rejeitado em favor do Vitest devido ao suporte nativo a ESM e TypeScript sem transformadores pesados (`ts-jest` / `babel`).

## 4. Consequências e Trade-offs
- **Pontos Positivos:** Zero atrito de setup em novos projetos, validações locais em menos de 2 segundos, conformidade estrita com padrões de engenharia.
- **Pontos de Atenção:** Requer disciplina estrita no respeito aos Quality Gates e teto de linhas por arquivo.
