import React from "react";

export const TodoContext = React.createContext({});

const initialState = {
  todos: [
    {
      id: "1",
      title: "Example task",
      description: "JUST DO IT!",
      completed: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    default:
      throw new Error(`Unknown action ${JSON.stringify(action)}`);
  }
}

export default ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};
