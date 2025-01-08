console.log(funHoisting(2)); // 4
// Regular functions are hoisted in JavaScript. You can use the function before you declared it.
function funHoisting(a) {
  return a * a;
}
console.log(funHoisting(2)); // 4

// ----------------------------------------------

// Arrow functions are not hoisted. They must be defined before they are used.
console.log(funExpre(2)); // funExpre is not a function
const funExpre = (a) => a * a;
console.log(funExpre(2)); // 4
