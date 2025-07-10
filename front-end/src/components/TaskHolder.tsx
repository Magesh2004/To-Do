import "../assets/Task.css";
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
  categoryId: string;
}

const TaskHolder = ({ tasks, categoryId }: TaskHolderProps) => {
  return (
    <div className="main">
      <div className="tasks">
        <TaskInput categoryId={categoryId} />
        {tasks.map((task) => (
          <Task
            key={task._id}
            _id={task._id}
            task_content={task.task}
            priority={task.priority}
            categoryId={categoryId}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskHolder;
