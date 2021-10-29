import React, { useState } from "react";
import { Input, Button, Wrapper, Card } from "./styles";
import axios from "axios";

const TaskInput = ({
  tasks,
  setTasks,
  task,
  setTask,
  buttonName,
  taskId,
  setButtonName,
  setAllTasks,
  isActive,
  setIsActive,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/task", task)
      .then((res) => {
        setTasks([...tasks, res.data.data]);
      })
      .catch((err) => console.log(err));
    setTask({ title: "" });
  };

  const getAllTasks = () => {
    axios
      .get("http://localhost:5000/api/task")
      .then((response) => {
        setAllTasks(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/task/update/" + taskId, task)
      .then((res) => {
        console.log(res.data.data);
        getAllTasks();
      })
      .catch((err) => console.log(err));
    setButtonName("Submit");
    setTask({ title: "" });
    setIsActive({ [taskId]: false });
  };

  const changeHandler = (e) => {
    setTask({ title: e.target.value });
  };
  return (
    <Card>
      <h1 style={{ paddingTop: 20 }}>Task Manager</h1>
      <Wrapper>
        <form>
          <Input
            type="text"
            name="title"
            value={task.title}
            placeholder="e.g. finish homework"
            onChange={changeHandler}
          />
          {buttonName === "Submit" ? (
            <Button onClick={submitHandler}>Submit</Button>
          ) : (
            <Button onClick={updateHandler} style={{ backgroundColor: "orange", color: "black" }}>
              Update
            </Button>
          )}
        </form>
      </Wrapper>
    </Card>
  );
};

export default TaskInput;
