import "./App.css";
import TaskCard from "./components/TaskCard";
import TaskInput from "./components/TaskInput";

function App() {
  return (
    <div className="App">
      <TaskInput />
      <TaskCard />
    </div>
  );
}

export default App;
