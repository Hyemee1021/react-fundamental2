import React, { useState } from "react";
import { TaskList } from "./TaskList";
import TaskForm from "./TaskForm";
import { Navbar } from "../components/Navbar";

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);
  const addNewTask = (task) => {
    setTaskList((prev) => [...prev, task]);
  };

  const deleteTask = (index) => {
    setTaskList(taskList.filter((task) => task.index !== index));
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md border p-4 bg-white shadow-lg rounded">
          <TaskForm addNewTask={addNewTask} />
          <TaskList
            taskList={taskList}
            setTaskList={setTaskList}
            deleteTask={deleteTask}
          />
        </div>
      </main>
    </>
  );
};

export default TaskManager;
