import "./Task/Task.css";
import Task from "./Task/Task";
import TaskInput from "./Task/TaskInput";

interface TaskType {
  _id: string;
  task: string;
  status: boolean;
  priority: "High" | "Mid" | "Low";
}

interface TaskHolderProps {
  tasks: TaskType[];
}

const TaskHolder = ({ tasks }: TaskHolderProps) => {
  return (
    <div className="main">
      <div className="tasks">
        <TaskInput />
        {tasks.map((task) => (
          <Task
            key={task._id}
            task_content={task.task}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskHolder;
