import "./App.css";
import TaskCard from "./components/TaskCard";
import TaskInput from "./components/TaskInput";
import { useState } from "react";

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [taskId, setTaskId] = useState();
  const [isActive, setIsActive] = useState({});
  const [task, setTask] = useState({
    title: "",
  });

  const [buttonName, setButtonName] = useState("Submit");

  return (
    <div className="App">
      <TaskInput
        allTasks={allTasks}
        setTasks={setAllTasks}
        task={task}
        setTask={setTask}
        buttonName={buttonName}
        setButtonName={setButtonName}
        taskId={taskId}
        setAllTasks={setAllTasks}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <TaskCard
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        task={task}
        setTask={setTask}
        buttonName={buttonName}
        setButtonName={setButtonName}
        setTaskId={setTaskId}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  );
}

export default App;
