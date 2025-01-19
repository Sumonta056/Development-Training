let newUserName: string = "Sumonta Saha Mridul";
console.log(newUserName);

interface User {
  name: string;
  age: number;
  status: boolean;
}

const user: User = {
  name: "Mridul",
  age: 24,
  status: true,
};

console.log(user);


// let roll: number = 123; // using type-annotation in ts
// roll = "456"; // error: Type '"456"' is not assignable to type 'number'.

// let id = 123; // using type-inference in ts
// id = "456"; // error: Type '"456"' is not assignable to type 'number'.
