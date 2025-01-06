// 1. Let and Const (Declaring variables with block scope)
const appName = "FoodieExpress"; // Constant app name
let currentOrders = 0; // This can change as orders come in
console.log(`${appName} has ${currentOrders} orders.`);

// 2. Arrow Functions (Simpler functions)
const calculateDeliveryTime = (distance) => distance * 2; // 2 minutes per km
console.log("Delivery Time for 5 km:", calculateDeliveryTime(5), "minutes");

// 3. Template Literals (Better string handling)
const customerName = "John";
const order = "Pizza";
console.log(`Hello ${customerName}, your ${order} will be delivered soon!`);

// 4. Default Parameters (Default values for function arguments)
const calculateOrderTotal = (price, tax = 0.1) => price + price * tax;
console.log("Order Total:", calculateOrderTotal(100)); // Default 10% tax
console.log("Order Total with Custom Tax:", calculateOrderTotal(100, 0.2)); // 20% tax

// 5. Destructuring (Extract values from objects/arrays)
const orderDetails = { id: 101, item: "Burger", price: 50 };
const { item, price } = orderDetails;
console.log(`Ordered Item: ${item}, Price: $${price}`);

// 6. Rest and Spread Operators (Working with multiple values)
const addItemsToCart = (cart, ...newItems) => [...cart, ...newItems];
let cart = ["Fries", "Soda"];
cart = addItemsToCart(cart, "Salad", "Cake");
console.log("Updated Cart:", cart);

// For-of Loop (Simpler loop for arrays)
let scores = [80, 90, 70];
for (let score of scores) {
  score = score + 5;
  console.log(score);
}

const ratings = [
  { user: "John", score: 3 },
  { user: "Jane", score: 4 },
  { user: "David", score: 5 },
  { user: "Peter", score: 2 },
];

let sum = 0;
for (let value of ratings) {
  sum += value.score;
}
console.log(`Total scores: ${sum}`); // 14

// 7. Enhanced Object Literals (Simpler object creation)
const restaurant = "Pizza Palace";
const menu = ["Margherita", "Pepperoni", "Veggie"];
const restaurantInfo = { restaurant, menu, open: true };
console.log("Restaurant Info:", restaurantInfo);

// 8. Promises (Handling async operations)
const placeOrder = () => {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate order success
    setTimeout(() => {
      success
        ? resolve("Order placed successfully!")
        : reject("Failed to place order.");
    }, 2000); // Simulate 2-second delay
  });
};
placeOrder()
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// 9. Classes (Object-oriented programming)
class FoodOrder {
  constructor(orderId, items) {
    this.orderId = orderId;
    this.items = items;
  }

  displayOrder() {
    console.log(`Order #${this.orderId}: ${this.items.join(", ")}`);
  }
}
const myOrder = new FoodOrder(123, ["Burger", "Fries"]);
myOrder.displayOrder();

// 12. Map and Set (New collection types)
const userLocations = new Map(); // Key-value pairs
userLocations.set("John", "New York").set("Sarah", "California");
console.log("User Locations:", userLocations);

const uniqueOrders = new Set(["Pizza", "Burger", "Pizza"]); // Unique values
console.log("Unique Orders:", [...uniqueOrders]);

// 10. Modules (Separate code files, simulated here)
// Assume the below `calculateDiscount` is imported from another file
export const calculateDiscount = (price, discount) => price - price * discount;
console.log("Price after discount:", calculateDiscount(100, 0.2)); // Simulated import

//  Import Export
function display(message) {
  const el = document.createElement("div");
  el.innerText = message;
  document.body.appendChild(el);
}

export { display };
