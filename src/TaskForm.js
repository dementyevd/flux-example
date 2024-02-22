import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./todoStore";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() !== "") {
      dispatch(addTask(taskText));
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group my-3">
        <input
          type="text"
          value={taskText}
          className="form-control"
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add new task"
        />
      </div>
      <button className="btn btn-outline-primary my-3" type="submit">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
