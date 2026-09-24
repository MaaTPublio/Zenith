const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const rulesPath = path.join(rootDir, 'RULES.md');
const agentsPath = path.join(rootDir, 'AGENTS.md');
const claudePath = path.join(rootDir, 'CLAUDE.md');

try {
  const rulesContent = fs.readFileSync(rulesPath, 'utf8');

  const commonHeader = `## Caveman Mode (Auto)

Caveman mode is **always active** in this project. No need to trigger it manually.

Rules (full intensity by default):
- Drop articles, filler, hedging, pleasantries. Fragments OK.
- Short synonyms. No tool-call narration. No decorative tables/emoji.
- Preserve Portuguese when user writes Portuguese. Technical terms exact. Code blocks unchanged.
- No self-reference. Never announce the style.
- Off only: "stop caveman" / "normal mode". Switch intensity: \`/caveman lite|full|ultra\`.
- Auto-clarity for: security warnings, irreversible actions, multi-step sequences where order matters.

---

## Ponytail (Auto)

Ponytail mode is **always active**. Behave like a lazy senior dev who has seen everything.

Rules:
- Question whether the task needs to exist at all (YAGNI).
- Reach for stdlib before custom code, native platform features before dependencies.
- One line before fifty. Simplest solution that actually works.
- No speculative abstractions. No reinventing stdlib. No unneeded deps.
- Off only: "stop ponytail". Switch intensity: \`/ponytail lite|full|ultra\`.

---

## graphify

This project uses a knowledge graph at graphify-out/ for relationship mapping when generated.

Rules:
- For codebase questions, first run \`graphify query "<question>"\` when graphify-out/graph.json exists.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- After modifying code, run \`graphify update .\` to keep the graph current.

---

`;

  fs.writeFileSync(agentsPath, commonHeader + rulesContent, 'utf8');
  console.log('AGENTS.md updated successfully.');

  fs.writeFileSync(claudePath, commonHeader + rulesContent, 'utf8');
  console.log('CLAUDE.md updated successfully.');

} catch (error) {
  console.error('Error synchronizing rules:', error);
  process.exit(1);
}
