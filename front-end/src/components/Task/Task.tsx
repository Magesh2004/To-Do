import { useState } from "react";
import Priority from "./Priority";
import TaskEdit from "./TaskEdit";
const Task = ({ task_content, priority }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openEdit = () => {
    setIsEdit(!isEdit);
  };
  return isEdit ? (
    <TaskEdit
      task_content={task_content}
      priority={priority}
      closeEdit={openEdit}
    />
  ) : (
    <div className="task-container">
      <div className="head-container">
        <p>{task_content}</p>
        <div
          className="checkbox"
          onClick={() => {
            setIsDone(!isDone);
          }}
        >
          {isDone && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13c0-1.4-.188-2.794-.688-4.094L26.688 13.5c.2.8.313 1.6.313 2.5c0 6.1-4.9 11-11 11S5 22.1 5 16S9.9 5 16 5c3 0 5.694 1.194 7.594 3.094L25 6.688C22.7 4.388 19.5 3 16 3m11.28 4.28L16 18.563l-4.28-4.28l-1.44 1.437l5 5l.72.686l.72-.687l12-12l-1.44-1.44z"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="bottom-container">
        <Priority category={priority} />
        <div className="drop-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <path
              fill="currentColor"
              d="M14 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
            />
          </svg>
          {isOpen && (
            <div className="drop-menu">
              <p className="drop-item" onClick={openEdit}>
                Edit
              </p>
              <p className="drop-item">Delete</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
