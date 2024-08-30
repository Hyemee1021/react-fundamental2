import React from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full p-3 fixed top-0 left-0 bg-white shadow-md z-10">
      <div className="flex flex-row gap-3 justify-center">
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
      </div>
    </div>
  );
};
