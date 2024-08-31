import React, { useReducer } from "react";
import { Navbar } from "../components/Navbar";

function reducer(state, action) {
  switch (action.type) {
    case "input":
      return {
        ...state,
        [action.name]: action.payload,
      };

    case "submit":
      return {
        ...state,
        match: state.password === state.checkPassword,
      };
    default:
      throw new Error("Unknown action type");
  }
}
//cant access e.value from  reducer
const initialState = {
  password: "",
  checkPassword: "",
  match: false,
};

export const Login2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "input",
      name: e.target.name,
      payload: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "submit",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex  flex-col gap-3 flex-grow items-center justify-center mt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-3/4 max-w-md bg-blue-300 p-6 rounded-lg shadow-lg "
        >
          <input
            name="password"
            onChange={handleChange}
            className="bg-slate-200 p-2 "
            type="password"
            value={state.password}
            placeholder="Enter your password"
          />
          <input
            value={state.checkPassword}
            onChange={handleChange}
            name="checkPassword"
            type="password"
            className="bg-slate-200 p-2 "
            placeholder="Re-enter your password"
          />
          <button
            className="btn bg-slate-100 p-2 hover:bg-slate-300"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div>
          {state.match ? <p>password matched</p> : <p>Passwords not matched</p>}
        </div>
      </main>
    </div>
  );
};
