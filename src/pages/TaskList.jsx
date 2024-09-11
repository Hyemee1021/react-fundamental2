import React from "react";

export const TaskList = ({ taskList, deleteTask }) => {
  return (
    <>
      {taskList.length === 0 ? (
        <p>There is no list</p>
      ) : (
        taskList.map((task, index) => {
          return (
            <div key={index} className="flex flex-row justify-around border-b">
              <div className="">{task.input}</div>
              <div className="flex  gap-1 flex-col md:flex-row">
                <button>Complete</button>
                <button onClick={() => deleteTask(task.index)}>Delete</button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};
