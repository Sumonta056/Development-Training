// Multiple Value Promise
const http: Promise<{ code: number; message: string }> = new Promise(
  (resolve, reject) => {
    const success = false;
    if (success) {
      resolve({ code: 200, message: "OK" });
    } else {
      reject({ code: 404, message: "Not Found" });
    }
  }
);

http
  .then((response) => {
    console.log(response.code, response.message);
  })
  .catch((error) => {
    console.log(error.code, error.message);
  });

// Single Value Promise
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Task Completed!");
  } else {
    reject("Task Failed!");
  }
});

myPromise
  .then((result) => console.log(result)) // Task Completed!
  .catch((error) => console.error(error)); // Task Failed!
