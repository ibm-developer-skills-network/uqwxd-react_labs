import React,{useState,useEffect}  from "react";
import "./App.css";

const App = () => {

    // using state for initializing todos list
  const [todos, setTodos] = useState([]);


  // another state for updating the state of todos lists
  const [todoEditing, setTodoEditing] = useState(null);

    // for saving the todos list in the json format to the local storage
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

  // function for handling the todo task 
  function handleSubmit(e) {
    e.preventDefault();

    let todo = document.getElementById('todoAdd').value
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
    } else {

        alert("Enter Valid Task");
    }
    document.getElementById('todoAdd').value = ""
  }

  // delete the todo task 
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // to mark complete the todo task 
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  // updating or modifying the todo task
  function submitEdits(newtodo) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === newtodo.id) {
        todo.text = document.getElementById(newtodo.id).value;
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
            id = 'todoAdd'
          />
          <button type="submit">Add Todo</button>
        </form>
      {todos.map((todo) => (

        <div key={todo.id} className="todo">
          <div className="todo-text">
            {/* Add checkbox for toggle complete */}
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {/* if it is edit mode, display input box, else display text */}
            {todo.id === todoEditing ?
              (<input
                type="text"
                id = {todo.id}
                defaultValue={todo.text}
              />) :
              (<div>{todo.text}</div>)
            }
          </div>
          <div className="todo-actions">
            {/* if it is edit mode, allow submit edit, else allow edit */}
            {todo.id === todoEditing ?
            (
              <button onClick={() => submitEdits(todo)}>Submit Edits</button>
            ) :
            (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
           </div>
        </div>
      ))}
      </div>
  );
};

export default App;