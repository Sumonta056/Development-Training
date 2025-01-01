# JavaScript

<details>
  <summary>What's the key difference between the semicolon with and without javascript statement</summary>

In JavaScript, semicolons are used to terminate statements, but JavaScript also has a feature called Automatic Semicolon Insertion (ASI). This feature allows the interpreter to add semicolons automatically in certain situations where they are omitted. Here's the key difference between using a semicolon and relying on ASI:

### 1. Using a Semicolon Explicitly

- What it does: Ends a statement explicitly, making the code unambiguous.
- Best for: Avoiding pitfalls caused by ASI and ensuring code behaves as intended.
- Example:

```javascript
let x = 5;
let y = 10;
console.log(x + y);
```

<hr>

### 2.Without a Semicolon (Relying on ASI)

- What it does: JavaScript tries to infer where a semicolon is needed and inserts it for you.
- Risk: ASI can sometimes behave unexpectedly, leading to bugs.
- Example:

```javascript
let x = 5;
let y = 10;
console.log(x + y);
```

In this case, the code will work because ASI will insert semicolons correctly.

### 3. Common Pitfalls of ASI

ASI doesn’t always work as intended, especially in edge cases. For instance:

> Case 1: Return Statement

```javascript
function getValue() {
  return;
  {
    value: 42;
  }
}
```

- Expected Result: { value: 42 }
- Actual Result: undefined
- Why? ASI inserts a semicolon after return, making it equivalent to:

```javascript
return;
{
  value: 42;
}
```

<hr>

> Case 2: Chained Statements

```javascript
let x = (5)[(1, 2, 3)].forEach(console.log);
```

- Expected Result: Logs 5 and 6.
- Error: `SyntaxError: Unexpected token '['`.
- Why? ASI doesn’t insert a semicolon after let x = 5, so JavaScript treats the [ as part of the same statement.

</details>
