# Task Management Application

A simple and intuitive Task Management application that allows users to manage tasks, organize them by status, and update them dynamically. The app includes features such as drag-and-drop task management, task filtering by name, date range, and status, as well as the ability to edit and delete tasks.

---

## Features

### **Key Features**
1. **Task Creation:**
   - Users can create tasks with details such as name, description, status, and due date.
   - Initial status options: `To Do`, `In Progress`, `Done`.

2. **Task Management:**
   - Drag and drop tasks between statuses.
   - Edit task details such as name, description, status, and due date.
   - Delete tasks.

3. **Search and Filtering:**
   - Search tasks by name.
   - Filter tasks by date range or status.

4. **Real-Time Updates:**
   - Task status is updated dynamically as you drag and drop tasks between columns.

5. **Backend:**
   - Built with Laravel 10 to handle API requests for creating, fetching, updating, and deleting tasks.
   - CORS enabled to allow secure communication between the frontend and backend.

---

## Getting Started

### **Prerequisites**
1. **Backend:**
   - Ensure Laravel is installed (`Laravel 10`).
   - PHP 8.1+ and Composer are required.
   - A database (MySQL, PostgreSQL, etc.) is configured.

2. **Frontend:**
   - Node.js and npm installed.
   - React framework with Vite setup.

3. **Install Dependencies:**
   - For Laravel:
     ```bash
     composer install
     ```
   - For React:
     ```bash
     npm install
     ```

---

## **Project Setup**

### **Backend: Laravel**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
