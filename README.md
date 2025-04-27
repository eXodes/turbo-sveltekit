# Turbo Sveltekit

A Turbo monorepo repository with Sveltekit.

## Features

- [x] [Sveltekit](https://svelte.dev)
- [x] [Eslint](http://eslint.org)
- [x] [Prettier](http://prettier.io)
- [x] [Typescript](https://www.typescriptlang.org)
- [x] [TailwindCSS](http://tailwindcss.com)
- [x] [Vitest](http://vitest.dev)
- [x] [Playwright](http://playwright.dev)
- [ ] [Storybook](https://storybook.js.org)
- [x] [Husky](https://typicode.github.io/husky/)
- [x] [Commitlint](http://commitlint.js.org)
- [x] [Conventional Commits](https://www.conventionalcommits.org)
- [x] [Github Actions](https://github.com/features/actions)
- [ ] [Semantic Release](https://semantic-release.gitbook.io)
- [x] [Turbo Generator](https://turbo.build/repo/docs/guides/generating-code)

## Dependencies

| Dependency                | Version                                                   |
| ------------------------- | --------------------------------------------------------- |
| `@commitlint/cli`         | ![v19.8.0](https://img.shields.io/badge/npm-v19.8.0-blue) |
| `@internationalized/date` | ![v3.8.0](https://img.shields.io/badge/npm-v3.8.0-blue)   |
| `@playwright/test`        | ![v1.52.0](https://img.shields.io/badge/npm-v1.52.0-blue) |
| `@sveltejs/kit`           | ![v2.20.7](https://img.shields.io/badge/npm-v2.20.7-blue) |
| `bits-ui`                 | ![v1.3.19](https://img.shields.io/badge/npm-v1.3.19-blue) |
| `eslint`                  | ![v9.25.1](https://img.shields.io/badge/npm-v9.25.1-blue) |
| `husky`                   | ![v9.1.7](https://img.shields.io/badge/npm-v9.1.7-blue)   |
| `prettier`                | ![v3.5.3](https://img.shields.io/badge/npm-v3.5.3-blue)   |
| `svelte`                  | ![v5.28.2](https://img.shields.io/badge/npm-v5.28.2-blue) |
| `tailwindcss`             | ![v4.1.4](https://img.shields.io/badge/npm-v4.1.4-blue)   |
| `turbo`                   | ![v2.5.2](https://img.shields.io/badge/npm-v2.5.2-blue)   |
| `typescript`              | ![v5.8.3](https://img.shields.io/badge/npm-v5.8.3-blue)   |
| `vite`                    | ![v6.3.3](https://img.shields.io/badge/npm-v6.3.3-blue)   |
| `vitest`                  | ![v3.1.2](https://img.shields.io/badge/npm-v3.1.2-blue)   |
| `zod`                     | ![v3.24.3](https://img.shields.io/badge/npm-v3.24.3-blue) |

## Folder Structure

```
. - Root directory of the repository
├── apps
│   ├── docs - Documentation
│   └── web - Web application
└── packages
    ├── assets - Assets
    ├── config - Repository configuration
    │   ├── eslint - ESLint configuration
    │   ├── tailwind - TailwindCSS configuration
    │   └── typescript - Typescript configuration
    ├── turbo - Turbo helpers
    │   └── utils - Turbo utilities
    ├── ui - UI components
    └── utils - Utilities
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm run test
```

### Generate code

```bash
npm run gen
```

### Clear output, cache and node_modules

```bash
npm run clean
```
