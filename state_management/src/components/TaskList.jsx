import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
  const { tasks, deleteTask, toogleTask } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} style={{color: task.completed ? 'green' : '#000'}}>
          <p>{task.name}</p>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => toogleTask(task.id)}
          />
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;