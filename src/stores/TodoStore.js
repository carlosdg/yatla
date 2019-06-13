import React from "react";

export const TodoContext = React.createContext({});

const initialState = {
  todos: [
    {
      id: "1",
      title: "Example task",
      description: "JUST DO IT!",
      completed: false
    },
    {
      id: "2",
      title:
        "Example task overflowing the container. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ab officiis aut minus hic at nihil veniam quos, eveniet a soluta iusto, eligendi facilis explicabo sunt sequi culpa! Facere, quas.",
      description:
        "An example of a task oveflowing the container. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, ab officiis aut minus hic at nihil veniam quos, eveniet a soluta iusto, eligendi facilis explicabo sunt sequi culpa! Facere, quas.",
      completed: false
    },
    {
      id: "3",
      title: "Example task completed",
      description: "An example of a completed task",
      completed: true
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_COMPLETED": {
      const newTodos = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      return { ...state, todos: newTodos };
    }

    case "REMOVE_TODO": {
      const newTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      );
      return { ...state, todos: newTodos };
    }

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
