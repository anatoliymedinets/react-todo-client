import { Todo } from "../../types/todo.interface";

export interface AddTodoProps {
    onTodoAdded: (todo: Todo) => void
}