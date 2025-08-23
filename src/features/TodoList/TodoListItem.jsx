function TodoListItem({ id, title, isCompleted, onCompleteTodo }) {
  console.log(isCompleted, id);
  return (
    <li>
      <form>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCompleteTodo(id)}
        />
        {title}
      </form>
    </li>
  );
}

export default TodoListItem;
