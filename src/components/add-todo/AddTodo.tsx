import { useState } from "react";
import { TodoStatus } from "../../types/todo-status.enum";
import { Todo } from "../../types/todo.interface";
import { AddTodoProps } from "./add-todo-props";

const AddTodo: React.FC<AddTodoProps> = ({onTodoAdded}) => {

  const[title, setTitle] = useState('')

  const addTodo = () => {
    if(title.trim() === ''){
      setTitle('')
      return;
    }

    const todo:Todo = {
      title,
      important:false,
      status: TodoStatus.Active 
    }

    onTodoAdded(todo)
    setTitle('')
  }

  return (
    <div className="field has-addons">
      <p className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Type title of new todo"
          value={title} onChange={(e)=> setTitle(e.target.value)}
        />
      </p>
      <p className="control">
        <button className="button is-primary" onClick={addTodo}>Add</button>
      </p>
    </div>
  );
};

export default AddTodo;
