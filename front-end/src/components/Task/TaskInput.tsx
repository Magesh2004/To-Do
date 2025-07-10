const TaskInput = () => {
  return (
    <form className="task-container">
      <div className="head-container">
        <input
          className="task-input"
          type="text"
          name="task"
          placeholder="Enter the task"
        />
      </div>
      <div className="bottom-container">
        <div>
          <select className="priority">
              <option className="priority-container high">
                <p>High</p>
              </option>
              <option className="priority-container mid">
                <p>Mid</p>
              </option>
            <option className="priority-container low">
              <p>Low</p>
            </option>
          </select>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z" />
        </svg>
      </div>
    </form>
  );
};

export default TaskInput;
