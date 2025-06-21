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
- [x] [Storybook](https://storybook.js.org)
- [x] [i18n](https://github.com/ivanhofer/typesafe-i18n)
- [x] [Husky](https://typicode.github.io/husky/)
- [x] [Commitlint](http://commitlint.js.org)
- [x] [Conventional Commits](https://www.conventionalcommits.org)
- [x] [Github Actions](https://github.com/features/actions)
- [x] [Turbo Generator](https://turbo.build/repo/docs/guides/generating-code)
- [x] [Trunk-Based Development](https://trunkbaseddevelopment.com/)

## Dependencies

| Dependency                | Version                                                     |
| ------------------------- | ----------------------------------------------------------- |
| `@commitlint/cli`         | ![v19.8.1](https://img.shields.io/badge/npm-v19.8.1-blue)   |
| `@internationalized/date` | ![v3.8.2](https://img.shields.io/badge/npm-v3.8.2-blue)     |
| `@playwright/test`        | ![v1.53.1](https://img.shields.io/badge/npm-v1.53.1-blue)   |
| `@sveltejs/kit`           | ![v2.22.0](https://img.shields.io/badge/npm-v2.22.0-blue)   |
| `bits-ui`                 | ![v2.8.7](https://img.shields.io/badge/npm-v2.8.7-blue)     |
| `eslint`                  | ![v9.29.0](https://img.shields.io/badge/npm-v9.29.0-blue)   |
| `husky`                   | ![v9.1.7](https://img.shields.io/badge/npm-v9.1.7-blue)     |
| `js-cookie`               | ![v3.0.5](https://img.shields.io/badge/npm-v3.0.5-blue)     |
| `nodemailer`              | ![v7.0.3](https://img.shields.io/badge/npm-v7.0.3-blue)     |
| `prettier`                | ![v3.5.3](https://img.shields.io/badge/npm-v3.5.3-blue)     |
| `storybook`               | ![v8.6.14](https://img.shields.io/badge/npm-v8.6.14-blue)   |
| `svelte`                  | ![v5.34.7](https://img.shields.io/badge/npm-v5.34.7-blue)   |
| `svelte-email-tailwind`   | ![v3.0.1](https://img.shields.io/badge/npm-v3.0.1-blue)     |
| `tailwindcss`             | ![v4.1.10](https://img.shields.io/badge/npm-v4.1.10-blue)   |
| `tailwind-variants`       | ![v1.0.0](https://img.shields.io/badge/npm-v1.0.0-blue)     |
| `turbo`                   | ![v2.5.4](https://img.shields.io/badge/npm-v2.5.4-blue)     |
| `typesafe-i18n`           | ![v5.26.2](https://img.shields.io/badge/npm-v5.26.2-blue)   |
| `typescript`              | ![v5.8.3](https://img.shields.io/badge/npm-v5.8.3-blue)     |
| `vite`                    | ![v6.3.5](https://img.shields.io/badge/npm-v6.3.5-blue)     |
| `vitest`                  | ![v3.2.4](https://img.shields.io/badge/npm-v3.2.4-blue)     |
| `zod`                     | ![v3.25.67](https://img.shields.io/badge/npm-v3.25.67-blue) |

## Folder Structure

```
. - Root directory of the repository
├── apps
│   ├── docs - Storybook application
│   └── web - Web application
└── packages
    ├── assets - Assets
    ├── config - Repository configuration
    │   ├── eslint - ESLint configuration
    │   ├── tailwind - TailwindCSS configuration
    │   └── typescript - Typescript configuration
    ├── locale - i18n locale files
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
