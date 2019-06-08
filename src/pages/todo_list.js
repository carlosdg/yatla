import React from "react";
import { Link } from "react-router-dom";
import posed from "react-pose";
import { TodoContext } from "../stores/TodoStore";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const Li = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default () => {
  const [{ todos }] = React.useContext(TodoContext);

  return (
    <Container>
      <h2>To do list</h2>
      <ul>
        {todos.map(({ id, title }) => (
          <Li key={id}>
            <Link to={`/todo/${id}`}>{title}</Link>
          </Li>
        ))}
      </ul>
    </Container>
  );
};
