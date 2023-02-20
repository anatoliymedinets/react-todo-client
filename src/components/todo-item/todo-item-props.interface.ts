import { Todo } from "../../types/todo.interface";

export interface TodoItemProps {
  todo: Todo;
  onTodoDeleted: () => void;
  onTogleDone: () => void;
  onTogleImportant: () => void;
}
