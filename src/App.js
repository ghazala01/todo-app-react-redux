import { AddTodo } from "./components/AddTodo";
import { ListTodos } from "./components/ListTodos";

function App() {
    return (
    <div className="wrapper">
      <h1 className="todo-heading text-center">
        <span className="orange-text">T</span>ODO <span className="orange-text">A</span>PP
      </h1>
      <AddTodo />
      <ListTodos />
    </div>
  );
}

export default App;