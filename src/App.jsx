import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [newTodo, setNewToDo] = useState('initialValue');
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      {newTodo}
      <TodoList />
    </div>
  );
}

export default App;
