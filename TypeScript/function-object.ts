type Person = {
    name: string;
    age: number;
  };
  
  function sayHi(person: Person) {
    console.log(`Hi ${person.name}`);
  }
  
  sayHi({
    name: 'John',
    age: 48,
  }); // Hi John