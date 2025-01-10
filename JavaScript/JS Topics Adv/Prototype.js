/*
he JavaScript prototype property also allows you
to add new methods/variables to objects constructors
*/

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

// Protyping a function call named
Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};

const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);

Person.prototype.nationality = "English"; // Protyping a nationality var

console.log(myFather.nationality);
console.log(myFather.name());

console.log(myFather); // Here dont show nationality

/*
Why it doesn't show in console.log(myFather) directly:

console.log() by default displays only the "own properties" of an object.
Prototype properties are accessible when you explicitly query them (e.g., myFather.nationality), but they won't show up in a simple console.log() of the object.
*/
