import React from "react";
import Content from "../Components/contentNavigation/Content";
import Navigation from "../Components/header/navigation/Navigation";
import { tasksRoutes } from "../routes/tasksRoutes";
import { Route } from "react-router-dom";
import TasksDetails from "../Components/tasks/tasksDetails/TasksDetails";

const TasksPage = ({ match }) => {
  return (
    <>
      <Navigation routes={tasksRoutes} />
      <Content routes={tasksRoutes}>
        {
          <Route
            path={`${match.path}/list/:id`}
            exact
            component={TasksDetails}
          />
        }
      </Content>
    </>
  );
};

export default TasksPage;
