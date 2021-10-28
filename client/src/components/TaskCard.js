import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper, Title } from "./styles";

const TaskCard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task")
      .then((response) => {
        setTasks(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const showDate = (date) => {
    alert(date);
  };

  return (
    <Wrapper>
      {tasks.map((task) => {
        return (
          <Title onClick={() => showDate(task.created)} key={task._id}>
            {task.title}{" "}
          </Title>
        );
      })}
    </Wrapper>
  );
};

export default TaskCard;
