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
