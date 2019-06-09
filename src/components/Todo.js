import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const Title = styled.h3`
  font-weight: normal;
  margin: 0;
  position: relative;
  display: inline-block;
`;

const LineThrough = styled(
  posed.div({
    notCompleted: { width: "0%" },
    completed: { width: "100%" }
  })
)`
  position: absolute;
  background: black;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  width: 0;
`;

const Description = styled.p`
  margin: 0;
  margin-left: 1rem;
  color: rgba(0, 0, 0, 0.55);
`;

export default ({ todo, whenDone }) => {
  const onCheck = () => {
    whenDone(todo);
  };

  return (
    <>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={onCheck}
      />
      <Title>
        <LineThrough pose={todo.completed ? "completed" : "notCompleted"} />
        {todo.title}
      </Title>
      <Description>{todo.description}</Description>
    </>
  );
};
