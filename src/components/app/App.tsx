import { useState } from "react";
import "./App.scss";
import AddTodo from "../add-todo/AddTodo";
import FilterTabs from "../filter-tabs/FilterTabs";
import SearchPanel from "../search-panel/SearchPanel";
import TodoList from "../todo-list/TodoList";
import { TodoStatus } from "../../types/todo-status.enum";
import { Todo } from "../../types/todo.interface";
import { ActiveTab } from "../../types/active-tab";

const todosData: Todo[] = [
  { id: 1, title: "Drink coffe", important: false, status: TodoStatus.Done },
  {
    id: 2,
    title: "Create React application",
    important: true,
    status: TodoStatus.Active,
  },
  { id: 3, title: "Read book", important: false, status: TodoStatus.Active },
];

function App() {
  const [todos, setTodos] = useState(todosData);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<ActiveTab>("All");

  const onSearchChanged = (searchStr: string) => {
    setSearch(searchStr);
  };

  const onTabChanged = (activeTab: ActiveTab) => {
    setActiveTab(activeTab);
  };

  const onTogleDone = (id: Todo["id"]) => {
    const idx = todos.findIndex((el) => el.id === id);
    const before = todos.slice(0, idx);
    const after = todos.slice(idx + 1);
    const newTodo = { ...todos[idx] };
    newTodo.status =
      newTodo.status === TodoStatus.Active
        ? TodoStatus.Done
        : TodoStatus.Active;
    setTodos([...before, newTodo, ...after]);
  };

  const onTogleImportant = (id: Todo["id"]) => {
    const idx = todos.findIndex((el) => el.id === id);
    const before = todos.slice(0, idx);
    const after = todos.slice(idx + 1);
    const newTodo = { ...todos[idx] };
    newTodo.important = !newTodo.important;
    setTodos([...before, newTodo, ...after]);
  };

  const onTodoDeleted = (id: Todo["id"]) => {
    const idx = todos.findIndex((el) => el.id === id);
    const before = todos.slice(0, idx);
    const after = todos.slice(idx + 1);
    setTodos([...before, ...after]);
  };

  const onTodoAdded = (todo: Todo) => {
    const todoId = (todos[todos.length - 1].id as number) + 1;
    setTodos([...todos, { id: todoId, ...todo }]);
  };

  const filteredTodos = [...todos].filter((todo) => {
    let isSearchCondition = true;
    let isTabCondition = true;

    if (search.trim() !== "") {
      isSearchCondition = todo.title.includes(search);
    }

    if (activeTab !== "All") {
      isTabCondition =
        (todo.status === TodoStatus.Active && activeTab === "Active") ||
        (todo.status === TodoStatus.Done && activeTab === "Done");
    }

    return isSearchCondition && isTabCondition;
  });

  return (
    <section className="hero is-fullheight has-background-light">
      <div className="container">
        <div className="box mt-5">
          <p className="has-text-centered is-size-2 mb-2">Todo List</p>
          <FilterTabs onTabChanged={onTabChanged} activeTab={activeTab}></FilterTabs>
          <SearchPanel onSearchChanged={onSearchChanged}></SearchPanel>
          <TodoList
            todos={filteredTodos}
            onTodoDeleted={onTodoDeleted}
            onTogleDone={onTogleDone}
            onTogleImportant={onTogleImportant}
          ></TodoList>
          <AddTodo onTodoAdded={onTodoAdded}></AddTodo>
        </div>
      </div>
    </section>
  );
}

export default App;
