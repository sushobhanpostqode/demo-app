import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ProgressRing from './components/ProgressRing';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(t => t.completed).length;
  const pendingCount = todos.length - completedCount;
  const progress = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <div className="app">
      <div className="app-header">
        <h1>📝 Todo List</h1>
        {todos.length > 0 && (
          <ProgressRing 
            size={60} 
            strokeWidth={6} 
            progress={progress}
            completed={completedCount}
            total={todos.length}
          />
        )}
      </div>
      
      <AddTodo onAdd={addTodo} />
      
      <TodoList 
        todos={todos} 
        onToggle={toggleTodo} 
        onDelete={deleteTodo} 
      />

      {todos.length > 0 && (
        <div className="stats">
          <span>
            {pendingCount} pending, {completedCount} completed
          </span>
          {completedCount > 0 && (
            <button className="clear-btn" onClick={clearCompleted}>
              Clear Completed
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
