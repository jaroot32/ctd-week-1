import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const addToDoHandler = (title) => {
    const newTodo = { title, id: Date.now(), isCompleted: false };
    setTodoList([...todoList, newTodo]);
  };

  const onCompleteTodo = (id) => {
    const updatedTodos = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isCompleted: true } : todo;
    });

    setTodoList(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addToDoHandler} />
      <TodoList todos={todoList} onCompleteTodo={onCompleteTodo} />
    </div>
  );
}

export default App;
