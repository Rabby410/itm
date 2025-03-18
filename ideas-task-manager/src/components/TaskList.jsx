import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h3>Your Tasks</h3>
      {tasks.length === 0 && <p>No tasks found. Create one using the form above.</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong> - {task.status} - Due: {task.due_date}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
