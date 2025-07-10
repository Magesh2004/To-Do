import data from "../data.json";

interface Task {
  task: string;
  status: boolean;
  priority: "High" | "Mid" | "Low";
}

interface Category {
  title: string;
  tasks: Task[];
}

const typedData = data as Category[];

const Test = () => {
  return (
    <div>
      <h1>{typedData[0].title}</h1>
      <h3>{typedData[0].tasks[0].task}</h3>
    </div>
  );
};

export default Test;
