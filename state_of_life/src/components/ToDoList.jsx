import { useState } from "react";

const ToDoList = () => {
  const [listTask, setListTask] = useState([]);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("");

  const addTask = () => {
    setListTask([...listTask, { id: Math.random(), task: task }]);
    setTask("");
  };

  return (
    <div>
      <h1>ToDoList</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter your task"
      />
      <button onClick={addTask}>Add Task</button>

      {listTask
        .filter((tasks) => tasks.task.includes(filter))
        .map((tasks) => (
          <ul key={tasks.id}>{tasks.task}</ul>
        ))}
    </div>
  );
};

export default ToDoList;
