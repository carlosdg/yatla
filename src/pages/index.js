import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Home from "../pages/home";
import TodoList from "../pages/todo_list";
import AddTodo from "../pages/add_todo";

const RouteContainer = posed.div({
  enter: { opacity: 1, beforeChildren: true },
  exit: { opacity: 0 }
});

export default () => {
  return (
    <Route
      render={({ location }) => (
        <PoseGroup>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/" component={Home} key="home" />
              <Route path="/todos" component={TodoList} key="todos" />
              <Route path="/new" component={AddTodo} key="new" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      )}
    />
  );
};
