import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
      const json = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
          setTodos(loadedTodos);
      }
  }, []);

  useEffect(() => {
      if([todos].length > 0) {
          const json = JSON.stringify(todos);
          localStorage.setItem("todos", json);
      }
  }, [todos]);
  
  // The handlesubmit function
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
  
  
  // The deleteToDo code
  function deleteToDo(id) {
        let updateTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updateTodos);
  }

  
  // The toggleComplete code
  function toggleComplete(id) {
      let updateTodos = [...todos].map((todo) => {
          if (todo.id === id) {
              todo.completed = !todo.completed;
          }
          return todo;
      });
      setTodos(updateTodos);
  }

  
  // The submitEdits code
    function submitEdits(id) {
        const updateTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText;
            }
            return todo;
        });
        setTodos(updateTodos);
        setTodoEditing(null);
    }

  
return(
<div id="todo-list">
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
        {todos.map((todo) => <div className="todo" key={todo.id}>
                                    <div className="todo-text">
                                    <input
                                        type="checkbox"
                                        id="completed"
                                        checked={todo.completed}
                                        onChange={() => toggleComplete(todo.id)}/>
                                    {todo.id === todoEditing ? (
                                        <input
                                            type="text"
                                            onChange={(e) => setEditingText(e.target.value)}
                                        />
                                    ) : (
                                        <div>{todo.text}</div>
                                    )}
                                    </div>

                                    <div className="todo-actions">
                                        {todo.id === todoEditing ? (<button onClick={() => submitEdits(todo.id)}>Submit Edits</button>) : (<button onClick={() => setTodoEditing(todo.id)}>Edit</button>)}
                                    </div>

                                    <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                            </div>)}
</div>
);
};
export default App;
