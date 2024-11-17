import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
export const SuccessfulLogged = () => {
  // I will use userContext
  const { user } = useContext(UserContext);

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = async () => {
    if (newTodo.trim() === "") return; // Ignore empty input

    try {
      const todosRef = collection(db, "users", user.uid, "todos");
      await addDoc(todosRef, { text: newTodo, completed: false }); // Add new todo to Firestore
      setNewTodo(""); // Clear input field
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  useEffect(() => {
    if (user) {
      // Reference to the user's "todos" subcollection
      const todosRef = collection(db, "users", user.uid, "todos");

      // Listen for real-time updates
      const unsubscribe = onSnapshot(todosRef, (snapshot) => {
        const todosList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTodos(todosList);
      });

      // Cleanup the listener on component unmount
      return () => unsubscribe();
    }
  }, [user]);
  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <div className="flex flex-col gap-3">
        <h2>Add your to do list</h2>
        <input
          className="border"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className="border" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div>
        <h3>Your to do list</h3>
        <ul>
          {todos?.map((todo) => {
            return <li key={todo.id}>{todo.text}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
