const paymentSuccess = true;
const marks = 20;

function enroll() {
  console.log("Course Enrollment is starting...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        console.log("Enrollment Successful!");
        resolve(); // Call the next step
      } else {
        reject("Payment Failed!");
      }
    }, 3000);
  });

  return promise;
}

function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 40) {
        console.log("Course Completed!");
        resolve(); // Call the next step
      } else {
        reject("You don't have enough marks to complete the course!");
      }
    }, 2000);
  });

  return promise;
}

function getCertificate() {
  console.log("Certificate is ready to download!");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Certificate is downloaded!");
      reject("Failed to download the certificate!");
    }, 1000);
  });

  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
