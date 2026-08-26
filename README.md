# Architecture Lab

A minimal Expo-based project created for testing and experimenting with modern React Native architecture.

This repository is **not a production application**. It is an experimental project used to validate architecture, React 19 features, Expo tooling, debugging capabilities, and development workflows before applying them to a production project.

## Environment

- Expo: SDK 57
- React Native: Expo-managed React Native version
- React: 19
- Android: Android 12+
- Device: Physical Android device / Emulator

## Background

Our previous production project was built using **React Native CLI 0.78**.

During development, we faced some issues with the development and debugging experience, including problems with DevTools features such as the **Network tab**.

Instead of experimenting directly inside the production application, we created this separate **Architecture Lab** project.

The purpose is to test the latest Expo and React Native architecture in an isolated environment and determine whether it can fulfill the requirements of our existing application.

## Goals

The main goals of this project are:

- Test the latest Expo architecture
- Test React Native New Architecture
- Test React 19 features
- Test the `use()` API
- Test Suspense
- Test Error Boundaries
- Test Zustand
- Test API handling
- Test loading and error states
- Test performance
- Test Expo DevTools
- Test Network debugging
- Test Firebase integration
- Test unit testing
- Test CI/CD
- Evaluate overall developer experience

## Background Architecture

The previous project used:

- React Native CLI
- React Native 0.78
- React 19
- Redux/Zustand-based state management
- Custom API handling
- Custom loading and error handling

The Architecture Lab is being used to experiment with a newer approach based on:

- Expo
- React Native New Architecture
- React 19
- Zustand
- React `use()`
- Suspense
- Error Boundaries
- Feature-based architecture

## Architecture Lab Approach

We are following an incremental testing approach:

1. Create a new Expo application.
2. Reproduce the basic requirements of the existing application.
3. Enable and test the New Architecture.
4. Test React 19 APIs.
5. Test Zustand for state management.
6. Test API handling.
7. Test loading and error handling.
8. Test Suspense and Error Boundaries.
9. Test Expo DevTools and Network debugging.
10. Test performance and development experience.
11. Compare the results with the previous React Native CLI setup.
12. Decide which approach is suitable for future production development.

## Current Experiment

The current experiment uses a simple product application and a dummy API.

The product feature is used to test:

- API requests
- Product listing
- Loading states
- Error states
- Empty states
- Suspense
- Error Boundaries
- Zustand
- React 19 `use()`
- Feature-based folder structure
- Component architecture

## Project Structure

```text
src/
├── app/
│   └── ...
│
├── features/
│   └── products/
│       ├── components/
│       ├── hooks/
│       ├── screens/
│       ├── services/
│       ├── store/
│       └── types/
│
├── components/
│   └── ...
│
├── stores/
│   └── ...
│
├── services/
│   └── ...
│
└── utils/
    └── ...
```
