import { useEffect, useState } from "react";
import SideBar from "./components/SIdeBar";
import TaskHolder from "./components/TaskHolder";
import axios from "axios";

interface Task {
  _id: string;
  task: string;
  status: boolean;
  priority: "High" | "Mid" | "Low";
}

interface Category {
  _id: string;
  title: string;
  tasks: Task[];
}

const App = () => {
  const [selectedCat, setSelectedCat] = useState<number>(0);
  const [data, setData] = useState<Category[] | null>(null);

  const changeTask = (i: number) => {
    setSelectedCat(i);
  };

  const getTask = () => {
    return data && data[selectedCat] ? data[selectedCat].tasks : [];
  };

  const fetchCategories = () => {
    return data ? data.map((category) => category.title) : [];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/category");
        setData(res.data.data.categories); 
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };
    fetchData();
  }, []);
  const selectedCategoryId = data?.[selectedCat]?._id ?? "";
  return (
    <div className="App">
      <SideBar categories={fetchCategories()} changeTask={changeTask} />
      <TaskHolder
        tasks={getTask()}
        categoryId={selectedCategoryId }
      />
    </div>
  );
};

export default App;
