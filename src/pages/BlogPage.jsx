import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogPage = () => {
  // access url- dynamic query
  const { id } = useParams();

  const [post, setPost] = useState();

  const singlePost = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const data = await res.json();
      setPost(data);
      console.log(post);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    singlePost();
  }, [id]);
  return (
    <div>
      {!post && <p>Loading...</p>}
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}

      <Link to="/blog">Back to Blog</Link>
    </div>
  );
};

export default BlogPage;
