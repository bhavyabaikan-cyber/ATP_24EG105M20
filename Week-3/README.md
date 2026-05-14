# Week 3 Assignments 

#  Simple Backend Service (Week 3)

A lightweight, production-ready Express.js backend with MongoDB integration, JWT authentication, and clean REST API structure. Built for rapid development, easy testing, and seamless deployment.

##  Features
- RESTful API endpoints with proper HTTP status codes
-  MongoDB connection via Mongoose (ODM)
- JWT-based authentication (`httpOnly` cookies)
-  Password hashing with `bcryptjs`
-  CORS enabled for frontend integration
-  Centralized error handling middleware
-  Environment-based configuration (`.env`)

## 🛠 Tech Stack
| Category       | Technologies                  |
|----------------|-------------------------------|
| Runtime        | Node.js 20+                   |
| Framework      | Express.js                    |
| Database       | MongoDB + Mongoose            |
| Auth           | JWT, bcryptjs, cookie-parser  |
| Utilities      | dotenv, cors, express-validator|

##  Project Structure
backend-week3/
├── src/
│ ├── config/ # DB connection, env setup
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routers
│ ├── middleware/ # Auth, error handling, CORS
│ └── server.js # App entry point
├── .env # Environment variables
── package.json
└── README.md