import React from "react";
import posed from "react-pose";
import styled from "styled-components";

const TodoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

const Title = styled.h3`
  font-weight: normal;
  margin: 0;
  margin-right: 0.5rem;
  position: relative;
  display: inline-block;

  flex-basis: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  color: rgba(0, 0, 0, 0.6);
`;

const DeleteButton = styled.button`
  font: inherit;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 5px -3px #333;
`;

export default ({ todo, whenDone, onDelete }) => {
  const onCheck = () => {
    whenDone(todo);
  };

  return (
    <>
      <TodoHeader>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={onCheck}
        />
        <Title>
          <LineThrough pose={todo.completed ? "completed" : "notCompleted"} />
          {todo.title}
        </Title>
        <DeleteButton onClick={() => onDelete(todo)}>&times;</DeleteButton>
      </TodoHeader>
      <Description>{todo.description}</Description>
    </>
  );
};
