import TodoListItem from './TodoListItem';
{
  /*extract from TodoList.jsx*/
}
function TodoList({ todos, onCompleteTodo, onUpdateTodo }) {
  const filteredTodoList = todos.filter((todo) => {
    return todo.isCompleted === false;
  });
  return filteredTodoList.length === 0 ? (
    <p>Add todo above to get started</p>
  ) : (
    <ul>
      {filteredTodoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
