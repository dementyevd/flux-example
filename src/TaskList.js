import { useDispatch, useSelector } from "react-redux";
import { toggleTask, removeTask } from "./todoStore";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-group my-3">
      {tasks.map((task) => (
        <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
          <input
            type="checkbox"
            defaultChecked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
          />
          <span className={task.completed ? "text-decoration-line-through" : ""}>{task.text}</span>         
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(removeTask(task.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
