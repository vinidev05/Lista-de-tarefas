import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} />
      ))}
    </ul>
  );
}