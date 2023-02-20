import TodoItem from "../todo-item/TodoItem";
import { TodoListProps } from "./todo-list-props.interface";
import "./TodoList.scss";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onTodoDeleted,
  onTogleDone,
  onTogleImportant,
}) => {
  const todoElements = todos.map((todo) => {
    return (
      <li key={todo.id}>
        <TodoItem
          todo={todo}
          onTodoDeleted={() => onTodoDeleted(todo.id)}
          onTogleDone={() => onTogleDone(todo.id)}
          onTogleImportant={() => onTogleImportant(todo.id)}
        ></TodoItem>
      </li>
    );
  });

  return <ul className="list my-5">{todoElements}</ul>;
};

export default TodoList;
