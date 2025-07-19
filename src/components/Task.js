import React from 'react';

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <span>{text}</span>
      <span>{category}</span>
      {onDelete && (
        <button onClick={onDelete}>Delete</button>
      )}
    </div>
  );
}

export default Task;
