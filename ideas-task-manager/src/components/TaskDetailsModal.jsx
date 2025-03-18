import React from "react";

const TaskDetailsModal = ({ isOpen, onClose, task }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Task Details</h2>
        <div>
          <p><strong>Name:</strong> {task.name}</p>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Due Date:</strong> {task.due_date}</p>
        </div>
        <div className="flex justify-end mt-6">
          <button onClick={onClose} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsModal;
