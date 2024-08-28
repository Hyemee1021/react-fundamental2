import React, { useReducer } from "react";
import { Navbar } from "../components/Navbar";

function reducer(state, action) {
  switch (action.type) {
    case "password":
      return { ...state, password: action.payload };
    case "checkPassword":
      return { ...state, checkPassword: action.payload };
    default:
      throw new Error(" Unknown action");
  }
}

const initialState = {
  password: "",
  checkPassword: "",
  match: false,
};
export const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePasswordChange = (e) => {
    dispatch({ type: "password", payload: e.target.value });
  };
  const handleCheckPasswordChange = (e) => {
    dispatch({ type: "checkPassword", payload: e.target.value });
  };
  console.log(state);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow items-center justify-center mt-16">
        <form className="flex flex-col gap-5 w-3/4 max-w-md bg-blue-300 p-6 rounded-lg shadow-lg ">
          <input
            onChange={handlePasswordChange}
            className="bg-slate-200 p-2 "
            type="password"
            placeholder="Enter your password"
          />
          <input
            onChange={handleCheckPasswordChange}
            type="password"
            className="bg-slate-200 p-2 "
            placeholder="Re-enter your password"
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
