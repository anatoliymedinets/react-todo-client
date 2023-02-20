import { TodoStatus } from "../../types/todo-status.enum";
import { TodoItemProps } from "./todo-item-props.interface";

import "./TodoItem.scss";

const TodoInput: React.FC<TodoItemProps> = ({
  todo,
  onTodoDeleted,
  onTogleDone,
  onTogleImportant,
}) => {
  let spanClasses = "is-clickable";
  if (todo.status === TodoStatus.Done) {
    spanClasses += " completed";
  }
  if (todo.important) {
    spanClasses += " has-text-weight-bold";
  }

  return (
    <div className="is-flex is-justify-content-space-between is-align-items-center my-1">
      <span className={spanClasses} onClick={onTogleDone}>
        {todo.id}. {todo.title}
      </span>

      <div className="actions is-flex">
        <button
          className={`button mx-1 ${
            todo.important
              ? "has-background-primary"
              : undefined
          }`}
          onClick={onTogleImportant}
        >
          <span
            className={`icon is-small ${
              todo.important ? "has-text-primary-light" : "has-text-primary"
            }`}
          >
            <i className="fas fa-star"></i>
          </span>
        </button>

        <button className="button mx-1" onClick={onTodoDeleted}>
          <span className="icon is-small has-text-danger">
            <i className="fas fa-trash"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
