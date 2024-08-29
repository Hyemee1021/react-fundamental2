import React, { useReducer } from "react";
import { Navbar } from "../components/Navbar";

function reducer(state, action) {
  switch (action.type) {
    case "password":
      return {
        ...state,
        password: action.payload,
      };
    case "checkPassword":
      return {
        ...state,
        checkPassword: action.payload,
      };
  }
}

const initialState = {
  password: "",
  checkPassword: "",
  match: false,
};
export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow items-center justify-center mt-16">
        <form className="flex flex-col gap-5 w-3/4 max-w-md bg-blue-300 p-6 rounded-lg shadow-lg ">
          <input
            className="bg-slate-200 p-2 "
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              dispatch({
                type: "assword",
                payload: e.target.value,
              })
            }
          />
          <input
            type="password"
            className="bg-slate-200 p-2 "
            placeholder="Re-enter your password"
            onChange={(e) =>
              dispatch({
                type: "checkPassword",
                payload: e.target.value,
              })
            }
          />
          <button className="btn bg-slate-50 p-2 hover:bg-slate-200">
            {" "}
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};
