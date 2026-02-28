import React from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../states/atoms";

export default function TodoItem({ task }) {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const toggleTask = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <li>
     <span
       className={task.completed ? "completed" : ""}
         onClick={() => toggleTask(task.id)}
      >
         {task.text}
    </span>

      <button onClick={() => removeTask(task.id)}>X</button>
    </li>
  );
}