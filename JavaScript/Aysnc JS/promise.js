const condition = false;

console.log("Start");

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (condition) {
      resolve("Promise is resolved");
    } else {
      reject("Failed!");
    }
  }, 2000);
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });


console.log("End");