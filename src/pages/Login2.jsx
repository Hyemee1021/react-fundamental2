import React from "react";
import { Navbar } from "../components/Navbar";

export const Login2 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-grow items-center justify-center mt-16">
        <form className="flex flex-col gap-5 w-3/4 max-w-md bg-blue-300 p-6 rounded-lg shadow-lg ">
          <input
            className="bg-slate-200 p-2 "
            type="password"
            placeholder="Enter your password"
          />
          <input
            type="checkPassword"
            className="bg-slate-200 p-2 "
            placeholder="Re-enter your password"
          />
        </form>
      </main>
    </div>
  );
};
