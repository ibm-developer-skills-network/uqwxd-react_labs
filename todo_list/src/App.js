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
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
        setTodo("");

    } else {

        alert("Enter Valid Task");
        setTodo("");
    }
  }
  
  // Add the deleteToDo code here
  function deleteTodo(id){
    let newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  
  // Add the toggleComplete code here
  function toggleComplete(id) {
    let newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  }
  
  // Add the submitEdits code here

  
return(
    <div className ="todo-list">
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
        {todos.map((todo) => <div className="todo-text">
            <input type="checkbox" id="completed" checked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
            {todo.text}
            <div><button onClick={() => deleteTodo(todo.id)}>Delete</button></div>
            </div>)}
    </div>
);
};
export default App;
