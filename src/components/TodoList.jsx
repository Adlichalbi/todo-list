/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // for unique IDs
const TodoList = () => {
  let index = 3;
  const [tasks, setTasks] = useState([
    { id: 0, title: "learn react" },
    { id: 1, title: "learn express.js" },
    { id: 2, title: "learn nextjs" },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (!newTask.trim()) return; // Check if newTask is empty
    setTasks((previousTasks) => [
      ...previousTasks,
      { id: uuidv4(), title: newTask },
    ]);
    setNewTask("");
  }
  function deleteTask(i) {
    const newTasks = tasks.filter((task) => task.id !== i);
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
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <span className="text">{task.title}</span>
            <button className="btn-del" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(task.id)}>
              ☝️
            </button>
            <button
              className="move-button"
              onClick={() => moveTaskDown(task.id)}
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
