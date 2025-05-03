import React from "react";
import TaskItem from "./TaskItem"; 

const calculateDaysRemaining = (dueDate) => {
  const currentDate = new Date();
  const dueDateObj = new Date(dueDate);
  const timeDiff = dueDateObj - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return daysRemaining;
};

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-4 p-4 border rounded-md">
            <TaskItem task={task} setTasks={setTasks} />
            {task.dueDate && (
              <p className="text-sm text-gray-500">
                {calculateDaysRemaining(task.dueDate) > 0
                  ? `${calculateDaysRemaining(task.dueDate)} days left`
                  : "Due date passed"}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
