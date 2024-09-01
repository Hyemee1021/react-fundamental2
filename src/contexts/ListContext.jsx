import { createContext, useReducer } from "react";

const ListContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "add":
      const newId = state.todo.length
        ? Math.max(state.todo.map((list) => list.id)) + 1
        : 1;
      return {
        ...state.todo,
        todo: [...state.todo, { id: newId, text: state.inputValue }],
        inputValue: "", // Clear input after adding todo
      };
      break;

    case "remove":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      };
    case "inputValue":
      return {
        ...state,
        inputValue: action.payload,
      };
      break;

    default:
      throw new Error("Unknown action");
  }
}

const initialState = {
  todo: [],
  inputValue: "",
};

export function ListProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "inputValue",
      payload: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };
  return (
    <ListContext.Provider
      value={{ state, dispatch, handleChange, handleAdd, handleRemove }}
    >
      {children}
    </ListContext.Provider>
  );
}

export default ListContext;
