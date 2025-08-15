import { useRef } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitleInput = useRef('');
  const handleAddTodo = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    console.log(title);
    onAddTodo(title);
    event.target.title.value = '';
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
      ></input>
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
