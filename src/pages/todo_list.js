import React from "react";
import posed, { PoseGroup } from "react-pose";
import Todo from "../components/Todo";
import { TodoContext } from "../stores/TodoStore";

const Container = posed.div({
  enter: { staggerChildren: 10 }
});

const Li = posed.li({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
  enterOnRemove: { opacity: 1 },
  exitOnRemove: { opacity: 0 }
});

export default () => {
  const [{ todos }, dispatch] = React.useContext(TodoContext);

  const whenTodoDone = ({ id }) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: { id } });
  };

  const onDelete = ({ id, completed }) => {
    const toRemove = window.confirm(
      `Are you sure that you want to remove this ${
        completed ? "" : "UNDONE "
      }todo?`
    );

    if (toRemove) {
      dispatch({ type: "REMOVE_TODO", payload: { id } });
    }
  };

  return (
    <Container>
      <h2>To do list</h2>
      <ul>
        <PoseGroup enterPose="enterOnRemove" exitPose="exitOnRemove">
          {todos.map(todo => (
            <Li key={todo.id}>
              <Todo todo={todo} whenDone={whenTodoDone} onDelete={onDelete} />
            </Li>
          ))}
        </PoseGroup>
      </ul>
    </Container>
  );
};
