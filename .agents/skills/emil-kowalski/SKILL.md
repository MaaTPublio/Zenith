---
name: emil-kowalski
description: Interaction design, micro-interactions, animation physics, Framer Motion springs, fluid gestures, layout animations, exit transitions, and tactile UI details based on Emil Kowalski's principles.
---

# Emil Kowalski — Interaction & Animation Design

Guia de engenharia de interação e microinterações para o Zenith, baseado nos princípios e craft de Emil Kowalski (Animations on the Web).

---

## 1. Princípios Fundamentais

1. **Animação é Informação, Não Decoração:**
   - Toda animação deve comunicar estado, direção espacial ou feedback tátil imediato.
   - Se remover a animação e a interface perder clareza, ela é essencial. Se ficar melhor sem ela, remova.

2. **Durações Curtas e Respostas Instantâneas:**
   - **Microinterações (hover, press, toggle):** 100ms a 200ms.
   - **Transições de componentes (dropdowns, tooltips, toasts):** 150ms a 250ms.
   - **Transições de tela/gaveta (sheets, dialogs):** 250ms a 350ms.
   - **Regra de Ouro:** Nenhuma animação no Zenith deve ultrapassar 350ms.

3. **Física de Molas (Springs) em Vez de Easing Linear:**
   - Prefira animações com física realista (`type: "spring"` no Framer Motion).
   - **Snappy UI (botões, switches, checkboxes):**
     `{ type: "spring", stiffness: 400, damping: 30 }`
   - **Smooth Surfaces (sheets, modais, acordeões):**
     `{ type: "spring", stiffness: 300, damping: 25 }`
   - **Subtle Fade/Scale:**
     `{ type: "spring", stiffness: 500, damping: 35 }`

---

## 2. Regras de Performance

- **Apenas Transform e Opacity:**
  - NUNCA anime `width`, `height`, `top`, `left`, `margin` ou `padding` diretamente (causa repaint e layout thrashing).
  - Use exclusivamente: `transform` (`scale`, `x`, `y`, `rotate`) e `opacity`.
- **Layout Animations:**
  - Ao alterar tamanho ou reposicionar cards/listas, utilize o atributo `layout` ou `layoutId` do Framer Motion, que utiliza internamente a técnica FLIP (First, Last, Invert, Play) baseada em `transform`.

---

## 3. Padrões de Código (Framer Motion)

### Feedback Tátil em Botões e Itens de Lista
```tsx
<motion.button
  whileHover={{ scale: 1.015 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
  className="..."
>
  {children}
</motion.button>
```

### Transição de Entrada e Saída (Exit Animations)
Sempre utilize `<AnimatePresence mode="popLayout">` para evitar pulos quando elementos saem do DOM:
```tsx
<AnimatePresence mode="popLayout" initial={false}>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -4 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97, y: -2 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```
