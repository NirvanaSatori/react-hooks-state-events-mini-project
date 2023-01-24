import React , { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...TASKS, newTask])
  }

  function handleDeleteTask(deletedTask) {
    setTasks(tasks.filter((task) => task.text !== deletedTask))

  }
  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  )

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
         categories={CATEGORIES}
         selectedCategory={category}
         onSelectCategory={setCategory}/>
      <NewTaskForm 
          onTaskFormSubmit={handleAddTask} 
          // categories={CATEGORIES}
          categories={CATEGORIES.filter((category) => category !== "All")}/>
      <TaskList
          onDeleteTask={handleDeleteTask} 
          visibleTasks={visibleTasks} />
    </div>
  );
}

export default App;
