import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

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
      <TextInputWithLabel
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(e) => {
          setWorkingTodo(e.target.value);
        }}
        elementId="todoTitle"
        labelText="Todo"
      />
      <button disabled={workingTodoTitle === '' ? true : false}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
