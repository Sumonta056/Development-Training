let myObj = {
  x: 2,
  regularFunc() {
    console.log(this.x);
  },
  arrowFunc: () => {
    console.log(this.x);
  },
};

myObj.regularFunc(); // 2
myObj.arrowFunc(); // undefined
