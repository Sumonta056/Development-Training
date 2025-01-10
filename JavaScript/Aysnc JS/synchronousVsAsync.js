// JavaScript Synchronous Behaviour
console.log("Synchronous Behaviour : Running 1")
console.log("Synchronous Behaviour : Running 2")
console.log("Synchronous Behaviour : Running 3")


// JavaScript Asynchronous
console.log("Async Behaviour : Running 1")

setTimeout(function () {
  console.log("Async Behaviour : Running 2")
}, 2000);

console.log("Async Behaviour : Running 3")