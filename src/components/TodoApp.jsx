import { useState } from "react";

function TodoApp() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleHange = (e) => {
    setNewTask(e.target.value);
    console.log(newTask, tasks);
  };
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((tas) => [...tas, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  };
  const taskUp = () => {};
  const taskDown = () => {};

  return (
    <div className="todoList">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter A task"
          value={newTask}
          onChange={handleHange}
        />
        <button className="addButton" onClick={addTask}>
          ADD
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button
              className="buttonas"
              style={{}}
              onClick={() => deleteTask(index)}
            >
              DELETE
            </button>
            <button className="buttonas" style={{}} onClick={taskUp}>
              UP
            </button>
            <button className="buttonas" style={{}} onClick={taskDown}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoApp;
