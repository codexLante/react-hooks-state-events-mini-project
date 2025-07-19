import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && onTaskFormSubmit) {
      onTaskFormSubmit({ text: text.trim(), category });
      setText('');
      setCategory('Code');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="text">Details:</label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.filter(cat => cat !== 'All').map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;