<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ITM (Ideas Task Management Application)</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 text-gray-800">

    <div class="container mx-auto py-10">
        <div class="bg-white shadow rounded-lg p-6">
            <h1 class="text-3xl font-bold text-center mb-4">Welcome to Task Management Application</h1>
            <p class="text-center text-gray-600 mb-6">A simple and intuitive tool to manage your tasks efficiently.</p>

            <hr class="my-6">

            <!-- Application Features -->
            <h2 class="text-2xl font-semibold mb-4">Features</h2>
            <ul class="list-disc list-inside">
                <li>Task Creation: Add tasks with details like name, description, status, and due date.</li>
                <li>Task Management: Edit, delete, and move tasks between statuses.</li>
                <li>Drag-and-Drop: Reorganize tasks seamlessly across statuses.</li>
                <li>Search and Filters: Filter tasks by name, status, and date range.</li>
            </ul>

            <hr class="my-6">

            <!-- Frontend Instructions -->
            <h2 class="text-2xl font-semibold mb-4">Frontend Instructions</h2>
            <p>
                The frontend is built using React and serves as the primary interface for managing tasks. Access it by visiting:
            </p>
            <p class="bg-gray-100 p-4 rounded mt-2">
                <code>http://localhost:5173</code>
            </p>
            <p class="mt-2">Features available on the frontend:</p>
            <ul class="list-disc list-inside">
                <li>View tasks grouped by status: <strong>To Do</strong>, <strong>In Progress</strong>, <strong>Done</strong>.</li>
                <li>Drag and drop tasks to change their status.</li>
                <li>Add, edit, or delete tasks easily.</li>
                <li>Filter tasks by search, date, or status.</li>
            </ul>

            <hr class="my-6">

            <!-- Backend Instructions -->
            <h2 class="text-2xl font-semibold mb-4">Backend Instructions</h2>
            <p>
                The backend is powered by Laravel and provides APIs to manage tasks. Ensure the Laravel server is running:
            </p>
            <p class="bg-gray-100 p-4 rounded mt-2">
                <code>php artisan serve</code>
            </p>
            <p class="mt-2">API Endpoints:</p>
            <ul class="list-disc list-inside">
                <li><strong>GET</strong> <code>/api/tasks</code> - Fetch all tasks</li>
                <li><strong>POST</strong> <code>/api/tasks</code> - Create a new task</li>
                <li><strong>PUT</strong> <code>/api/tasks/{id}</code> - Update a task</li>
                <li><strong>DELETE</strong> <code>/api/tasks/{id}</code> - Delete a task</li>
            </ul>

            <hr class="my-6">

            <!-- How to Get Started -->
            <h2 class="text-2xl font-semibold mb-4">Getting Started</h2>
            <p>Follow these steps to set up and run the application:</p>
            <ol class="list-decimal list-inside">
                <li>Clone the repository and navigate to the backend folder.</li>
                <li>Run <code>composer install</code> to install backend dependencies.</li>
                <li>Run <code>php artisan migrate</code> to set up the database.</li>
                <li>Navigate to the frontend folder and run <code>npm install</code>.</li>
                <li>Start the React frontend server with <code>npm run dev</code>.</li>
            </ol>

            <hr class="my-6">

            <!-- Contributing Section -->
            <h2 class="text-2xl font-semibold mb-4">Contributing</h2>
            <p>We welcome contributions! Fork the repository, make changes, and open a pull request to contribute.</p>
        </div>
    </div>

</body>
</html>
