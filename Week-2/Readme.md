
## 🧩 Modules & Assignments

### 1. Backend 1 (`backend1/server.js`)
- Basic Express.js server initialization
- Route handling (`GET`, `POST`)
- Middleware integration (`express.json()`, `cors`)
- Port configuration & graceful startup logging

### 2. Shopping Cart (`shoppingCart.js`)
- Add/remove items with quantity tracking
- Calculate subtotal, tax, and grand total
- Apply discount/coupon logic
- Exported as ES module for reuse

### 3. Test Module (`testModule.js`)
- Reusable utility functions (validation, formatting)
- Mock data generators
- Console-based assertion helper
- Demonstrates modular function design

### 4. Data Models (`book.js`, `employees.js`)
- `book.js`: Constructor/class pattern, properties, methods, `this` binding
- `employees.js`: Array of employee objects, filtering, sorting, aggregation

### 5. Timer Function (`setTimeInterval.js`)
- Demonstrates `setInterval()` & `clearInterval()`
- Countdown/up timer logic
- Proper cleanup to prevent memory leaks & overlapping intervals

### 6. Array Operations (`arrayOperations.js`)
- `map()`, `filter()`, `reduce()`, `sort()`, `find()`, `some()`, `every()`
- Method chaining for data transformation
- Real-world examples (filter employees, calculate averages, group data)

##  How to Run

### Prerequisites
- Node.js 18+ installed
- Terminal/Command Prompt

### Setup
```bash
cd week-2
npm install          # Only if using external packages (express, etc.)