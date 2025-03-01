# Smithy Frontend Engineer

This is a modern, full-stack e-commerce product showcase application built with Next.js and tRPC. The project demonstrates my ability to work with modern frontend technologies and implement best practices in a monorepo architecture.

## Requirements Implementation

### Core Features ✅

1. **Product Listing Page**

   - Responsive grid layout of products with images, names, and prices
   - Implemented pagination
   - Loading states and error handling

2. **Product Detail Page**

   - Detailed product information with image
   - Add to Cart functionality

3. **Shopping Cart**

   - Persistent cart state
   - Real-time total price calculation
   - Item quantity management
   - Remove items functionality

4. **Checkout Experience (Mocked)**

   - Simple checkout form for product details and payment
   - Mock payment processing to complete the flow
   - Order summary with total price breakdown
   - Success confirmation page

5. **Responsive Design**
   - Grids used for responsive design mostly

### Technical Requirements ✅

1. **Framework & Libraries**

   - Next.js 15 with TypeScript
   - Tailwind CSS for styling
   - tRPC for type-safe API communication (Extra Credit)
   - Monorepo structure using Turborepo (Extra Credit)

2. **State Management**

   - Zustand for cart state

3. **API Integration**
   - Fake store API

## Technical Overview

### Core Technologies

- **Next.js 15**: As specified in the technical requirements, this project is built with Next.js

- **tRPC**: Although this was my first time working with tRPC, I chose it because:

  - End-to-end type safety
  - Built on top of familiar technologies (TypeScript, Zod)

- **TanStack Query**: Having extensive experience with TanStack Query (formerly React Query) in SPA projects, I leveraged it here through tRPC's integration to provide:
  - Automatic caching and invalidation
  - Loading and error states management

### Architecture & Tools

- **Turborepo**: Monorepo structure for better code organization and sharing
- **TypeScript**: Full type safety across the entire application
- **Tailwind CSS**: Modern utility-first styling with custom configuration
- **Zod**: Runtime type validation for API requests
- **ESLint & Prettier**: Code quality and formatting consistency
- **Custom UI Components**: Shared component library

### Project Structure

The monorepo is organized into the following packages:

- `apps/web`: Main Next.js application
- `packages/ui`: Shared React component library
- `packages/eslint-config`: Shared ESLint configurations
- `packages/typescript-config`: Shared TypeScript configurations

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 10.9.2 or compatible)

### Installation

1. Clone the repository:

```sh
git clone <repository-url>
cd smithy-frontend-engineer
```

2. Install dependencies:

```sh
npm install
```

## Running the Application

### Development Mode

1. Start the development server:

```sh
npm run dev
```

2. Access the application:

   - Open [http://localhost:3000](http://localhost:3000) in your browser

### Quality Checks

```sh
# Run linting
npm run lint

# Run type checking
npm run check-types

# Format code
npm run format
```

## Architecture & Design Decisions

### 1. Monorepo Structure (Extra Credit)

- Organized codebase using Turborepo
- Shared UI components and configurations

### 2. API Layer (Extra Credit)

- Chose tRPC over REST for:
  - End-to-end type safety
  - Enhanced developer experience

### 3. SEO Optimization (Extra Credit)

- 100% Lighthouse score

### 4. Performance Optimizations

- Image optimization with Next.js
- Efficient caching strategy
- Optimized fonts and assets

## Development Trade-offs

### 1. Technology Choices

- **tRPC vs REST**:
  - Selected tRPC for type safety despite being less common
  - Leveraged existing TanStack Query knowledge

### 2. Development Approach

- **Time Constraints**:

  - Focused on core functionality first
  - Returned at the end to write tests and move components into UI library

- **Feature Scope**:
  - Implemented required features completely
  - Added extra credit features where time allowed

## Code Quality & Best Practices

1. **SOLID Principles**:

   - Single Responsibility Principle in component design
   - Interface Segregation in TypeScript types

2. **Design Patterns**:

   This was my first time using Next.js,
   as I primarily work with Single Page Applications (SPAs).
   I applied my existing knowledge of SPA development while adapting to Next.js's opinionated approach

3. **Code Organization**:
   - Feature-based directory structure
   - Shared UI component library
   - Consistent naming conventions

## Deployment

The application is deployed on Vercel and can be accessed at: [https://smithy-frontend-engineer-web.vercel.app/]
