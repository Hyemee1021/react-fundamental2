import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
//query, dynamic search
// dynamic routes-/product/123<- specific product
// ~~/:id<- a user have unique id-
// query parameter- determain how content is viewed(displayed)
// query perameter~~url/products?limit=5, anything after ?
// value is after =

export const Blog = () => {
  // query parameter- useSearchParam
  //   result is object - I nned to get value
  //   ex. setsearchParem({
  //      tag: React,
  //     _limit: 5 })

  //   things to do
  // 1 Retrieve params from dynamic route  adn query params
  //   2. use the data

  //   kwhat state?
  const [posts, setPosts] = useState([]);

  const [parameter] = useSearchParams();
  //   I get actual value

  const value = parameter.get("_limit") || "5";

  const getPosts = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${value}`
      );
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, [parameter]);
  return (
    <div>
      <h1>Blog</h1>
      <div className=" flex gap-3">
        <button className="border px-2">
          <Link to="?_limit=5">5</Link>
        </button>

        <button className="border px-2 p">
          <Link to="?_limit=3">3</Link>
        </button>
      </div>
      <div>
        <ul>
          {posts &&
            posts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
