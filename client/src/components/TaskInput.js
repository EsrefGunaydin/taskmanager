import React, { useState } from "react";
import { Input, Button, Wrapper } from "./styles";
import axios from "axios";

const TaskInput = () => {
  const [task, setTask] = useState({
    title: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/task", task)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setTask({ title: "" });
  };

  const changeHandler = (e) => {
    setTask({ title: e.target.value });
  };
  return (
    <Wrapper>
      <form>
        <Input
          type="text"
          name="title"
          value={task.title}
          placeholder="e.g. finish homework"
          onChange={changeHandler}
        />
        <Button onClick={submitHandler}>Submit</Button>
      </form>
    </Wrapper>
  );
};

export default TaskInput;
