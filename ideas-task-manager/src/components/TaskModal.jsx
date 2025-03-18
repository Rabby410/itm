import React from "react";

const TaskModal = ({ isOpen, onClose, task, onSave, setTask }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96 max-w-lg transform transition-all duration-300 ease-in-out scale-95 opacity-0 sm:opacity-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {task.id ? "Edit Task" : "Create Task"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Task Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter task name"
              value={task.name}
              onChange={(e) => setTask({ ...task, name: e.target.value })}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter task description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              value={task.status}
              onChange={(e) => setTask({ ...task, status: e.target.value })}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            >
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="due_date">
              Due Date
            </label>
            <input
              type="date"
              id="due_date"
              value={task.due_date}
              onChange={(e) => setTask({ ...task, due_date: e.target.value })}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white w-full py-3 rounded-lg hover:bg-gray-600 transition duration-200 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white w-full py-3 rounded-lg hover:bg-indigo-700 transition duration-200 focus:outline-none"
            >
              {task.id ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
