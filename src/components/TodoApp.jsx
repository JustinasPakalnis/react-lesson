import { useState } from "react";

function TodoApp() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Fixed function name typo
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const taskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const taskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="todoList">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleChange} // Updated function name
        />
        <button className="addButton" onClick={addTask}>
          +
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button className="buttonas" onClick={() => deleteTask(index)}>
              DELETE
            </button>
            <button className="buttonas" onClick={() => taskUp(index)}>
              UP
            </button>
            <button className="buttonas" onClick={() => taskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoApp;
