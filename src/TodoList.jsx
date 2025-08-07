import TodoListItem from './TodoListItem';
{
  /*extract from TodoList.jsx*/
}
function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoListItem key={todo.id} title={todo.title} />
      ))}
    </ul>
  );
}

export default TodoList;
