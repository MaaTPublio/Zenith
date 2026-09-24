---
name: Zenith
description: Blueprint de Engenharia e Design System Mobile First com foco em alta clareza, tipografia intencional e baixa sobrecarga cognitiva.
colors:
  primary: "#4F46E5"
  primary-accent: "#06B6D4"
  neutral-bg: "#F8FAFC"
  neutral-surface: "#FFFFFF"
  neutral-text: "#0F172A"
  neutral-muted: "#64748B"
  neutral-border: "#E2E8F0"
  success: "#10B981"
  danger: "#EF4444"
  warning: "#F59E0B"
  dark-bg: "#0B0F19"
  dark-surface: "#111827"
  dark-text: "#F8FAFC"
  dark-border: "#1F2937"
---

# Design System & Guidelines — Zenith

## 1. Princípios de Interface

1. **Ergonomia Mobile First:**
   - Todo layout nasce na viewport de 360px a 430px;
   - Elementos primários de ação ficam situados na *thumb zone* (terço inferior da tela);
   - Padding horizontal mínimo de 16px (`px-4`) no mobile.

2. **The 10% Accent Rule:**
   - Cores primárias de alto contraste ou gradientes nunca ocupam mais de 10% da área útil da tela.
   - Sua escassez é o que dá força aos botões de ação principal (CTAs).

3. **The High-Contrast & Tabular Rule:**
   - Todo texto deve atingir contraste mínimo WCAG 2.2 AA (4.5:1 para texto normal, 3:1 para grandes títulos);
   - Números, datas, métricas e moedas usam `tabular-nums` ou fonte monoespaciada para evitar saltos horizontais de layout.

4. **Superfícies Tonais (Sem Neumorfismo ou Sombras Pesadas):**
   - Elevação criada por bordas translúcidas sutis (`border border-border/60`) e variações de fundo;
   - Sombras apenas em foco ou hover ativo.

5. **Prevenção de Zoom no iOS:**
   - Campos de input utilizam `text-base` (16px) em viewports móveis para evitar zoom forçado no Safari do iOS.

## 2. Componentes Padrão

- **Botão Primário:** `h-10 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium transition-all active:scale-[0.97]`
- **Botão Secundário:** `h-10 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80`
- **Card:** `p-5 sm:p-6 rounded-xl bg-card text-card-foreground border border-border shadow-sm`
- **Input:** `h-10 px-3 py-2 rounded-lg bg-background border border-input text-base sm:text-sm focus-visible:ring-2 focus-visible:ring-primary`
