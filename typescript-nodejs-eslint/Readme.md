# TypeScript Starter

A comprehensive guide to setting up a TypeScript + Node.js project with ESLint for clean and maintainable code.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (latest LTS version recommended)
- **npm** (comes with Node.js)

---

## Setup Instructions

### Step 1: Initialize the Project

1. Create a new directory for your project and navigate to it:

```bash
mkdir typescript-starter
cd typescript-starter
```

2. Initialize a new `package.json` file:

```bash
npm init -y
```

---

### Step 2: Install TypeScript

1. Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

2. Install Node.js type definitions:

```bash
npm install @types/node --save-dev
```

3. Initialize a TypeScript configuration file:

```bash
npx tsc --init --rootDir src --outDir build \ --esModuleInterop --resolveJsonModule --lib es6 \ --module commonjs --allowJs true --noImplicitAny true
```

4. Create the `src` directory:

```bash
mkdir src
```

---

### Step 3: Install Additional Tools

1. Install `ts-node` and `nodemon` for running and watching TypeScript files:

```bash
npm install --save-dev ts-node nodemon
```

2. Install `rimraf` for cross-platform folder deletion:

```bash
npm install --save-dev rimraf
```

---

### Step 4: Add Scripts to `package.json`

Update the `scripts` section in your `package.json` to include:

```json
"scripts": {
  "start:dev": "npx nodemon src/index.ts",
  "build": "rimraf ./build && tsc",
  "start": "npm run build && node build/index.js",
}
```

---

### Step 6: Verify Setup

1. Create a basic `index.ts` file in the `src` directory:

```tsx
const hello: string = "Hello, TypeScript Starter!";
console.log(hello);
```

2. Run the development server:

```bash
npm run start:dev
```

3. Run the linter:

```bash
   npm run lint
```

4. Build the project:

```bash
npm run build
```

---

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint for TypeScript Guide](https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/)

---
