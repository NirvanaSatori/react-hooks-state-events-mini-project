import React from "react";
import Task from "./Task";

function TaskList({ visibleTasks , onDeleteTask }) {
  console.log(visibleTasks)

  return (
    <div className="tasks">
    {
      visibleTasks.map((task) => 
      <Task key={task.text} text={task.text} 
      category={task.category} onDeleteTask={onDeleteTask}/>)
    }
    </div>)
}
  

export default TaskList;
