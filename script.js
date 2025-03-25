/* JavaScript Functions for Anthro Boutique Project */

// 1. Validate Email Function - checking for "@" and "." for email inputs
function validateEmail(email){
    return email.includes("@") && email.includes(".");
}
console.log("Validate Email:", validateEmail("test@anthro.com")); // Should return True

// 2. Random Product Picker Function 
const products = []; // add product names here 
function getRandomProduct() {
    const index = Math.floor(Math.random() * products.length);
    return products[index];
}
console.log("Featured Product:", getRandomProduct());

// 3. Total Price Calculation Function 
const prices = []; // add product prices here
function getTotalPrice() {
    return prices.reduce((total, price) => total + price, 0);
}
console.log("Total Price: $", getTotalPrice().toFixed(2));

//4. Feedback Storage Function 
let feedback = []
function addFeedback(message) {
    feedback.push(message);
    return feedback;
}
console.log("Feedback:", addFeedback(" "));

// 5. Simulate Product Search Function
function searchProducts(keyword) {
    return products.filter(product => product.toLowerCase().includes(keyword.toLowerCase()));
}
console.log("Search Results", searchProducts());