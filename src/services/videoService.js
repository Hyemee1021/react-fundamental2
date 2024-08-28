import video from "./videos.json";

async function fetchVideos() {
  try {
    console.log(video);
    return video;
  } catch (error) {
    console.log(error);
  }
}

export default fetchVideos;
