import React, { useContext, useReducer } from "react";
import { Navbar } from "../components/Navbar";
import ListContext from "../contexts/ListContext";

export const TodoList = () => {
  const { state, dispatch, handleChange, handleAdd, handleRemove } =
    useContext(ListContext);

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
            className="btn bg-blue-600 text-white px-3 hover:bg-blue-400"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <div>
          <h1 className="font-bold text-lg my-2">Things to do</h1>
          {state.todo.length > 0 &&
            state.todo.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-row  my-2 items-center justify-between gap-5 "
              >
                {item.text}
                <button
                  className="btn bg-blue-500 text-white p-1 px-2 hover:bg-blue-400"
                  onClick={() => handleRemove(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};
