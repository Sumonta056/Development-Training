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