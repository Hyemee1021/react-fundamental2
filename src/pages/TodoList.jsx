import React, { useReducer } from "react";
import { Navbar } from "../components/Navbar";

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

    case "inputValue":
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      throw new Error("Unknown action");
  }
}

const initialState = {
  todo: [],
  inputValue: "",
};
export const TodoList = () => {
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
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main className="flex flex-col items-center   justify-center mt-16 b w-3/4 ">
        <div className="flex flex-row p-3 gap-3">
          <input
            type="text"
            className="bg-slate-200 p-1 "
            onChange={handleChange}
            value={state.inputValue}
          />
          <button
            className="btn bg-blue-600 text-white px-3"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          {state.todo.length > 0 &&
            state.todo.map((item) => <li key={item.id}>{item.text}</li>)}
        </div>
      </main>
    </div>
  );
};
