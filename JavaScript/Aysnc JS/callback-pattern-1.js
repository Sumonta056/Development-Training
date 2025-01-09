const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
  console.log("Course Enrollment is starting...");

  setTimeout(function () {
    if (paymentSuccess) {
      console.log("Enrollment Successful!");
      callback();
    } else {
      console.log("Payment Failed!");
    }
  }, 3000);
}

function progress(callback) {
  console.log("Course on progress...");

  setTimeout(function () {
    if (marks >= 40) {
      console.log("Course Completed!");
      callback();
    } else {
      console.log("You don't have enough marks to complete the course!");
    }
  }, 2000);
}

function getCertificate() {
  console.log("Certificate is ready to download!");

  setTimeout(function () {
    console.log("Certificate is downloaded!");
  }, 1000);
}

// Calling without chaining
enroll(progress); 
progress(getCertificate);
