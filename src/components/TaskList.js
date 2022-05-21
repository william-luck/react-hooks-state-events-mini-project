import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {

 

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task key={task.text} text={task.text} category={task.category} /> // Cool, doing map, the tasks prop is an array of objects, so passing that further down to the task component so it can access it. Self explanatory, see component 
      ))}
    </div>
  );
}

export default TaskList;
