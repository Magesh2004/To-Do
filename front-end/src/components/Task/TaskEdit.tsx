import { useState } from "react";
import axios from "axios";

const TaskEdit = ({
  task_content,
  priority,
  closeEdit,
  taskId,
  categoryId,
}: {
  task_content: string;
  priority: string;
  closeEdit: () => void;
  taskId: string;
  categoryId: string;
}) => {
  const [updatedTask, setUpdatedTask] = useState(task_content);
  const [updatedPriority, setUpdatedPriority] = useState(priority);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/category/${categoryId}/task/${taskId}`,
        {
          task: updatedTask,
          priority: updatedPriority,
        }
      );
      closeEdit();
      window.location.reload();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <form className="task-container" onSubmit={handleUpdate}>
      <div className="head-container">
        <input
          className="task-input"
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
      </div>
      <div className="bottom-container">
        <button
          className="category-cancel btn"
          type="button"
          onClick={closeEdit}
        >
          Cancel
        </button>
        <select
          className="priority"
          value={updatedPriority}
          onChange={(e) => setUpdatedPriority(e.target.value)}
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

export default TaskEdit;
