import React, { useContext, useReducer } from "react";
import { Navbar } from "../components/Navbar";
import VideoContext from "../contexts/VideoContext";
import { ListItem } from "../components/ListItem";
function reducer(state, action) {
  //type: "changePassword ", " changeCheckPassword"
}
const initialState = {
  password: "",
  checkPassword: "",
  match: false,
};
export const Video = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { lists, loading, addItem, savedList, removeItem } =
    useContext(VideoContext);

  console.log(savedList);
  return (
    <div className="flex flex-col  ">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-5">
        {loading ? (
          <p className="mt-5"> Loading...</p>
        ) : (
          <div className="flex flex-col justify-center  w-11/12 md:w-7/12 mt-20 p-5">
            <h1 className="font-bold text-lg mb-3">Video List</h1>

            <button onClick={() => removeItem(162727)}>Remove</button>
            {lists.map((video) => (
              <ListItem
                item={video}
                addItem={addItem}
                key={`playList ${video.id}`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
