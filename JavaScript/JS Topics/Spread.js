const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year1 = [q1, q2, q3, q4];
/*
Here, year1 is an array of arrays.
Each quarter is a separate array, and all four quarters are grouped together in another array.
*/
const year2 = [...q1, ...q2, ...q3, ...q4];
/*
Here, year2 is a flattened array. 
The ... (spread operator) takes all the elements from q1, q2, q3, and q4 and combines them into a single array. 
There are no quarter-wise groupings.
*/

console.log(year1);
/* Output:
[
  ["Jan", "Feb", "Mar"],
  ["Apr", "May", "Jun"],
  ["Jul", "Aug", "Sep"],
  ["Oct", "Nov", "May"]
]
*/
console.log(year1[0]); // Access the first quarter
// Output: ["Jan", "Feb", "Mar"]

console.log(year1[0][1]); // Access February
// Output: "Feb"

console.log(year2);
/* Output:
[
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun",
  "Jul", "Aug", "Sep",
  "Oct", "Nov", "May"
]
*/

console.log(year2[0]); // Access the first element
// Output: "Jan"

console.log(year2[4]); // Access May (from Q2)
