import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
}

const TodoTask = ({ task }: Props) => {
  return (
    <h1>
      {task.taskName} {task.deadline}{" "}
    </h1>
  );
};

export default TodoTask;
