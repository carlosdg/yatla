import React from "react";
import { Route, Switch } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Home from "../pages/home";
import About from "../pages/about";
import TodoList from "../pages/todo_list";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: true },
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
              <Route path="/about" component={About} key="about" />
              <Route path="/todos" component={TodoList} key="todos" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      )}
    />
  );
};
