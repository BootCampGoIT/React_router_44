import AuthPage from "../pages/AuthPage";
import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";
import TasksPage from "../pages/TasksPage";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "tasks",
    path: "/tasks",
    exact: false,
    component: TasksPage,
  },
  {
    name: "contacts",
    path: "/contacts",
    exact: true,
    component: ContactsPage,
  },
  {
    name: "sign Up",
    path: "/signup",
    exact: true,
    component: AuthPage,
  },
  {
    name: "sign In",
    path: "/signin",
    exact: true,
    component: AuthPage,
  },
];
