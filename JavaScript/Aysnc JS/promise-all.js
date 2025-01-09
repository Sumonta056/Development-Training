function brushTeeth() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Brushed teeth 🦷"), 1000)
  );
}

function makeBreakfast() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Made breakfast 🍳"), 2000)
  );
}

function eatBreakfast() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Ate breakfast 🍴"), 1500)
  );
}

Promise.all([brushTeeth(), makeBreakfast(), eatBreakfast()])
  .then((results) => {
    console.log(results); // ["Brushed teeth 🦷", "Made breakfast 🍳", "Ate breakfast 🍴"]
    console.log("All tasks done!");
  })
  .catch((error) => console.log(error));
