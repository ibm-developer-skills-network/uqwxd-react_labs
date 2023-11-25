import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");

  useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById("todoAdd").value;
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };

    if (newTodo.text.length > 0) {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setErrorMessage1(""); // Clear any previous error message
    } else {
      setErrorMessage1("Please enter a valid task");
    }
    document.getElementById("todoAdd").value = "";
  }

  function deleteTodo(id) {
    const todoToDelete = todos.find((todo) => todo.id === id);

    if (todoToDelete && todoToDelete.completed) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      setErrorMessage2(""); // Clear any previous error message
    } else {
      setErrorMessage2("Task must be completed to be deleted.");
    }
  }

  function toggleComplete(id) {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(newtodo) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === newtodo.id) {
        const editedValue = document.getElementById(newtodo.id).value;
        if (editedValue.trim().length > 0) {
          todo.text = editedValue;
          setErrorMessage3(""); // Clear any previous error message
        } else {
          setErrorMessage3("Please enter a valid task");
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="todoAdd"
          placeholder="Enter new task"
        />
        <button type="submit">Add Todo</button>
        {errorMessage1 && <div className="error">{errorMessage1}</div>}
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
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
            {todo.id === todoEditing ? (
              <>
                <button onClick={() => submitEdits(todo)}>Submit Edits</button>
                {errorMessage1 && <div className="error">{errorMessage1}</div>}
              </>
            ) : (
              <>
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
              {errorMessage3 && <div className="error">{errorMessage3}</div>}
              </>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {errorMessage2 && <div className="error">{errorMessage2}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;

