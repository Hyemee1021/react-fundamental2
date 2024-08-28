import React from "react";

export const ListItem = ({ item, addItem }) => {
  return (
    <div className="border p-3">
      <h1> Name: {item.name}</h1>
      <p> Desc: {item.description}</p>
      <div className="flex flex-row items-center justify-around gap-3">
        <img
          src={item.thumbnail}
          alt={item.name}
          style={{ width: "150px", height: "auto" }}
        />
        <button
          onClick={() => addItem(item)}
          className="border  px-3 py-1  hover:scale-105 transition-all"
        >
          Add to playlist
        </button>
      </div>
    </div>
  );
};
