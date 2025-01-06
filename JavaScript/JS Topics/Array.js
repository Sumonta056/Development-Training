// 1. Creating an Array (Your Shopping List)
let shoppingList = ["Milk", "Eggs", "Bread", "Butter"];
console.log("Initial Shopping List:", shoppingList);

// 2. Accessing Items (Getting specific items)
console.log("First item:", shoppingList[0]); // Milk
console.log("Last item:", shoppingList[shoppingList.length - 1]); // Butter

// 3. Adding Items (New items added to the list)
shoppingList.push("Cheese"); // Add at the end
shoppingList.unshift("Juice"); // Add at the beginning
console.log("After Adding Items:", shoppingList);

// 4. Removing Items
shoppingList.pop(); // Removes the last item
shoppingList.shift(); // Removes the first item
console.log("After Removing Items:", shoppingList);

// 5. Updating Items (Change 'Bread' to 'Whole Grain Bread')
shoppingList[2] = "Whole Grain Bread";
console.log("After Updating Item:", shoppingList);

// 6. Finding Items (Is 'Milk' on the list?)
let hasMilk = shoppingList.includes("Milk");
console.log("Do we need Milk?", hasMilk);

// 7. Iterating Over Items (Print the list)
console.log("Complete List:");
shoppingList.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

// 8. Filtering Items (Get items with more than 5 characters)
let longItems = shoppingList.filter(item => item.length > 5);
console.log("Items with more than 5 characters:", longItems);

// 9. Mapping Items (Add " - Buy Soon" to each item)
let urgentList = shoppingList.map(item => `${item} - Buy Soon`);
console.log("Urgent List:", urgentList);

// 10. Sorting Items (Alphabetically)
let sortedList = shoppingList.slice().sort(); // Use slice() to avoid modifying the original array
console.log("Sorted List:", sortedList);

// 11. Reversing Items
let reversedList = shoppingList.slice().reverse(); // Reverse without changing the original
console.log("Reversed List:", reversedList);

// 12. Combining Arrays (Merging with another list)
let extraItems = ["Apples", "Bananas"];
let fullList = shoppingList.concat(extraItems);
console.log("Merged List:", fullList);

// 13. Slicing (Getting the first 2 items)
let firstTwoItems = shoppingList.slice(0, 2);
console.log("First Two Items:", firstTwoItems);

// 14. Splicing (Replacing 'Eggs' with 'Organic Eggs')
shoppingList.splice(1, 1, "Organic Eggs"); // Remove 1 item at index 1, add 'Organic Eggs'
console.log("After Splicing:", shoppingList);

// 15. Reducing (Count total characters in all items)
let totalCharacters = shoppingList.reduce((sum, item) => sum + item.length, 0);
console.log("Total Characters in All Items:", totalCharacters);
