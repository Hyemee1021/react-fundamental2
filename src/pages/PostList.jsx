import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import PostContext from "../contexts/PostContext";
export const PostList = () => {
  const { posts, loading } = useContext(PostContext);
  console.log(posts);
  return (
    <div>
      <Navbar />
      <main>
        {loading ? (
          <p>Loading..</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.name} - {post.body}
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};
