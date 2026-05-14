# 👤 User Management Dashboard

A lightweight React application for capturing user details and displaying them in a dynamic table. Built with modern React practices, client-side validation, and responsive UI.

## ✨ Features
-  **User Creation Form** – Collects `Name`, `Email`, and `Date of Birth`
-  **Live Table Updates** – Entries appear instantly below the form
-  **Form Validation** – Real-time checks for empty fields, invalid email format, and future DOB
- 📱 **Responsive Design** – Clean layout for desktop, tablet, and mobile
- 💾 **Local Persistence** – Data saved to `localStorage` (survives page refresh)
- 🗑️ **Row Management** – Delete individual records from the table

## 🛠 Tech Stack
| Category       | Technologies                          |
|----------------|---------------------------------------|
| Frontend       | React 19, Vite, JSX                   |
| Styling        | Tailwind CSS                          |
| State/Forms    | React Hook Form, `useState`           |
| Validation     | Built-in regex & date constraints     |
| Package Manager| npm                                   |



## 📂 Project Structure

user-management-app/
├── public/
├── src/
│ ├── components/
│ │ ├── UserForm.jsx # Input form with validation
│ │ └── UserTable.jsx # Dynamic table rendering
│ ├── App.jsx # Layout & state management
│ └── main.jsx # Entry point
├── package.json
├── vite.config.js
└── README.md