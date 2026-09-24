---
name: taste
description: High-craft UI design taste, typographical hierarchy, functional density, intentional contrast, anti-generic aesthetic, and UI polish for Zenith.
---

# Design Taste — High-Craft UI Guidelines

Guia de refinamento estético e bom gosto visual para o Zenith. Elimina interfaces genéricas ou preguiçosas, aplicando rigor de tipografia, ritmo espacial e hierarquia de informação.

---

## 1. Princípios de Bom Gosto (Taste)

1. **Contenção e Rigor (Menos é Mais):**
   - Escolha **um** ponto de destaque visual por tela ou seção. Todo o resto deve recuar com disciplina para servir a esse ponto.
   - Aplique o conselho de Chanel: antes de concluir uma interface, olhe para o layout e remova um adorno desnecessário.

2. **Tipografia Intencional:**
   - **Tabular Nums Obrigatório:** Para valores monetários, métricas numéricas, percentuais e datas em tabelas/cards, use sempre números tabulares (`font-mono` ou `tabular-nums`) para evitar oscilação visual de largura durante atualizações.
   - **Hierarquia Estrita:** Diferencie títulos e legendas por peso (`font-medium` vs `font-normal`) e opacidade de cor (`text-foreground` vs `text-muted-foreground`), nunca aumentando o tamanho da fonte sem necessidade.

3. **Superfícies, Bordas e Profundidade:**
   - Evite sombras pesadas ou coloridas (`shadow-2xl`, sombras roxas/azuis).
   - Prefira elevação sutil: bordas de 1px com transparência (`border border-border/60`) e variações de fundo em camadas (`bg-background` -> `bg-card` -> `bg-muted/40`).
   - Linhas divisórias ultrafinas ou separação puramente espacial por respiro (gap).

4. **Densidade Funcional sem Carga Cognitiva:**
   - Informações relacionadas devem ser agrupadas com proximidade ótica (gestalt).
   - Espaçamento vertical coeso de 4px a 8px (`gap-1.5` ou `gap-2`).

5. **Paleta Semântica Controlada:**
   - Cores de destaque devem ser usadas com parcimônia cirúrgica.
   - Mantenha os dados neutros e use a cor apenas como indicador de sinal.

---

## 2. Checklist Rápido de "Taste"

- [ ] **Alinhamento ótico:** Ícones e textos alinhados pelo centro visual, não apenas pela caixa delimitadora.
- [ ] **Estados Vazios:** Título direto, texto orientador em 1 linha e botão de ação primária bem posicionado.
- [ ] **Padding Consistente:** Margens internas em cards seguindo a escala: `p-4` (mobile) e `p-6` (desktop).
- [ ] **Micro-espaçamento:** Espaçamentos entre label e input nunca maiores que 6px (`gap-1.5` ou `space-y-1.5`).
