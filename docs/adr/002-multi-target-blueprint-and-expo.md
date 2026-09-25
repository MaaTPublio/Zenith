# ADR 002: Desacoplamento Multi-Target e Adoção de Expo para Mobile

* **Status:** Aceito
* **Data:** 2026-09-25
* **Autores / Decisores:** Mateus / Zenith Agent

---

## 1. Contexto do Problema
O Zenith foi inicialmente configurado com exemplos focados em Next.js para aplicações web. No entanto, prender o blueprint a um único framework web limita sua aplicação em projetos mobile nativos (iOS e Android) e serviços de backend especializados, onde Next.js não é a tecnologia adequada.

## 2. Decisão Arquitetural
1. **Desacoplamento do Núcleo:** As regras canônicas do Zenith (Segurança, Confiabilidade, Descoberta em Duas Fases, TDD Scoped, Observabilidade, Teto de 350 linhas, Qualidade Biome/Vitest) são declaradas **agnósticas de framework**.
2. **Estratégia de Stacks Especializadas:**
   - **Para Aplicações Web, SaaS e Portais SEO:** Adotar Next.js (App Router) + Tailwind CSS + Server Actions.
   - **Para Aplicativos Móveis Nativos (iOS e Android):** Adotar **Expo** com Expo Router + React Native + NativeWind / StyleSheet + Reanimated + Safe Area + SecureStore.
   - **Para Microserviços / Backends Isolados:** Node.js (Fastify) ou Go/Python conforme requisitos de throughput e concorrência.
3. **Isolamento de Dependências:** O repositório base do Zenith mantém apenas dependências de tooling e contratos genéricos, evitando inflar o `package.json` raiz com bibliotecas nativas móveis. A sabedoria de cada ecossistema reside em skills dedicadas (`expo-mobile-development` e `vercel-react-best-practices`).

## 3. Alternativas Consideradas
- **Monorepo com Turborepo (Next.js + Expo compartilhando UI via Solito/Tamagui):** Rejeitado no blueprint base para evitar complexidade prematura (YAGNI). O compartilhamento pode ser adotado contextualmente pelo projeto quando necessário.
- **PWA (Progressive Web App com Next.js):** Rejeitado como substituto para apps que demandam performance de 60/120fps, haptics precisos, background tasks e acesso nativo a hardware.

## 4. Consequências e Trade-offs
- **Pontos Positivos:** O Zenith torna-se universal para produtos digitais (web ou mobile nativo); agentes de IA agora possuem regras claras de ergonomia e segurança tanto para web quanto para Expo.
- **Pontos de Atenção:** O desenvolvedor ou agente deve identificar explicitamente o target do projeto (Web vs Mobile) no início do desenvolvimento para carregar o conjunto de regras correto.
