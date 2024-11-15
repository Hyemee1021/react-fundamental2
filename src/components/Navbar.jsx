import React from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-3 fixed top-0 left-0 bg-white shadow-md z-10">
      <div className="flex flex-row gap-3 justify-center flex-wrap">
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/login2")}
        >
          Login 2
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/login3")}
        >
          Login 3
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/todolist")}
        >
          To-do List
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/todolist2")}
        >
          To-do List2
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/post-list")}
        >
          Post List
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/")}
        >
          Video
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/playlist")}
        >
          Playlist
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/counter")}
        >
          Counter
        </button>
        <button
          className="border px-2 py-1 shadow-sm"
          onClick={() => navigate("/multiforms")}
        >
          Forms
        </button>
      </div>
    </div>
  );
};
