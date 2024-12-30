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
- [x] [Husky](https://typicode.github.io/husky/)
- [x] [Commitlint](http://commitlint.js.org)
- [x] [Conventional Commits](https://www.conventionalcommits.org)
- [x] [Github Actions](https://github.com/features/actions)
- [x] [Semantic Release](https://semantic-release.gitbook.io)
- [x] [Turbo Generator](https://turbo.build/repo/docs/guides/generating-code)

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

### Clear output, cache and node_modules

```bash
npm run clean
```
