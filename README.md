An exercise on react native about smooth animated todo app, follow [Takuya](https://github.com/craftzdog)

## Why

- Learning and experience the React Native.

- Maybe build up connection between org mode and my own todo app.

- Maybe build up connection between apple calendar and org mode.

## Todo

see [logseq video schedule](React-Native.org)

### Digest

Ingredients:

- `React Native` - ReactJS-based framework that can use native platform capabilities.

- `Expo` - Toolset for building and delivering RN apps.

- `React Navigation(v6)` - Routing and Navigation.

- `NativeBase(v3)` - Themable component library.

- `React Native Reanimated` - Animations

- `React Native SVG` - Drawing SVG

- `Moti` - Helper module for Reanimated 2

Project Structure:

```shell
tree -L 1 .
.
├── App.tsx         # Entry point
└── src
    ├── screens     # Screen components
    ├── components  # UI components
    ├── utils       # Custom hooks and helpers
    └── assets      # Image files
```

### Create a new Expo project

Create a new Expo project:

```shell
expo init animated-todo -t expo-template-blank-typescript
```
Prettier && TsConfig:

see the config in files.

using yarn to install tools:

```shell
yarn add -D prettier
```
Add related Dependencies

```shell
yarn add @react-navigation/native @react-navigation/drawer react-native-screens

yarn add native-base react-native-svg styled-component syled-system

yarn add moti react-native-reanimated

yarn add react-native-safe-area-context shortid @types/shortid expo-linking
```