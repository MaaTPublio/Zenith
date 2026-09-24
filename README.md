<div align="center">
  <img src=".github/assets/logo.png" alt="Zenith Logo" width="220" style="border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);" />
  <h1>Zenith</h1>
  <p><strong>The High-Craft Software Engineering & AI Pair-Programming Blueprint</strong></p>
  <p>Um blueprint de engenharia disciplinada, governança de IA, ergonomia Mobile First e refinamento de interface.</p>

  <p>
    <img src="https://img.shields.io/badge/TypeScript-5.x_Strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Next.js-15.x-000000?logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/Biome-Linter_2.5-60A5FA?logo=biome&logoColor=white" alt="Biome" />
    <img src="https://img.shields.io/badge/Vitest-Unit_Tests-6E9F18?logo=vitest&logoColor=white" alt="Vitest" />
    <img src="https://img.shields.io/badge/Framer_Motion-Spring_Physics-FF0055?logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
  </p>
</div>

---

## 🌟 Sobre o Zenith

O **Zenith** é a destilação prática de padrões de engenharia de software de alta performance, construído para servir como **blueprint canônico** para novos produtos e sistemas.

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

## 🎨 Craft de UI & Anti-AI Slop

O Zenith integra skills nativas para elevar o acabamento visual e funcional:

* **⚡ `emil-kowalski` (Spring Physics & Micro-interações):**
  * Física de molas realistas com Framer Motion (`type: "spring"`).
  * Nenhuma animação excede **350ms** (micro-interações de 100ms a 200ms).
  * Animações restritas a `transform` e `opacity` para evitar *layout thrashing*.
  * Padrão `<AnimatePresence mode="popLayout">` para transições de saída estáveis.

* **🎯 `taste` (Contenção & Tipografia Funcional):**
  * Regra da Contenção: apenas **um** ponto de destaque visual por seção.
  * *Tabular Numbers* obrigatórios (`tabular-nums`) em números, moedas e datas.
  * Densidade funcional com proximidade ótica de 4px–8px.
  * Elevação suave com bordas translúcidas (`border-border/60`), banindo sombras pesadas.

* **🚫 `stop-ai-slop` (Diretriz Anti-Clichês de IA):**
  * Proibição de fundos pretos com bolhas roxas/ciano genéricas (`gradient blobs`).
  * Proibição do grid previsível de 3 cards com ícones em círculos coloridos.
  * Proibição de slogans vazios e emojis decorativos em excesso (`🚀`, `✨`, `🔥`).

* **💬 `humanizer` (UX Writing em Português Brasileiro):**
  * Toda mensagem responde imediatamente a: **"O que aconteceu?"** e **"O que fazer agora?"**.
  * Termos corporativos/robóticos banidos (ex: proibido *"Operação efetuada com sucesso"*, usa-se *"Pronto! Item salvo"*).
  * Empty states em 3 passos: identifica o espaço, explica o benefício e oferece a ação inicial.

---

## 🛡️ Observabilidade e Qualidade Técnica

* **Sem `console.log`:** Utilização exclusiva do logger oficial (`src/lib/logger.ts`) com redação automática de dados sensíveis e PII (LGPD).
* **Tratamento de Erros Padronizado:** NUNCA lançar `Error` genérico; uso de `AppError` com `ErrorCode` explícito e tipado.
* **Respostas de API Consistentes:** Respostas estruturadas com `requestId`, `timestamp` e `errorCode`.
* **Mobile First Rigoroso:** Controles críticos na *thumb zone* e prevenção de zoom involuntário no iOS Safari (`text-base` / 16px em inputs).

---

## 📁 Estrutura do Blueprint

```text
Zenith/
├── .agents/
│   ├── rules/
│   │   └── parallel-subagents.md      # Protocolo de orquestração de subagentes concorrentes
│   └── skills/
│       ├── emil-kowalski/SKILL.md     # Animação fluida e física de molas
│       ├── taste/SKILL.md             # Contenção estética e tipografia intencional
│       ├── stop-ai-slop/SKILL.md      # Eliminação de clichês e ruído de IA
│       └── humanizer/SKILL.md         # Microcopy acolhedor e acionável em PT-BR
├── .github/
│   └── assets/                        # Assets visuais e branding
├── docs/
│   └── INSTRUCOES_IA.md               # Manual condensado de diretrizes para o agente
├── scripts/
│   ├── sync-rules.js                  # Sincroniza RULES.md -> AGENTS.md e CLAUDE.md
│   └── hooks/
│       └── safe-hook-runner.js        # Runner fail-open para pre-commit e post-edit
├── src/
│   └── lib/
│       ├── errors/                    # AppError, ErrorCodes e contrato tipado
│       └── logger.ts                  # Logger seguro com sanitização de PII
├── .gitignore                         # Exclusões de ambiente, builds e dependências
├── AGENTS.md                          # Regras canônicas para agentes autônomos
├── biome.json                         # Linter de alta velocidade (zero erros tolerados)
├── CLAUDE.md                          # Regras canônicas para Claude Code
├── DESIGN.md                          # Design Tokens, 10% Accent Rule e Mobile First
├── package.json                       # Scripts de validação e dependências
├── README.md                          # Documentação oficial
├── RULES.md                           # Fonte canônica de regras e governança
├── skills-lock.json                   # Catálogo fixo de skills
├── tsconfig.json                      # TypeScript Strict
└── vitest.config.ts                   # Configuração de testes unitários ultrarrápidos
```

---

## 🚀 Como Utilizar este Blueprint

### 1. Clonar ou Usar como Template
```bash
git clone https://github.com/MaaTPublio/Zenith.git meu-novo-projeto
cd meu-novo-projeto
```

### 2. Instalar Dependências
```bash
npm install
```

### 3. Sincronizar Regras de IA
Sempre que editar `RULES.md`, propague as diretrizes para todos os ecossistemas de agentes com:
```bash
npm run sync-rules
```

### 4. Executar Quality Gates
Nenhum PR ou funcionalidade deve ser concluída sem aprovação em todos os portões de qualidade:
```bash
# Executa Typecheck + Linter Biome + Testes Vitest
npm run validate
```

---

<div align="center">
  <p>Feito para quem constrói software real com velocidade, gosto refinado e disciplina.</p>
</div>
