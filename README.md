<div align="center">
  <img src=".github/assets/logo.png" alt="Zenith Logo" width="220" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <h1>Zenith</h1>
  <p><strong>The High-Craft Software Engineering & AI Pair-Programming Blueprint</strong></p>
  <p>Um blueprint completo de engenharia disciplinada, governança de IA, ergonomia Mobile First, performance React/Next.js e observabilidade.</p>

  <p>
    <img src="https://img.shields.io/badge/TypeScript-5.x_Strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Next.js-15.x-000000?logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Biome-Linter_2.5-60A5FA?logo=biome&logoColor=white" alt="Biome" />
    <img src="https://img.shields.io/badge/Vitest-Unit_Tests-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
    <img src="https://img.shields.io/badge/Vercel_Labs-60+_Rules-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Framer_Motion-Spring_Physics-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
  </p>
</div>

---

## 🌟 Sobre o Zenith

O **Zenith** é a destilação prática dos padrões de engenharia mais eficientes do mercado, construído para servir como **blueprint canônico** para novos produtos e sistemas web e mobile.

Ele foi concebido para resolver o maior desafio do desenvolvimento acelerado por IA: **manter a arquitetura limpa, previsível, segura e com altíssimo padrão estético sem sobrecarregar a base de código com complexidade acidental ou clichês gerados por IA.**

---

## 🏛️ Filosofia e Pilares Inegociáveis

### 1. Descoberta Obrigatória em Duas Fases
Nenhuma linha de código de negócio é escrita antes da aprovação da solução:
* **Fase 1 (Descoberta):** Sem código. Apresenta análise arquitetural, riscos, **simulação de cenários reais & inconsistências**, lista explícita de arquivos afetados e wireframes textuais. **Parada obrigatória** para validação humana.
* **Fase 2 (Implementação):** Execução atômica, modular e testada a cada passo após o aceite formal.

### 2. A Hierarquia de Prioridades (Charter)
Todas as decisões técnicas e de produto respeitam estritamente esta ordem:
$$\text{Segurança} \longrightarrow \text{Confiabilidade} \longrightarrow \text{Experiência do Usuário (UX)} \longrightarrow \text{Performance Percebida} \longrightarrow \text{Performance Real} \longrightarrow \text{Novas Features}$$

### 3. Protocolo de Ondas Paralelas de Subagentes
Evita sobrescrita silenciosa de arquivos e corridas de commit na raiz:
* **Etiquetagem Obrigatória no Plano:** Toda tarefa paralela declara `Files:` e `Depends-on:`.
* **Conjuntos 100% Disjuntos:** Duas tarefas só rodam em paralelo se não tocarem nenhum arquivo comum.
* **Subagentes NUNCA comitam:** Subagentes operam exclusivamente no *working tree*; apenas o agente orquestrador executa testes globais e comita serialmente após cada onda.

### 4. Teto de Tamanho de Arquivo (~350 Linhas)
Módulos concisos previnem a degradação da janela de contexto da IA e impedem a proliferação de bugs sutis em diffs. Arquivos que ultrapassam o teto devem ser modularizados por responsabilidade única.

---

## 🧠 Arsenal de Skills e Regras Integradas

O Zenith traz um conjunto completo de skills especializadas para elevar a barra de qualidade:

### 🚀 Performance React & Next.js (`vercel-react-best-practices`)
Compilação oficial de mais de 60 regras da **Vercel Labs**:
* Otimização de bundle e eliminação de importações pesadas (`bundle-dynamic-imports`, `bundle-barrel-imports`).
* Prevenção de re-renders desnecessários (`rerender-memo`, `rerender-derived-state-no-effect`).
* Estratégias seguras de Server Actions e serialização no servidor (`server-auth-actions`, `server-serialization`).
* Caching e requisições paralelas sem bloqueio de render (`server-parallel-fetching`, `server-cache-react`).

### 📱 Apps Nativos com Expo & React Native (`expo-mobile-development`)
Conjunto canônico para desenvolvimento mobile de alta performance (iOS e Android):
* **Expo Router:** Roteamento tipado baseado em arquivos (`app/(tabs)`, `app/(auth)`).
* **Ergonomia Tátil:** Safe Area insets dinâmicos (`react-native-safe-area-context`) e haptics em micro-interações (`expo-haptics`).
* **Segurança Nativa:** Armazenamento seguro de credenciais via `expo-secure-store` (Keychain/Keystore).
* **Física de Molas:** `react-native-reanimated` alinhado aos princípios de Emil Kowalski.
* **Prevenção de Erros de Plataforma:** Proibição estrita de tags DOM (`div`, `span`) ou APIs de browser.

### 🛡️ Auditoria & Segurança Web
* **`security-review` (GetSentry):** Auditoria metódica contra vulnerabilidades OWASP, injeções, XSS, SSRF e controle de acesso com base em evidências de alta confiança.
* **`code-review-excellence`:** Diretrizes para revisões de código construtivas, padrões de PR e arquitetura limpa.
* **`web-quality-accessibility`:** Conformidade WCAG 2.2 AA (navegação por teclado, contrastes óticos, leitores de tela).
* **`web-quality-core-web-vitals`:** Diagnóstico e otimização para LCP, INP e CLS.
* **`web-quality-performance` & `web-quality-seo`:** Otimizações de renderização, metadados e indexação.
* **`grill-with-docs`:** Entrevista socrática focada em desafiar premissas de arquitetura antes da codificação.

### 🎨 Craft de UI & Anti-AI Slop
* **`emil-kowalski` (Spring Physics & Micro-interações):** Física de molas no Framer Motion, teto de 350ms, animações puras em `transform`/`opacity` e `<AnimatePresence mode="popLayout">`.
* **`taste` (Contenção & Tipografia Funcional):** Apenas um ponto de destaque por seção, números tabulares (`tabular-nums`) e elevação sutil em camadas.
* **`stop-ai-slop` (Anti-Clichês):** Banimento de fundos pretos com bolhas roxas genéricas, grids previsíveis de 3 cards e copys marketeiros vazios.
* **`humanizer` (UX Writing em PT-BR):** Mensagens orientadas a *"O que aconteceu?"* e *"O que fazer agora?"*, banindo jargões corporativos robóticos.

### 🧠 Memória Contínua, Orçamento de Contexto & ADRs (ECC-Inspired)
* **`continuous-learning`:** Ledger em `.agents/memory/learnings.md` que armazena lições aprendidas após depurações, evitando reincidência de erros.
* **`context-budget`:** Heurísticas de leitura fatiada e economia de tokens para preservar a atenção do modelo.
* **`build-error-resolver`:** Protocolo cirúrgico para triagem de erros em Quality Gates sem mutações colaterais.
* **`architecture-decision-records`:** Framework em `docs/adr/` para documentar decisões técnicas estruturantes.

---

## 🛠️ Módulos de Infraestrutura Prontos para Uso

O Zenith já inclui utilitários de nível de produção em `src/lib/`:

* **`withApiHandler` (`src/lib/errors/api-handler.ts`):** Envelopa rotas de API do Next.js App Router com geração automática de `x-request-id`, captura defensiva de exceções, log de latência/status e formato JSON uniforme.
* **`rate-limit.ts` (`src/lib/rate-limit.ts`):** Proteção contra abuso e controle de custos (janela fixa em memória com limpeza periódica e suporte a headers padrão HTTP).
* **`logger.ts` (`src/lib/logger.ts`):** Logger oficial com redação automática de PII e segredos (LGPD-ready).
* **`AppError` (`src/lib/errors/app-error.ts`):** Erros tipados e padronizados com `ErrorCode`.
* **Test Factories (`src/test/factories/`):** Padrão declarativo para geração de dados de teste determinísticos com Vitest.

---

## 📁 Estrutura de Diretórios

```text
Zenith/
├── .agents/
│   ├── memory/
│   │   └── learnings.md               # Ledger de memória contínua do agente
│   ├── rules/
│   │   └── parallel-subagents.md      # Orquestração de subagentes concorrentes
│   └── skills/
│       ├── continuous-learning/       # Registro sistemático de lições aprendidas
│       ├── context-budget/            # Heurísticas de economia de contexto
│       ├── build-error-resolver/      # Recuperação determinística de builds
│       ├── architecture-decision-records/ # Gerador e auditor de ADRs
│       ├── expo-mobile-development/   # Padrões e ergonomia para Expo e React Native
│       ├── vercel-react-best-practices/ # 60+ regras oficiais da Vercel Labs
│       ├── security-review/           # Auditoria OWASP e análise de vulnerabilidades
│       ├── code-review-excellence/    # Padrões rigorosos de revisão de código
│       ├── web-quality-*/             # Acessibilidade, Core Web Vitals, Performance e SEO
│       ├── grill-with-docs/           # Entrevista para refinamento arquitetural
│       ├── emil-kowalski/             # Física de molas e micro-interações táteis
│       ├── taste/                     # Contenção estética e tipografia intencional
│       ├── stop-ai-slop/              # Eliminação de ruído e clichês de IA
│       └── humanizer/                 # Microcopy acolhedor e direto em PT-BR
├── .github/
│   └── assets/                        # Logo e assets visuais
├── docs/
│   ├── adr/                           # Architecture Decision Records versionados
│   │   ├── 000-template.md
│   │   ├── 001-zenith-blueprint-architecture.md
│   │   └── 002-multi-target-blueprint-and-expo.md
│   └── INSTRUCOES_IA.md               # Manual consolidado para o agente

├── scripts/
│   ├── sync-rules.js                  # Sincroniza RULES.md -> AGENTS.md e CLAUDE.md
│   └── hooks/
│       └── safe-hook-runner.js        # Runner fail-open para pre-commit e post-edit
├── src/
│   ├── lib/
│   │   ├── errors/                    # withApiHandler, AppError, ErrorCodes e responses
│   │   ├── rate-limit.ts              # Rate limiting com fail-open e headers HTTP
│   │   └── logger.ts                  # Logger com sanitização de PII
│   └── test/
│       └── factories/                 # Test Data Factories para Vitest
├── AGENTS.md                          # Regras para agentes autônomos
├── biome.json                         # Linter estrito e de alta velocidade
├── CLAUDE.md                          # Regras para Claude Code
├── DESIGN.md                          # Design Tokens e Mobile First
├── package.json                       # Scripts de validação e dependências
├── README.md                          # Documentação oficial
├── RULES.md                           # Fonte canônica de regras e governança
├── skills-lock.json                   # Catálogo fixo de skills instaladas
├── tsconfig.json                      # TypeScript Strict
└── vitest.config.ts                   # Execução rápida de testes unitários
```

---

## 🚀 Como Utilizar este Blueprint

### 1. Clonar
```bash
git clone https://github.com/MaaTPublio/Zenith.git meu-novo-projeto
cd meu-novo-projeto
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Sincronizar Regras de IA
```bash
npm run sync-rules
```

### 4. Executar os Portões de Qualidade
```bash
# Executa Typecheck + Linter Biome + Testes Vitest
npm run validate
```

---

<div align="center">
  <p>Feito para quem constrói software real com velocidade, gosto refinado e disciplina.</p>
</div>
