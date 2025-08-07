import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const handler = (title) => {
    const newTodo = { title, id: Date.now() };
    console.log(todoList);

    setTodoList([...todoList, newTodo]);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handler} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
