// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//     1. Use filter() to get only inStock products
let available = cart.filter((stock) => stock.inStock===true)
console.log(available)

//     2. Use map() to create a new array with:  { name, totalPrice }
let newarray = cart.map((scart) => {
  return 
   name = scart.name,
   totalprice = scart.price * scart/quantity
  }
)
console.log(newarray)

//     3. Use reduce() to calculate grand total cart value
let grandTotal = cart.reduce((acc,element) => acc += element.price*element.quantity,0)
console.log(grandTotal)

//     4. Use find() to get details of "Mouse"
let finfname = cart.find((n) => n.name==="Mouse")
console.log(finfname)

//     5. Use findIndex() to find the position of "Keyboard"
let finfidx = cart.findIndex((idx) => idx.name=="keyboard")
console.log(finfidx)
