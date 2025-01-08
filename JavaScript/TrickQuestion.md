```javascript
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z; // 3030
```

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName); // [Function: fullName]
```

```js
let x = "100";
let y = "10";
let z = x - y; //90
```

```js
let x = "100";
let y = "10";
let z = x + y; // 10010
```

```js
let a = "1";
function clTrick() {
  b = "2";
  let c = "3";
}
clTrick();
console.log(a + b); // 12
console.log(a + b + c); // ReferenceError: c is not defined
```
