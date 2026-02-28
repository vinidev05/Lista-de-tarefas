import React from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../states/atoms";

export default function TodoFilters() {
  const [filter, setFilter] = useRecoilState(filterState);

  return (
    <div style={{ marginTop: 20 }}>
      <button onClick={() => setFilter("all")}>Todas</button>
      <button onClick={() => setFilter("pending")}>Pendentes</button>
      <button onClick={() => setFilter("completed")}>Concluídas</button>
    </div>
  );
}