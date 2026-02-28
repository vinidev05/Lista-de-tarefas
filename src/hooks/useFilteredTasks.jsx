import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { tasksState, filterState } from "../states/atoms";

export default function useFilteredTasks() {
  const tasks = useRecoilValue(tasksState);
  const filter = useRecoilValue(filterState);

  return useMemo(() => {
    switch (filter) {
      case "completed":
        return tasks.filter(task => task.completed);
      case "pending":
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);
}