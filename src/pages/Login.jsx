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
    case "submit":
      return {
        ...state,
        match: state.password === state.checkPassword,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "submit",
    });
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow items-center justify-center mt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-3/4 max-w-md bg-blue-300 p-6 rounded-lg shadow-lg "
        >
          <input
            className="bg-slate-200 p-2 "
            type="password"
            placeholder="Enter your password"
            onChange={(e) =>
              dispatch({
                type: "password",
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
          <button
            className="btn bg-slate-50 p-2 hover:bg-slate-200"
            type="submit"
          >
            {" "}
            Submit
          </button>
        </form>
        {state.match ? <p>Passwords matched</p> : <p>Passwords not matched</p>}
      </main>
    </div>
  );
};
