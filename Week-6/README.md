# Week 6 

#  Employee Management System (EMS)

A secure, role-based web application for managing employee records, attendance, leave requests, and departmental workflows. Built with the MERN stack for scalability, real-time updates, and seamless HR operations.

## Tech Stack
| Layer       | Technologies                                  |
|-------------|-----------------------------------------------|
| Frontend    | React 19, Vite, Tailwind CSS, Zustand, Axios  |
| Backend     | Node.js, Express, MongoDB, JWT, bcryptjs      |
| Auth        | HTTP-only cookies, Role-based middleware      |
| Notifications| Nodemailer (SMTP), Toast UI                   |
| Deployment  | Vercel (Frontend), Render (Backend), MongoDB Atlas |

## ✨ Features
-  **Role-Based Access Control** (Admin, HR, Employee)
-  **Employee CRUD** – Onboard, update, archive, or delete records
-  **Leave & Attendance** – Apply, approve/reject, track daily logs
-  **Document Management** – Secure upload & verification (ID, contracts)
-  **HR Dashboard** – Analytics, department stats, pending requests
- **Email Alerts** – Leave status, onboarding, policy updates
-  **Search & Filter** – By department, role, status, or name

##  Project Structure

employee-management-app/
├── frontend/ # React SPA (Vite + Tailwind)
│ ├── src/
│ │ ├── components/ # Role-specific UI (Admin, HR, Employee)
│ │ ├── store/ # Zustand state management
│ │ ├── utils/ # API clients, formatters, constants
│ │ ── App.jsx
│ └── .env
├── backend/ # Express REST API
│ ├── src/
│ │ ├── controllers/ # Route handlers
│ │ ├── models/ # Mongoose schemas
│ │ ├── routes/ # Express routers
│ │ ├── middleware/ # Auth, role checks, error handling
│ │ └── server.js
│ └── .env
└── README.md
123456789
