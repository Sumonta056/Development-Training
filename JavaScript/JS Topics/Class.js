// Building a structure of a object using class
class Car {
    constructor(name,year){
      this.name = name;
      this.year = year;
    }
    start(){
      console.log(`${this.name} is starting.....`);
    }
  }
  
  const car1 = new Car("BMW",2017);
  const car2 = new Car("Toyto",2019);
  const car3 = new Car("Audi",2020);
  const car4 = new Car("Cyber X",2022);
  
  
  car1.start();