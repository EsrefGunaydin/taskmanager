import React, { useEffect, useState } from "react";
import axios from "axios";
import { Wrapper, Title, Container } from "./styles";
import { FaRegTrashAlt as TrashIcon, FaEdit } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const TaskCard = ({
  allTasks,
  setAllTasks,
  setTask,
  setButtonName,
  setTaskId,
  isActive,
  setIsActive,
}) => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task")
      .then((response) => {
        setAllTasks(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [setAllTasks]);

  const deleteTask = (id) => {
    axios
      .delete("http://localhost:5000/api/task/delete/" + id)
      .then((response) => {
        setAllTasks(allTasks.filter((singleTask) => id !== singleTask._id));
      })
      .catch((err) => console.log(err));
  };

  const editTask = (id) => {
    setIsActive({ [id]: true });
    setTaskId(id);
    setButtonName("Update");
    const thisTask = allTasks.filter((singleTask) => id === singleTask._id);
    setTask({ title: thisTask[0].title });
  };

  const cancelHandler = (id) => {
    setTask({ title: "" });
    setIsActive({ [id]: false });
    setButtonName("Submit");
  };

  return (
    <Wrapper>
      {allTasks.map((task) => {
        return (
          <Container key={task._id}>
            <Title>{task.title}</Title>
            <div>
              {!isActive[task._id] ? (
                <FaEdit
                  onClick={() => editTask(task._id)}
                  style={{ margin: "10px", color: "#008cba", cursor: "pointer" }}
                />
              ) : (
                <ImCancelCircle
                  onClick={() => cancelHandler(task._id)}
                  style={{ margin: "10px", color: "#e63e32", cursor: "pointer" }}
                />
              )}

              <TrashIcon
                style={{ margin: "10px", color: "#e63e32", cursor: "pointer" }}
                onClick={() => deleteTask(task._id)}
              />
            </div>
          </Container>
        );
      })}
    </Wrapper>
  );
};

export default TaskCard;
