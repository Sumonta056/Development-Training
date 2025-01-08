//  self-invoking expression is invoked (started) automatically, without being called.
(function () {
    let x = "Hello!!";  // I will invoke myself
    console.log(x)
  })();
  
  
  // Function Rest Parameter
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  let p = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(p);
  
  // The Arguments Object
  function sumArg(){
    let sum = 0;
    for ( let arg of arguments) sum += arg;
    return sum
  }
  let p1 = sumArg(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(p1);
  
  
  // Function Bind ()
  const person = { name: "Alice" };
  function sayHello(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
  }
  // Bind `sayHello` to `person`
  const sayHelloToAlice = sayHello.bind(person);
  sayHelloToAlice(); // Output: Hi, I am Alice
  