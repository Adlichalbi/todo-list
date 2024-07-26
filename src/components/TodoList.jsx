/* eslint-disable no-unused-vars */
import { useState } from "react";

const TodoList = () => {
  
  const [tasks, setTasks] = useState([
   "learn react" ,
    "learn express.js" ,
    "learn nextjs" ,
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (!newTask.trim()) return; // Check if newTask is empty
    setTasks((previousTasks) => [
      ...previousTasks,
       newTask ,
    ]);
    setNewTask("");
  }
  function deleteTask(index) {
    const newTasks = tasks.filter((_,i) => i !== index);
    setTasks(newTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={handleInputChange}
        ></input>
        <button onClick={addTask} className="btn-add">
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task,index) => (
          <li key={index} className="task">
            <span className="text">{task}</span>
            <button className="btn-del" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ☝️
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
