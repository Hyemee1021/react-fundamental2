import { Children, createContext, useEffect, useState } from "react";
import fetchVideos from "../services/videoService";

const VideoContext = createContext(null);

export function VideoProvider({ children }) {
  const [lists, setList] = useState([]);
  console.log(lists);

  const [loading, setLoading] = useState(true);
  const [savedList, setSavedList] = useState([]);
  console.log(savedList);
  useEffect(() => {
    const getData = async () => {
      //return video-array
      const videoLists = await fetchVideos();

      setList(videoLists);

      setLoading(false);
    };
    getData();
  }, []);

  function addItem(video) {
    setSavedList((prev) => [...prev, video]);
    console.log(savedList);
  }

  function removeItem(id) {
    let newArr = savedList.filter((video) => {
      if (video.id !== id) {
        return true;
      } else {
        return false;
      }
    });

    setSavedList(newArr);
  }

  return (
    <VideoContext.Provider
      value={{ lists, loading, addItem, savedList, removeItem }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export default VideoContext;
