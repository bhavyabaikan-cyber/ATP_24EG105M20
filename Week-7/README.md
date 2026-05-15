# Week 7 

# 📝 BlogApp – Full-Stack MERN Blogging Platform

A secure, role-based blogging platform built with React, Node.js, Express, and MongoDB. Supports three distinct user roles with dedicated permissions, JWT authentication, real-time comments, and a responsive UI.

##  Features
- 🔐 **Role-Based Access Control** → `USER` (read/comment), `AUTHOR` (write/edit articles), `ADMIN` (manage users & content)
- 📝 **Article Management** → Create, edit, soft-delete, and publish articles
- 💬 **Comment System** → Users can add comments to active articles
- 🖼️ **Profile Image Upload** → Multer + Cloudinary integration (optional/skippable)
- 🛡️ **Secure Authentication** → JWT tokens stored in `httpOnly` cookies + bcrypt password hashing
- 📊 **Admin Dashboard** → User activation/deactivation, article moderation, analytics
-  **Responsive UI** → Clean layout built with Tailwind CSS
- 🔄 **Protected Routing** → Frontend route guards + backend middleware validation

## 🛠 Tech Stack
| Layer       | Technologies                                  |
|-------------|-----------------------------------------------|
| Frontend    | React 19, Vite, Tailwind CSS, Zustand, React Hook Form, Axios |
| Backend     | Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, Multer, Cloudinary |
| Auth        | HTTP-only cookies, Role-based middleware (`verifyToken`) |
| Deployment  | MongoDB Atlas, Render (Backend), Vercel (Frontend) |

## 📂 Project Structure

blogapp/
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── layout/ (Header, Footer, RootLayout)
│ │ │ ├── auth/ (Login, Register, ProtectedRoute)
│ │ │ ├── user/ (UserProfile, UserDashboard)
│ │ │ ├── author/ (AuthorProfile, AuthorArticles, WriteArticle, EditArticle)
│ │ │ ├── admin/ (AdminDashboard, UserManagement)
│ │ │ └── articles/ (ArticleDetail, Comments, ArticleCard)
│ │ ├── store/ (authStore.js)
│ │ ├── styles/ (global.css, tailwind.css)
│ │ ├── utils/ (api.js, constants.js)
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ ├── vite.config.js
│ └── package.json
├── backend/
│ ├── src/
│ │ ├── config/ (db.js, cloudinary.js, multer.js)
│ │ ├── controllers/ (auth, article, user, admin)
│ │ ├── models/ (User.js, Article.js)
│ │ ├── routes/ (authRoutes.js, articleRoutes.js, userRoutes.js, adminRoutes.js)
│ │ ├── middleware/ (verifyToken.js, roleMiddleware.js, errorHandler.js)
│ │ ├── utils/ (cloudinaryUpload.js, validators.js)
│ │ └── server.js
│ ├── .env
│ └── package.json
└── README.md

