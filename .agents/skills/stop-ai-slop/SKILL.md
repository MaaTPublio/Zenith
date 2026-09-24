---
name: stop-ai-slop
description: Detects and eliminates AI-generated UI clichés, decorative junk, purple gradient blobs, generic template patterns, and artificial marketing fluff from frontend code.
---

# Stop AI Slop — Diretriz Anti-Clichês de IA

Esta regra impede que o assistente gere interfaces que pareçam modelos pré-fabricados de IA ("AI slop") sem contexto, genéricas e cheias de ruído visual.

---

## 1. Padrões Proibidos (Anti-Patterns)

1. **O "Look Escuro com Gradiente Roxo":**
   - ❌ **PROIBIDO:** Fundos pretos com círculos desfocados de gradiente roxo/ciano/rosa (`bg-gradient-to-tr from-purple-500/20 via-transparent`).
   - ❌ **PROIBIDO:** Bordas luminosas com animação de feixe de luz giratório em todos os cards da tela.
   - ✔️ **CORRETO:** Fundos neutros sólidos ou sutis camadas de opacidade com tokens do Tailwind (`bg-background`, `bg-card`, borda `border-border`).

2. **O Grid Genérico de 3 Cards com Ícone em Círculo Colorido:**
   - ❌ **PROIBIDO:** Grade simétrica previsível com 3 colunas: ícone dentro de uma bolha colorida, título vago e texto genérico de duas linhas.
   - ✔️ **CORRETO:** Layouts modelados para os dados reais do produto.

3. **Copys e Slogans Vendedores de IA:**
   - ❌ **PROIBIDO:**
     - "Potencialize sua gestão com IA de última geração."
     - "Desbloqueie o poder dos seus fluxos."
     - "Uma nova era para sua produtividade."
   - ✔️ **CORRETO:** Copy direto, claro e prático.

4. **Poluição por Emojis Decorativos:**
   - ❌ **PROIBIDO:** Títulos ou botões prefixados com emojis decorativos clichês (`🚀 Dashboard`, `💡 Insight`, `🔥 Atenção`, `✨ Mágico`).
   - ✔️ **CORRETO:** Ícones semânticos da biblioteca oficial (`lucide-react`) posicionados apenas onde auxiliam o reconhecimento visual rápido.

5. **Cards Decorativos Sem Dados ou Ação:**
   - ❌ **PROIBIDO:** Adicionar cards decorativos apenas para preencher espaço em branco na tela.
   - ✔️ **CORRETO:** Apresentar estados vazios instruindo a primeira ação real do usuário.
