# Learning Log

This file tracks what I build, why I build it, and what I learn while creating Nutrimap Mobile.

The goal is not to document every tiny line of code. The goal is to document meaningful setup steps, architecture decisions, new screens, navigation changes, data flow, and anything I want to remember later.

---

## 2026-05-10 — Initialized Expo blank app

### What changed

- Created a new React Native mobile app using Expo and the blank template.
- Ran the app on my phone using Expo Go.
- Confirmed that changes in `App.tsx` appear on the phone.

### Files touched

- `App.tsx`
- `app.json`
- `package.json`
- `tsconfig.json`
- `docs/learning-log.md`

### Why this matters

- This is the foundation of the mobile app.
- Starting from the blank template keeps the project small and easier to understand.
- Running it on my phone confirms the development setup works.

### What I learned

- Expo lets me run a React Native app on my phone without setting up native iOS/Android projects manually.
- `App.tsx` is currently the main file rendering the app.
- React Native uses components like `View` and `Text` instead of web elements like `div` and `p`.

### Questions / Needs verification

- I still need to understand how navigation between screens will work.
- I still need to decide whether to use Expo Router or React Navigation.

### Update

- Replaced React Native's deprecated `SafeAreaView` import with `SafeAreaView` from `react-native-safe-area-context`.

### Why this matters

- The built-in React Native `SafeAreaView` is deprecated.
- `react-native-safe-area-context` is the recommended safe-area solution for modern React Native/Expo apps.

---

## 2026-05-10 — Extracted reusable HomeCard component

### What changed

- Created a reusable `HomeCard` component.
- Replaced repeated card JSX in `App.tsx` with three `HomeCard` usages.

### Files touched

- `App.tsx`
- `src/components/HomeCard.tsx`
- `docs/learning-log.md`

### Why this matters

- Repeated UI was moved into a small reusable component.
- `App.tsx` is now easier to read.
- This introduces the React Native pattern of passing data into components through props.

### What I learned

- Props allow a component to receive different text while keeping the same structure.
- A reusable component should have one clear responsibility.
- A refactor can improve code without changing the visible app.

### Questions / Needs verification

- I still need to learn when a component should stay local versus become reusable.
