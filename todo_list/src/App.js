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
        setTodos([...todos].concat(newTodo)); //method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
        setTodo("");
    
    } else {
        
        alert("Enter Valid Task");
        setTodo("");
    }
  }
  
  
  // Add the deleteToDo code here

  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
  <h1>Todo List</h1>
  <form onSubmit={handleSubmit}>
    <input 
      type="text"
      onChange={(e) => setTodo(e.target.value)}
      placeholder="Add a new task"
      value={todo}
    />
    <button type ="submit">Add Todo</button>
  </form>
  {todos.map((todo,i) => <div key={todo+i}>{todo.text}</div>)}
</div>
);
};
export default App;