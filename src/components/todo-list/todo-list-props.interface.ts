import { Todo } from "../../types/todo.interface";

export interface TodoListProps {
  todos: Todo[];
  onTodoDeleted: (id: Todo["id"]) => void;
  onTogleDone: (id: Todo["id"]) => void;
  onTogleImportant: (id: Todo["id"]) => void;
}
