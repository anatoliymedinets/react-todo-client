import { TodoStatus } from "./todo-status.enum";

export interface Todo {
    id?: number,
    title: string,
    important: boolean,
    status: TodoStatus,
}