import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { tasksState } from "../states/atoms";

export default function TodoForm() {
  const setTasks = useSetRecoilState(tasksState);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite uma tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}