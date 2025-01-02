function regularFunction() {
  console.log(arguments);
}

const arrowFunction = () => {
  console.log(arguments);
};

const updateArrowFunction = (...args) => {
  console.log(args);
};

regularFunction(1, 2, 3); // { '0': 1, '1': 2, '2': 3 }
arrowFunction(1, 2, 3); // ReferenceError: arguments is not defined
updateArrowFunction(1, 2, 3); // [ 1, 2, 3 ]
