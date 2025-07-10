# 📝 MERN To-Do App

A full-stack **To-Do List application** built with the **MERN stack** (MongoDB, Express, React, Node.js) that supports:

- ✅ Task creation, editing, deletion
- 📂 Category-based task grouping
- ⚡ Priority levels (High, Mid, Low)
- 🧠 Built using hooks, context API, and modular structure

---

## 🚀 Features

- Create and manage categories
- Add tasks with priority tags
- Edit task details and mark them as done
- Delete tasks and categories
- Organized using React Context, custom hooks, and clean folder structure
- Backend REST API built with Express and MongoDB (via Mongoose or Prisma)

---

## 🛠️ Tech Stack

| Frontend         | Backend        | Other Tools      |
|------------------|----------------|------------------|
| React + TypeScript | Node.js + Express | Axios, CSS Modules |
| React Context API | MongoDB  | Vite ,Mongoose|
| Custom Hooks      | RESTful APIs   | Postman (for testing) |

---

## 📦 Installation & Setup

### 🔧 Prerequisites

- Node.js and npm
- MongoDB running locally or Atlas

### 1. Clone the repo

```bash
git clone https://github.com/Magesh2004/To-Do.git
cd To-Do
````

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev  # Starts server at http://localhost:8000
```

> Make sure your `.env` includes your MongoDB connection URI

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev  # Starts React app at http://localhost:5173
```

---

## 📬 API Endpoints (Sample)

| Method | Route                      | Description           |
| ------ | -------------------------- | --------------------- |
| GET    | `/category`                | Fetch all categories  |
| POST   | `/category`                | Create new category   |
| POST   | `/category/:id`            | Add task to category  |
| PUT    | `/category/:cid/task/:tid` | Edit task in category |
| DELETE | `/category/:cid/task/:tid` | Delete task           |

---

## 📸 UI Preview

![Sreenshot](/Screenshot/image.png)

---

## 🙋 **Author & Contact**

**Author:** Magesh Balram

License © 2025 [Magesh Balram](https://github.com/Magesh2004)

📧 **Email:** [mageshbalram4@gmail.com](mailto:mageshbalram4@gmail.com)

---

