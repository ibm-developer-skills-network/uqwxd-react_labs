import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  // Handle form submission to add a new task
  function handleSubmit(e) {
    e.preventDefault();
    let todo = document.getElementById("todoAdd").value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0) {
      setTodos([...todos, newTodo]);
      document.getElementById("todoAdd").value = "";
    } else {
      alert("Enter Valid Task");
    }
  }

  // Delete a todo task based on id
  function deleteTodo(id) {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Toggle completion status of a todo task based on id
  function toggleComplete(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  // Submit edited todo task
  function submitEdits(newtodo) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === newtodo.id) {
        todo.text = document.getElementById(newtodo.id).value;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  // useEffect hook to load todos from local storage
  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  // useEffect hook to save todos to local storage
  useEffect(() => {
    if (todos.length > 0) {
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }
  }, [todos]);

  return (
    <div id="todo-list" className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todoAdd"
          placeholder="Add a new task"
        />
        <button type="submit">Add Todo</button>
      </form>
      {/* Render todos list */}
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            {/* Checkbox for toggle complete */}
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {/* Display text or input for editing */}
            {todo.id === todoEditing ? (
              <input
                type="text"
                id={todo.id}
                defaultValue={todo.text}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {/* Button to submit edits or enable editing */}
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}
            {/* Button to delete todo */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
