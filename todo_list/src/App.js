import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  // Add the handlesubmit code here
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    } else {
      alert("Enter Valid Task");
      setTodo("");
    }
  }
  // Add the deleteToDo code here

  // Add the toggleComplete code here

  // Add the submitEdits code here

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input type="text" align="right" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
export default App;
