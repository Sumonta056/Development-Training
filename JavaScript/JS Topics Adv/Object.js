const car = {

    // Different Datatypes
    name: "BMW",
    model: 500,
    weight: "520kg",
    color: "red",
  
    // Different functionalities
    start: function(){
      console.log("Starting the car");
    },
    stop: function(){
      console.log("Stoping the car");
    },
    details: function(){
      return "Car Name : " + this.name  +
      " Model : " + this.model;
    }
  };
  
  console.log(car.name); // Object style call
  console.log(car["name"]); // Array style call
  
  car.start();
  
  console.log(car.details()); 