import TodoListItem from './TodoListItem';
{
  /*extract from TodoList.jsx*/
}
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}

export default TodoList;
