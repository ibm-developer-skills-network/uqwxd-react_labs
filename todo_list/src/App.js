import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]); 
  // useState is a hook, todos is the state and setTodos is the function that updates the state value.
  // const [state, setState] = React.useState(initialState)
  const [todo, setTodo] = React.useState("");

  // add useEffect hook to the app, which will be responsible to save new todos into local storage.
  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    if([todos].length > 0) {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }
  }, [todos]);
  
  // Add the handlesubmit code here
  function handleSubmit(e) {
    // the e parameter of the function is an optional para of the input event handler which equals to a js event obj
    // that contains info regarding what action or event just happened.
    e.preventDefault();
    const newTodo = {
      id : new Date().getTime(),
      text : todo.trim(),
      completed : false,
    };
    if (newTodo.text.length > 0) {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
    else {
      alert("Enter valid task");
      setTodo("");
    }
  }
  
  // Add the deleteToDo code here
  function deleteToDo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  
  // Add the submitEdits code here
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);
  }
  
return(
<div id="todo-list">
<h1>Todo List</h1>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          // e.target.value is the value of the text input element.
          placeholder="Add a new task"
          value={todo}
        />
            <button type="submit">Add Todo</button>
        </form>
        {todos.map((todo) => <div className="todo" key={todo.id}>
          <div className="todo-text">
          <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
          {todo.id === todoEditing ? (
            <input type="text" onChange={(e) => setEditingText(e.target.value)} />
            ) : (
            <div>{todo.text}</div>
          )}
        </div>
        <div className="todo-actions">
        {todo.id === todoEditing ? (
        <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
        ) : (
        <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
        )}
        <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </div>
        </div>
      )}
    </div>
  );
};
export default App;
