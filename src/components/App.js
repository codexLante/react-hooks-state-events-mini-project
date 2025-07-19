
import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

const CATEGORIES = ['All', 'Code', 'Food', 'Money', 'Misc'];
const INITIAL_TASKS = [
  { text: 'Buy rice', category: 'Food' },
  { text: 'Save a tenner', category: 'Money' },
  { text: 'Build a todo app', category: 'Code' },
  { text: 'Build todo API', category: 'Code' },
  { text: 'Get an ISA', category: 'Money' },
  { text: 'Cook rice', category: 'Food' },
  { text: 'Tidy house', category: 'Misc' }
];

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS: INITIAL_TASKS });

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (taskIndex) => {
    const filteredTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(filteredTasks);
  };

  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        onTaskDelete={handleTaskDelete}
      />
    </div>
  );
}

export default App;