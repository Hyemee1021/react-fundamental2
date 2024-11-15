import React from "react";

export const Forms = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-100 ">
      <main className=" w-4/5 flex mx-auto h-80">
        <div className="w-1/3 border  p-3 rounded-md bg-purple-500 ">
          <ul className="flex flex-col gap-5  justify-center">
            <li className="flex flex-col justify-center items-center">
              <div className="mx-auto w-5 h-5 flex justify-center items-center  rounded-full text-white bg-blue-400">
                1
              </div>

              <div>Your Info</div>
            </li>
            <li className="flex flex-col justify-center items-center">
              <div className="mx-auto w-5 h-5 flex justify-center items-center  rounded-full text-white bg-blue-400">
                2
              </div>

              <div>Your Info</div>
            </li>
            <li className="flex flex-col justify-center items-center">
              <div className="mx-auto w-5 h-5 flex justify-center items-center  rounded-full text-white bg-blue-400">
                3
              </div>

              <div>Your Info</div>
            </li>
          </ul>
        </div>
        <form className="  bg-white w-2/3 ">
          <div>
            <h1>Personal Info</h1>
            <p>Please provide your name</p>
            <label>Name</label>
            <input placeholder="John King" className="border" />
          </div>
          <button>Next</button>
        </form>
      </main>
    </div>
  );
};
