import React from "react";

export const tasks = [
  { id: "1", name: "Get props", description: "Lorem ipsum dolor sit amet." },
  { id: "2", name: "Get milk", description: "Lorem ipsum dolor " },
  { id: "3", name: "Get juice", description: "Lorem ipsum " },
];

const TasksList = ({ history, match }) => {
  const getDetails = (id) => {
    history.push(match.url + `/${id}`);
  };
  return (
    <>
      <h2>TasksList</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button type='button' onClick={() => getDetails(task.id)}>
              Details
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TasksList;
