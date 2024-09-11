import React, { useState } from "react";

const TaskForm = ({ addNewTask }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = ({ input }) => {
    if (input.trim()) {
      addNewTask({ input });
      setInput("");
    }
  };
  console.log(input);
  return (
    <div className="flex flex-col gap-3">
      <div>
        <label htmlFor="taskName">Task Name : </label>
        <input
          type="text"
          id="taskName"
          placeholder="Type your task"
          onChange={handleChange}
          value={input}
        />
      </div>
      <button className="border" onClick={() => handleSubmit({ input })}>
        Submit
      </button>
    </div>
  );
};

export default TaskForm;
