import React, { useState } from 'react';
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { text: 'TWICE 🍭🍭🍭 Concert 2023, Singapore, 02.09.23', completed: true },
    { text: 'Meeting the family, Bangkok, Thailand 🇹🇭, 03.09.23', completed: true },
    { text: 'Vietnam 🇻🇳 2024 again?', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, 
        { text: newTask, completed: false }
      ]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className='twice-todo-app'>
      <h1>TWICE-List</h1>

      <div className='input-field'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>➕</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
