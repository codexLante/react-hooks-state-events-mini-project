import React from 'react';
import Task from './Task';

function TaskList({ tasks, onTaskDelete }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onTaskDelete && onTaskDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
