import React from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
        setTodo("");
    } else {

        alert("Enter Valid Task");
        setTodo("");
    }
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  return (
      <div id="todo-list">
        <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
        />
        <button type="submit">Add Todo</button>
        </form>
        {todos.map((todo) => <div className="todo" key={todo.id}>
            <div>{todo.text}</div>

        <button onClick={() => deleteTodo(todo.id)}>Delete</button> 

        </div>)}
        </div>

  );
};

export default App;