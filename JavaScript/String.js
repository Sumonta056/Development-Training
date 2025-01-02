// Example String
const sampleString = "Hello, welcome to JavaScript world. JavaScript is powerful!";

// 1. String Search Methods
console.log("=== String Search Methods ===");

// a. indexOf: Find the first occurrence of a substring
console.log("indexOf('JavaScript'):", sampleString.indexOf("JavaScript")); // Outputs: 18

// b. lastIndexOf: Find the last occurrence of a substring
console.log("lastIndexOf('JavaScript'):", sampleString.lastIndexOf("JavaScript")); // Outputs: 32

// c. includes: Check if a substring exists
console.log("includes('welcome'):", sampleString.includes("welcome")); // Outputs: true

// d. startsWith: Check if the string starts with a specific substring
console.log("startsWith('Hello'):", sampleString.startsWith("Hello")); // Outputs: true

// e. endsWith: Check if the string ends with a specific substring
console.log("endsWith('powerful!'):", sampleString.endsWith("powerful!")); // Outputs: true

// f. search: Search for a pattern (regular expression or string)
console.log("search('JavaScript'):", sampleString.search("JavaScript")); // Outputs: 18

// g. match: Find matches for a regular expression
console.log("match(/JavaScript/g):", sampleString.match(/JavaScript/g)); // Outputs: ['JavaScript', 'JavaScript']

// h. matchAll: Find all matches for a regular expression (returns an iterator)
for (const match of sampleString.matchAll(/JavaScript/g)) {
  console.log("matchAll:", match[0]); // Outputs: JavaScript (twice)
}

// i. replace: Replace substrings (supports regex)
console.log(
  "replace('JavaScript', 'JS'):",
  sampleString.replace("JavaScript", "JS")
); // Outputs: Hello, welcome to JS world. JavaScript is powerful!

// j. replaceAll: Replace all occurrences of a substring
console.log(
  "replaceAll('JavaScript', 'JS'):",
  sampleString.replaceAll("JavaScript", "JS")
); // Outputs: Hello, welcome to JS world. JS is powerful!

// k. split: Split string by a delimiter
console.log("split(' '):", sampleString.split(" ")); // Outputs: Array of words

// l. substring: Extract part of a string
console.log("substring(7, 14):", sampleString.substring(7, 14)); // Outputs: welcome

// m. slice: Similar to substring but supports negative indexes
console.log("slice(-8):", sampleString.slice(-8)); // Outputs: powerful!

// n. charAt: Get character at a specific index
console.log("charAt(0):", sampleString.charAt(0)); // Outputs: H

// o. charCodeAt: Get Unicode value of a character
console.log("charCodeAt(0):", sampleString.charCodeAt(0)); // Outputs: 72

// p. trim: Remove whitespace from both ends
const paddedString = "   Hello   ";
console.log("trim():", paddedString.trim()); // Outputs: Hello

// q. repeat: Repeat a string
console.log("repeat(3):", "Hello ".repeat(3)); // Outputs: Hello Hello Hello 

// 2. String Literals and Template Strings
console.log("\n=== String Literals ===");
const name = "John";
const age = 25;

// a. Using Template Literals
const greeting = `Hi ${name}, you are ${age} years old!`;
console.log("Template Literal:", greeting);

// b. Multi-line strings
const multiLineString = `This is a 
multi-line string 
using template literals.`;
console.log("Multi-line String:", multiLineString);

// c. Embedding expressions in template literals
const sum = `The sum of 5 and 3 is ${5 + 3}.`;
console.log("Embedded Expression:", sum);

// d. Tagged Template Literals
function tagExample(strings, ...values) {
  return `Tagged Result: ${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
const tagged = tagExample`Hello, ${name}. You are ${age} years old.`;
console.log(tagged);
