function regularFunction(x) {
  return x;
}

const arrowFunction1 = (x) => x; // direct return without {}
const arrowFunction2 = (x) => {
  return x;
}; // {} must be used to return an object

console.log(regularFunction(1)); // 1
console.log(arrowFunction1(1)); // 1
console.log(arrowFunction2(1)); // 1
