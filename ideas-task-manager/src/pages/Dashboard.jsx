import React, { useState, useEffect } from "react";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../services/taskService";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskModal from "../components/TaskModal";
import TaskDetailsModal from "../components/TaskDetailsModal"; // New Task Details Modal component

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [taskDetailsModalOpen, setTaskDetailsModalOpen] = useState(false); // State for task details modal
  const [taskDetails, setTaskDetails] = useState(null); // State to store detailed task
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState({ startDate: "", endDate: "" });
  const [statusFilter, setStatusFilter] = useState("");
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTasks();
  }, [page]);

  const fetchTasks = async () => {
    try {
      const response = await getTasks({ page });
      setTasks(response.data.data);
      setTotalPages(response.data.last_page);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleSaveTask = async () => {
    try {
      if (editingTask.id) {
        await updateTask(editingTask.id, editingTask);
      } else {
        await createTask(editingTask);
      }
      fetchTasks();
      setModalOpen(false);
      setEditingTask(null);
    } catch (err) {
      console.error("Error saving task:", err);
    }
  };

  const handleDeleteConfirmed = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
      setConfirmDeleteOpen(false);
      setTaskToDelete(null);
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleDragEnd = async (result) => {
    if (!result.destination) return;

    // Optimistic Update: Immediately update task status on the frontend
    const updatedTasks = [...tasks];
    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId;

    // Find the dragged task and update its status
    const updatedTask = updatedTasks.find((task) => task.id.toString() === taskId);
    updatedTask.status = newStatus;

    setTasks(updatedTasks); // Update the frontend state optimistically

    // Then send the update to the backend
    try {
      await updateTask(taskId, { status: newStatus });
    } catch (error) {
      console.error("Error updating task:", error);
      // If the update fails, we should revert the status on the frontend
      fetchTasks();
    }
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (!searchQuery || task.name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!dateRange.startDate || new Date(task.due_date) >= new Date(dateRange.startDate)) &&
      (!dateRange.endDate || new Date(task.due_date) <= new Date(dateRange.endDate)) &&
      (!statusFilter || task.status === statusFilter)
    );
  });

  const showTaskDetails = async (taskId) => {
    try {
      const response = await getTask(taskId);
      setTaskDetails(response.data);
      setTaskDetailsModalOpen(true);
    } catch (err) {
      console.error("Error fetching task details:", err);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">Task Dashboard</h2>

      {/* Instruction for Drag and Drop */}
      <div className="bg-indigo-100 text-indigo-700 p-4 rounded-lg mb-6">
        <p className="text-lg">You can <strong>drag and drop tasks</strong> to change their status.</p>
      </div>

      {/* Search and Filter Inputs */}
      <div className="mb-6 flex flex-wrap justify-start gap-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full md:w-1/3 shadow-md focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })}
          className="p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })}
          className="p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500"
        />
        <select
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          onClick={() => {
            setEditingTask({ name: "", description: "", status: "To Do", due_date: "" });
            setModalOpen(true);
          }}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Add Task
        </button>
      </div>

      {/* Drag-and-Drop Context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["To Do", "In Progress", "Done"].map((status) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="bg-white p-6 rounded-lg shadow-md transition-all duration-500 hover:bg-gray-50">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{status}</h3>
                  {filteredTasks
                    .filter((task) => task.status === status)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-gray-50 p-4 mb-4 rounded-lg shadow-sm hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
                          >
                            <p className="text-lg text-gray-800">{task.name}</p>
                            <p className="text-sm text-gray-800">Due Date: {task.due_date}</p>
                            <div className="flex justify-between items-center mt-6">
                              <button
                                onClick={() => {
                                  setEditingTask(task);
                                  setModalOpen(true);
                                }}
                                className="text-amber-600 hover:underline transition duration-200"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => showTaskDetails(task.id)} // Show details button
                                className="text-blue-500 hover:underline transition duration-200"
                              >
                                Show
                              </button>
                              <button
                                onClick={() => {
                                  setTaskToDelete(task);
                                  setConfirmDeleteOpen(true);
                                }}
                                className="text-red-500 hover:underline transition duration-200"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={() => setPage(page > 1 ? page - 1 : page)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500"
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-lg text-gray-600">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage(page < totalPages ? page + 1 : page)}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500"
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>

      {/* Task Modal */}
      <TaskModal isOpen={modalOpen} onClose={() => setModalOpen(false)} task={editingTask} onSave={handleSaveTask} setTask={setEditingTask} />

      {/* Task Details Modal */}
      <TaskDetailsModal
        isOpen={taskDetailsModalOpen}
        onClose={() => setTaskDetailsModalOpen(false)}
        task={taskDetails}
      />

      {/* Confirmation Modal */}
      {confirmDeleteOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-all duration-500">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setConfirmDeleteOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteConfirmed(taskToDelete.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
