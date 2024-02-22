import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";
 
function App() {
    return (
        <div className="App container">
            <TaskForm />
            <TaskList />
        </div>
    );
}
 
export default App;