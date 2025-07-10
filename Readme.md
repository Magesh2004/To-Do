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

### 🚀 Frontend

* **React** with **TypeScript**
* **Vite** (for blazing-fast development)
* **React Context API** (state management)
* **CSS Modules** (modular styling)
* **Axios** (API communication)

### 🧪 Backend

* **Node.js** with **Express.js**
* **MongoDB** (NoSQL database)
* **Mongoose** (ODM for MongoDB)
* **RESTful APIs** (standardized API design)



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
| GET    | `/category/:id`            | Tasks of a category   |
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

