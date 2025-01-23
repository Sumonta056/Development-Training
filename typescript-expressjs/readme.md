# TypeScript Express.js Setup Guide

This guide will help you set up a new Express.js project using TypeScript.

## Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

## Steps

1. **Initialize a new Node.js project**

   ```sh
   npm init -y
   ```

2. **Install Express**

   ```sh
   npm i express
   ```

3. **Install TypeScript and Type Definitions for Express**

   ```sh
   npm i -D typescript
   npm i -D @types/express
   ```

4. **Initialize TypeScript Configuration**

   ```sh
   npx tsc --init
   ```

5. **Build the TypeScript Project**

   ```sh
   npx tsc --build
   ```

6. **Run the Project**

   ```sh
   node ./dist/index.js
   ```

7. **Install Nodemon for Development**

   ```sh
   npm i -D nodemon
   ```

8. **Install ts-node for TypeScript Execution**

   ```sh
   npm i -D ts-node
   ```

9. **Navigate to the Project Directory**

   ```sh
   cd "C:\Users\cefalo\Downloads\Development Training\typescript-expressjs"
   ```

## Additional Configuration

To streamline the development process, you can add scripts to your `package.json` file:

```json
{
  "scripts": {
    "build": "tsc --build",
    "start": "node ./dist/index.js",
    "start:dev": "nodemon ./src/index.ts"
  }
}
```
