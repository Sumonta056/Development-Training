// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diam: number): string {
  return "The circumference is " + Math.PI * diam;
}

console.log(circle(10)); // The circumference is 31.41592653589793

const circle1 = (diam: number): string => {
  return "The circumference is " + Math.PI * diam;
};

console.log(circle1(10)); // The circumference is 31.41592653589793
