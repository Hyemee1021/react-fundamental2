import React, { useContext } from "react";
import { ListItem } from "../components/ListItem";
import { Navbar } from "../components/Navbar";
import VideoContext from "../contexts/VideoContext";

export const PlayList = () => {
  const { savedList } = useContext(VideoContext);
  return (
    <div>
      <Navbar />
      {savedList && savedList.length > 0 ? (
        <div className="mt-20">
          {savedList.map((item) => (
            <ListItem item={item} key={`playList ${item.id}`} />
          ))}
        </div>
      ) : (
        <p className="mt-20">There are no items in the playlist.</p>
      )}
    </div>
  );
};
