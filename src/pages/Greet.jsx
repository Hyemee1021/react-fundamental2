import React from "react";

export const Greet = ({ name }) => {
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>hello</h1>;
};
