import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Assigned to: {task.assignee}</p>
    </div>
  );
};

export default Task;