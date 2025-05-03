import React, { useState } from "react";
import axios from "axios";

function TaskItem({ task, setTasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
    dueDate: task.dueDate,
  });

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${task._id}`,
        editedTask
      );
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t._id === task._id ? response.data : t))
      );
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  return (
    <div className="flex justify-between items-start bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <div className="space-y-2 w-3/4">
        {isEditing ? (
          <>
            <input
              className="w-full border p-1 rounded"
              name="title"
              value={editedTask.title}
              onChange={handleInputChange}
            />
            <textarea
              className="w-full border p-1 rounded"
              name="description"
              value={editedTask.description}
              onChange={handleInputChange}
            />
            <select
              className="w-full border p-1 rounded"
              name="status"
              value={editedTask.status}
              onChange={handleInputChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <input
              type="date"
              className="w-full border p-1 rounded"
              name="dueDate"
              value={editedTask.dueDate.slice(0, 10)} 
              onChange={handleInputChange}
            />
          </>
        ) : (
          <>
            <h3 className="font-bold text-lg text-gray-800">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-500">
              <strong>Status:</strong> {task.status}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Due Date:</strong> {task.dueDate.slice(0, 10)}
            </p>
          </>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleEditToggle}
              className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditToggle}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskItem;
