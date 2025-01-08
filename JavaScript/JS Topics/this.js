/*
* “This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function.

? Default binding: When a function is called in the global scope, this inside that function will refer to the global object.

? Implicit binding: When a function is called as a method of an object, this inside that function will refer to the object.

?Explicit binding: When a function is called using call, apply, or bind, this inside that function will refer to the object that is passed as an argument.
*/


// * In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

const Person = {
    firstName: 'Sumonta Saha',
    lastName: 'Saha',
    fullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

// Here this refers to the Person object
console.log(Person.fullName()); // Sumonta Saha Saha

const Person2 ={
    firstName: "Promi",
    lastName: "Saha"
}

// Here this refers to the Person2 object
console.log(Person.fullName.call(Person2)); // Promi Saha