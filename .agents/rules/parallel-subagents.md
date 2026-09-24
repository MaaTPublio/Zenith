# Parallel Subagent Orchestration (Ondas Paralelas)

Protocolo obrigatório para despacho concorrente de subagentes no Zenith, eliminando colisões de arquivo e corridas de commit na raiz estrutural.

---

## 1. O Problema da Concorrência Ingênua

Quando múltiplos subagentes são disparados sem controle:
- **Sobrescrita silenciosa:** Dois agentes editam o mesmo arquivo simultaneamente e o último a salvar destrói o trabalho do primeiro.
- **Corrida de Git Commit:** Agentes tentam commitar concorrentemente, misturando mudanças ou quebrando o HEAD.

---

## 2. A Solução Estrutural

1. **Etiquetagem Obrigatória no Planejamento:**
   Toda tarefa destinada a subagente deve definir explicitamente:
   - `Files:` Lista exata de arquivos/diretórios que serão criados ou editados.
   - `Depends-on:` IDs de tarefas cujo resultado esta tarefa consome (ou `none`).
   - *Regra defensiva:* Se houver incerteza sobre o escopo ou dependências, degrade para execução serial.

2. **Formação de Ondas (*Waves*):**
   Duas ou mais tarefas só podem rodar na mesma onda se cumprirem AMBOS os critérios:
   - Nenhuma tarefa depende da outra (direta ou transitivamente).
   - O conjunto de arquivos (`Files:`) de cada tarefa é **100% disjunto** (nenhum arquivo compartilhado).

3. **Subagentes NUNCA Comitam:**
   - Subagentes operam exclusivamente no *working tree*.
   - É expressamente proibido subagentes executarem `git commit` ou `git push`.
   - O agente orquestrador principal aguarda o término de toda a onda, roda os quality gates (`typecheck`, `lint`, `test`) e comita as alterações de forma serial e atômica.
