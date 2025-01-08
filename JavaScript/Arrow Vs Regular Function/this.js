let myObj = {
  x: 2,
  regularFunc() {
    console.log(this.x);
  },
  // Arrow functions do not have their own this
  arrowFunc: () => {
    console.log(this.x);
  },
};

myObj.regularFunc(); // 2
myObj.arrowFunc(); // undefined
