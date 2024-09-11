import React, { useContext } from "react";
import { Navbar } from "../components/Navbar";
import PostContext from "../contexts/PostContext";
export const PostList = () => {
  const { posts, loading } = useContext(PostContext);
  console.log(posts);
  return (
    <div>
      <Navbar />
      <main className="mt-20 px-5">
        {loading ? (
          <p>Loading..</p>
        ) : (
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <div className="border" key={post.id}>
                <div> Name: {post.name}</div>

                <div className="text-gray-600"> {post.body}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
