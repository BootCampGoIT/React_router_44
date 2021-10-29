import TasksForm from "../Components/tasks/tasksForm/TasksForm";
import TasksList from "../Components/tasks/tasksList/TasksList";

export const tasksRoutes = [
  {
    name: "create",
    path: "/create",
    exact: true,
    component: TasksForm,
  },
  {
    name: "list",
    path: "/list",
    exact: false,
    component: TasksList,
  },
];
