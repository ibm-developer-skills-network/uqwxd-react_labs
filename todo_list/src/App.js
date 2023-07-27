import React from "react";
import "./App.css";
const App = () => {
  //states for the app
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
  
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
  function handleSubmit(e){

    e.preventDefault();

    //initialize todo with...
    const newTodo = {
        //date retrieved
        id: new Date().getTime(),
        //text retrieved from submit
        text: todo.trim(),
        //set the completed state to be false
        completed: false,
    };

    //if the input is valid, add it!
    if (newTodo.text.length > 0){

      //update state of the todo list by adding it
      setTodos([...todos].concat(newTodo));

      //re-update the state of the input to be a blank input
      setTodo("");
    }

    //if the input is not valid, prompt the user and reset the state of the 
    else {
        alert("Enter Valid Task");
        setTodo("");
    }
  }
  
  // Add the deleteToDo code here
  function deleteToDo(id){
      let updatedTodos = [...todos].filter((todo)=> todo.id !== id);
      setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here
  function toggleComplete(id){
      let updatedTodos = [...todos].map((todo) => {
          if (todo.id === id){
              todo.completed = !todo.completed;
          }
          return todo;
      });
      setTodos(updatedTodos);
  }
  
  // Add the submitEdits code here
  function submitEdits(id){
      let updatedTodos = [...todos].map((todo) => {
          if (todo.id === id){
              todo.text = editingText;
          }
          return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
  }
return(
<div className ="App">
    <h1>Todo List</h1>
        {/*the form on the page*/}
        <form onSubmit={handleSubmit}>
            {/*the input for the form*/}
            {/*when there is a change, update the todo*/}
            <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Add a new task"
            value={todo}
            />
                <button type="submit">Add Todo</button>
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
                    onChange={(e) => setEditingText(e.target.value)}
                  />
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
          ))}
</div>
);
};
export default App;