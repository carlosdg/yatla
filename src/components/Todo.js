import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const Title = styled.h3`
  font-weight: normal;
  margin: 0;
  margin-right: 0.5rem;
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

const DeleteButton = styled.button`
  font: inherit;
  background: none;
  border-radius: 5px;
`;

export default ({ todo, whenDone, onDelete }) => {
  const onCheck = () => {
    whenDone(todo);
  };

  return (
    <>
      <Title>
        <LineThrough pose={todo.completed ? "completed" : "notCompleted"} />
        {todo.title}
      </Title>
      <input
        type="checkbox"
        defaultChecked={todo.completed}
        onChange={onCheck}
      />
      <DeleteButton onClick={() => onDelete(todo)}>&times;</DeleteButton>
      <Description>{todo.description}</Description>
    </>
  );
};
