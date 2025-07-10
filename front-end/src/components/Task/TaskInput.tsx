import { useState } from "react";
import axios from "axios";

const TaskInput = ({ categoryId }: { categoryId: string }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      await axios.post(`http://localhost:8000/category/${categoryId}`, {
        task,
        status: false,
        priority,
      });
      console.log("TaskInput categoryId:", categoryId);
      setTask("");
      setPriority("Low");
      window.location.reload();
    } catch (err) {
      console.error("Error while adding task:", err);
    }
  };

  return (
    <form className="task-container" onSubmit={handleSubmit}>
      <div className="head-container">
        <input
          className="task-input"
          type="text"
          name="task"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="bottom-container">
        <select
          className="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Mid">Mid</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit" className="btn-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default TaskInput;
