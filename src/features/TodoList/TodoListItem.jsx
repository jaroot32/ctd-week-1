import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoListItem({
  id,
  title,
  isCompleted,
  onCompleteTodo,
  onUpdateTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(title);
  const handleUpdate = (event) => {
    if (isEditing === false) {
      return;
    }
    event.preventDefault();
    onUpdateTodo({
      id,
      workingTitle,
      isCompleted,
    });
    setIsEditing(false);
  };
  const handleCancel = () => {
    setWorkingTitle(title);
    setIsEditing(false);
  };
  const handleEdit = (event) => {
    setWorkingTitle(event.target.value);
  };
  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel value={workingTitle} onChange={handleEdit} />
            <button type="buton" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <>
            <label>
              <input
                type="checkbox"
                id={`checkbox${id}`}
                checked={isCompleted}
                onChange={() => onCompleteTodo(id)}
              />
            </label>
            <span onClick={() => setIsEditing(true)}>{title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
