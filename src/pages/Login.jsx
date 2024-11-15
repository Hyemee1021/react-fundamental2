import React, { useEffect, useReducer, useState } from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const fetchFun = () => {
    if (input) {
      const res = fetch(`https://api.datamuse.com/words?ml=${input}&max=5`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setResults(data);
        });
    } else {
      setResults([]);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchFun();
    }, 300);

    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col flex-grow items-center justify-center  gap-3 mt-16">
        <input className="border" type="text" onChange={handleChange} />
        {results.map((result) => (
          <p>{result.word}</p>
        ))}
      </main>
    </div>
  );
};
