## TypeScript Eslint setup

1. First create a typescript + nodejs environment using the blog : [Typescript + NodeJS Blog](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
2. For setting up eslint, we will use this video : [Eslint Setup](https://www.youtube.com/watch?v=eieTlMwCwWU)
3. Install eslint and typescript-eslint parser

```bash
npm init @eslint/config@latest
```

4. Choose your preference : Example of My preference

```bash
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? None of these
? Which framework does your project use? None of these
? Does your project use TypeScript? Yes
? Where does your code run? Node
```

5. EsLint is created in your project. File is created named `eslint.config.mjs`. Add the following code to the file (Adding some rules)

```javascript
import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Disable the base rule and enable the TypeScript-specific rule
      "no-unused-vars": "off", // Disable the base ESLint rule
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
```

6. Now add the following script to your `package.json` file

```json
"scripts": {

    "lint": "eslint"
 },
```

7. Now run the following command to lint your code

```bash
npm run lint
```

8. If you want to directly show error in your code editor, you can install the eslint extension in your code editor.
