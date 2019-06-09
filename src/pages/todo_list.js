import React from "react";
import posed from "react-pose";
import Todo from "../components/Todo";
import { TodoContext } from "../stores/TodoStore";

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

const Li = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});

export default () => {
  const [{ todos }, dispatch] = React.useContext(TodoContext);

  const whenTodoDone = ({ id }) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: { id }
    });
  };

  return (
    <Container>
      <h2>To do list</h2>
      <ul>
        {todos.map(todo => (
          <Li key={todo.id}>
            <Todo todo={todo} whenDone={whenTodoDone} />
          </Li>
        ))}
      </ul>
    </Container>
  );
};
