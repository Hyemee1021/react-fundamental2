import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

export const Counter = () => {
  const [num, setNum] = useState(0);

  function plus() {
    setNum(num + 1);
  }
  function minus() {
    setNum(num - 1);
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1  w-full flex flex-col items-center justify-center  ">
        <div className="  border-2 border-blue-500 text-center max-w-md w-3/6 md:w-3/6 p-4 rounded-lg">
          <h1 className="font-semibold text-xl pt-2">Counter</h1>
          <div className="text-3xl font-bold mb-4">{num}</div>
          <div className="w-full flex pb-1 gap-5   justify-center ">
            <button
              onClick={plus}
              className="bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-lg hover:scale-110 transition-transform"
            >
              +
            </button>
            <button
              onClick={minus}
              className={`bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-lg hover:scale-110 transition-transform ${
                num === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={num === 0}
            >
              -
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
