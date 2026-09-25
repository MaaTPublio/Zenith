---
name: context-budget
description: "Diretrizes e heurísticas para otimização de orçamento de contexto de agentes, evitando saturação de tokens, lentidão e perda de precisão analítica."
---

# Context Budget & Token Economy

Esta skill orienta o agente a operar com economia máxima de contexto, preservando a atenção analítica e reduzindo custos e latência desnecessários.

## Princípios de Operação

### 1. Leituras Fatiadas (Slice Reads)
- Nunca leia arquivos inteiros de grande porte (>200 linhas) sem necessidade.
- Use `StartLine` e `EndLine` para focar estritamente no bloco de código relevante.
- Para verificar assinaturas de tipos ou exportações, leia apenas as linhas do topo ou busque o símbolo exato.

### 2. Execuções Atômicas e Escopadas de Comandos
- Nunca execute toda a suíte de testes (`vitest run`) repetidamente durante o ciclo de depuração rápida.
- Execute apenas o arquivo de teste alvo: `npx vitest run src/path/to/test.test.ts`.
- Deixe a verificação global para o Quality Gate pré-conclusão da tarefa.

### 3. Redução de Saídas Verborrágicas
- Evite listar árvores inteiras de diretórios quando um comando `Test-Path` ou filtro de busca pontual resolve.
- Comandos que geram logs longos devem ser limitados ou redirecionados.

### 4. Respostas Sintéticas e Focadas
- Respeite o modo Caveman: sem preâmbulos decorativos, saudações ou recapitulações longas de código que não mudou.
- Aponte diretamente o arquivo modificado com markdown links (`[caminho](file:///...)`).
