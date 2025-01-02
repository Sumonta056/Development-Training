// Can be used as constructors to create objects
function regularFunction() {
  this.name = "Example";
}
const instance = new regularFunction(); // 
console.log(instance.name); // Outputs: Example

// Cannot be used as constructors.
const arrowFunction = () => {
  this.name = "Example";
};
const instance2= new arrowFunctionFunction();
console.log(instance2.name); /// Error: ArrowFunction is not a constructor
