import React from "react";
import { todos } from "../data/todos";
import posed from "react-pose";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const P = posed.p({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default function(props) {
  const { id } = props.match.params;
  const todoInfo = todos.find(todo => todo.id === id);

  if (!todoInfo) {
    return <Container>No item found</Container>;
  }

  return (
    <Container>
      <h2>{todoInfo.title}</h2>
      <P>{todoInfo.description}</P>
    </Container>
  );
}
