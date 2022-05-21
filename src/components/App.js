import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, SetTasks] = useState(TASKS)

  const onCategoryChange = (category) => { 
    if (category === 'All') {
      SetTasks(TASKS);
    } else {
      const filteredTasks = (
        TASKS.filter(task => {
          return (task.category === category)
          }
        ))
       SetTasks(filteredTasks) 
    }
  }

  function onTaskFormSubmit(newItem) {
    console.log(newItem)

    const newTasks = [...tasks, newItem]
    SetTasks(newTasks);
  }
  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onCategoryChange={onCategoryChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} /> 
      {/* Add return value of onCategoryChange..... use state instead? */}
    </div>
  );
}

export default App;
