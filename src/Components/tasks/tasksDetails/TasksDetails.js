import React, { useState, useEffect } from "react";
import { tasks } from "../tasksList/TasksList";

const TasksDetails = ({ match }) => {
  const [task, setTask] = useState(null);
  useEffect(() => {
    setTask(getTask());
  }, [match.params.id]);
  const getTask = () => {
    return tasks.find((task) => task.id === match.params.id);
  };
  return (
    <>
      {task && (
        <>
          <h2>{task.name}</h2>
          <p>{task.description}</p>
        </>
      )}
    </>
  );
};

export default TasksDetails;
