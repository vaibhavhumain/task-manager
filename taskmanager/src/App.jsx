import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const filteredTasks =
  filterStatus === "all"
    ? tasks
    : tasks.filter((task) =>
        task.status.toLowerCase() === filterStatus.toLowerCase()
      );


  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Task Manager</h1>

      <div className="mb-4 flex justify-center">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <TaskForm setTasks={setTasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
