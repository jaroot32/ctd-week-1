import { useRef } from 'react';
import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodo] = useState('');
  const todoTitleInput = useRef('');
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo(workingTodoTitle);
    setWorkingTodo('');
    todoTitleInput.current.focus();
  };
  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Todo</label>
      <input
        ref={todoTitleInput}
        id="todoTitle"
        type="text"
        name="title"
        value={workingTodoTitle}
        onChange={(e) => {
          setWorkingTodo(e.target.value);
        }}
      ></input>
      <button disabled={workingTodoTitle === '' ? true : false}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
