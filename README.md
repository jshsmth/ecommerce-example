# Smithy Frontend Engineer

This is a Turborepo-based monorepo project.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 10.9.2 or compatible)

### Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd smithy-frontend-engineer
npm install
```

## What's inside?

This monorepo includes the following apps and packages:

### Apps

- `web`: a [Next.js](https://nextjs.org/) application

### Packages

- `@repo/ui`: a React component library shared by applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

## Running Locally

### Development Mode

To run all apps and packages in development mode:

```sh
npm run dev
```

This will start the development server for all applications. The web app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build all apps and packages:

```sh
npm run build
```

### Linting

To run linting across all apps and packages:

```sh
npm run lint
```

### Type Checking

To run type checking across all apps and packages:

```sh
npm run check-types
```

### Formatting

To format all files:

```sh
npm run format
```
