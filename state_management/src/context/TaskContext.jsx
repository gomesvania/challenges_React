import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (tasks) => {
    setTasks([...tasks, {
      id: Date.now(),
      name: tasks,
      completed: false,
    }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toogleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  };

  return (
    <TaskContext.Provider value={{tasks, addTask, deleteTask, toogleTask}}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
