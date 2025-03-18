import React, { useState, useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskForm() {
  const { addTask } = useContext(TaskContext);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'To Do',
    due_date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(formData);
    setFormData({ name: '', description: '', status: 'To Do', due_date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Task Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <input
        type="date"
        name="due_date"
        value={formData.due_date}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
