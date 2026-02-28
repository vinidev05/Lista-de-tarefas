import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import useFilteredTasks from "./hooks/useFilteredTasks";

export default function App() {
  const filteredTasks = useFilteredTasks();

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <TodoForm />
      <TodoFilters />
      <TodoList tasks={filteredTasks} />
    </div>
  );
}