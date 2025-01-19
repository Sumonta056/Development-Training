interface User {
  name: string;
  age: number;
  statue: boolean;
  sayHi(): string;
  sayBye: () => string;
}

const person: User = {
  name: "Mridul",
  age: 24,
  statue: true,
  sayHi(): string {
    return `Hello ${this.name}`;
  },
  sayBye(): string {
    return `Goodbye ${this.name}`;
  },
};

console.log(person.sayHi());
