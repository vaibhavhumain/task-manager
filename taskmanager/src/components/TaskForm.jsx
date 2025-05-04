import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const calculateDaysRemaining = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDiff = dueDateObj - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return daysRemaining;
};

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !dueDate) {
      setError("All fields are required");
      toast.error("All fields are required!"); 
      return;
    }

    setIsSubmitting(true);
    const newTask = { title, description, status, dueDate, daysRemaining: calculateDaysRemaining(dueDate) };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const addedTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, addedTask]);
        setTitle(""); 
        setDescription(""); 
        setStatus("Pending"); 
        setDueDate(""); 
        setError(""); 
        toast.success("Task added successfully!"); 
      } else {
        setError("Failed to add task");
        toast.error("Failed to add task"); 
      }
    } catch (error) {
      console.error("Error adding task:", error);
      setError("Error adding task");
      toast.error("Error adding task"); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Task Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>} 

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          disabled={isSubmitting} 
        >
          {isSubmitting ? "Adding..." : "Add Task"}
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default TaskForm;
