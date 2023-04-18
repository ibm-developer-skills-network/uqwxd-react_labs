import './App.css';

import React from 'react';

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
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Add the toggleComplete code here

  // Add the submitEdits code here

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new task"
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </div>
  );
};
export default App;
