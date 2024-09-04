import { createContext, useEffect, useReducer, useState } from "react";
import { FetchPosts } from "../services/postService.js";

const PostContext = createContext(null);

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPosts = async () => {
      const postLists = await FetchPosts();
      setPosts(postLists);

      setLoading(false);
    };

    getPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts, loading, setLoading }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
