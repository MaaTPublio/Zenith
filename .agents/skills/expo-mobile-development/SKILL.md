---
name: expo-mobile-development
description: "Padrões arquiteturais, boas práticas e ergonomia para desenvolvimento de aplicativos móveis nativos (iOS e Android) com Expo e React Native."
---

# Expo & React Native Mobile Development Skill

Esta skill define as diretrizes de engenharia para criação de aplicativos móveis de alto padrão utilizando o ecossistema **Expo** e **React Native**.

---

## 1. Princípios Fundamentais

- **Mobile Nativo em Primeiro Lugar:** Aplicativos móveis não são páginas web empacotadas. Respeite as convenções de plataforma (iOS Human Interface Guidelines e Material Design 3).
- **Sem DOM no Mobile:** Proibido o uso de elementos HTML (`div`, `span`, `p`, `button`) ou APIs de navegador (`window`, `document`, `localStorage`). Utilize sempre primitivas React Native (`View`, `Text`, `Pressable`, `ScrollView`).
- **Tamanho Mínimo de Alvo de Toque:** Todo elemento interativo deve possuir área mínima de toque de **44x44 pt** (Apple HIG) ou **48x48 dp** (Android).
- **Prevenção de Fugas de Memória e Re-renders:** Listas longas devem usar `FlashList` (@shopify/flash-list) ou `FlatList` com `keyExtractor` estável e `renderItem` memoizado.

---

## 2. Estrutura e Roteamento (Expo Router)

Utilize o **Expo Router** baseado em sistema de arquivos na pasta `app/`:

```text
app/
├── (auth)/
│   ├── _layout.tsx            # Stack sem header para login/cadastro
│   ├── login.tsx
│   └── register.tsx
├── (tabs)/
│   ├── _layout.tsx            # Bottom Tab Bar com ícones e haptics
│   ├── index.tsx              # Aba Principal
│   └── profile.tsx            # Aba Perfil
├── [id].tsx                   # Rota dinâmica
└── _layout.tsx                # Root layout com Providers e Splash Screen
```

- **Tipagem Estrita:** Habilite `experiments.typedRoutes: true` no `app.json`.
- **Navegação Segura:** Use o hook `useRouter` do `expo-router` e evite navegações aninhadas que empilhem telas desnecessariamente.

---

## 3. Ergonomia, Safe Area e Feedback Tátil

### Safe Area
- Sempre envolva telas com `SafeAreaProvider` na raiz.
- Use `useSafeAreaInsets` de `react-native-safe-area-context` para aplicar padding dinâmico e evitar colisão com a Dynamic Island, entalhes e a barra de navegação inferior:
```tsx
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ScreenContainer({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}>
      {children}
    </View>
  );
}
```

### Micro-interações Táteis (Haptics)
- Toda ação tátil crítica (confirmar, curtir, deletar, alternar switch) deve disparar feedback háptico via `expo-haptics`:
```tsx
import * as Haptics from "expo-haptics";

// Em cliques leves ou tabs
await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

// Em conclusões de fluxo com sucesso
await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

// Em erros de validação ou alertas
await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
```

### Física de Molas (Reanimated)
- Use `react-native-reanimated` com molas fluidas (`withSpring`) em transições de layout e gestos, respeitando o princípio de Emil Kowalski (sem animações duras ou lineares).

---

## 4. Segurança & Armazenamento

| Dado | Mecanismo Obrigatório | Mecanismo Proibido |
| :--- | :--- | :--- |
| **Tokens JWT / Senhas / Chaves** | `expo-secure-store` (Keychain iOS / Keystore Android) | `AsyncStorage` puro (não criptografado) |
| **Preferências do Usuário / Cache Offline** | `react-native-mmkv` ou `@react-native-async-storage/async-storage` | Arquivos planos sem sanitização |
| **Arquivos & Mídia Local** | `expo-file-system` | Manipulação direta de caminhos nativos |

---

## 5. Performance de Mídia e Renderização

- **Imagens:** Use sempre `expo-image` em vez de `<Image>` nativo do React Native para obter cacheamento eficiente em disco/memória, blurhash e transições suaves.
- **Engine JavaScript:** Garanta o uso do **Hermes** ativado em produção.
- **Offline First:** Estruture queries de rede (ex: TanStack Query) com persistência local para carregamento instantâneo mesmo sem conectividade.
