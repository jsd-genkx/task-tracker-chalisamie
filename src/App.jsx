import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskText,
      };
      setTasks([...tasks, newTask]);
      setTaskText("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Task Tracker
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a new task"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addTask}
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="p-3 bg-gray-50 border border-gray-200 rounded-md shadow-sm text-gray-700"
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
