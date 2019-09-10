import React from "react";
import posed from "react-pose";
import { TodoContext } from "../stores/TodoStore";
import styled from "styled-components";

const Container = posed.div({
  enter: { staggerChildren: 10 }
});

const Input = styled(
  posed.input({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    enterOnRemove: { opacity: 1 },
    exitOnRemove: { opacity: 0 }
  })
)`
  display: block;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  font: inherit;
  min-width: 100%;
`;

const Textarea = styled(
  posed.textarea({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    enterOnRemove: { opacity: 1 },
    exitOnRemove: { opacity: 0 }
  })
)`
  display: block;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  font: inherit;
  min-width: 100%;
  height: 15rem;
`;

const Button = styled(
  posed.button({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
    enterOnRemove: { opacity: 1 },
    exitOnRemove: { opacity: 0 },
    hoverable: true,
    pressable: true,
    hover: { scale: 1.1 },
    hoverEnd: { scale: 1 },
    press: { scale: 0.9 }
  })
)`
  cursor: pointer;
  display: block;
  font: inherit;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 2rem auto;
  min-width: 80%;
  color: inherit;
  background-color: #e6cab6;
`;

export default () => {
  const [, dispatch] = React.useContext(TodoContext);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onNewTodo = () => {
    const confirmed = window.confirm("Are you sure you want to add this to do");

    if (confirmed) {
      dispatch({
        type: "ADD_TODO",
        payload: { title, description }
      });
    }
  };

  return (
    <Container>
      <h2>New task</h2>
      <Input
        type="text"
        placeholder="I have to do..."
        onChange={e => setTitle(e.target.value)}
      ></Input>
      <Textarea
        placeholder="At this time, this way..."
        onChange={e => setDescription(e.target.value)}
      ></Textarea>
      <Button onClick={onNewTodo}>Add to list</Button>
    </Container>
  );
};
