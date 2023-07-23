import React from "react";
import "./App.css";

const App = () => {
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
  // This function receives a single argument 'e' which stands for event
  function handleSubmit(e){

      // In the case of a form submit event, the default action is to send a HTTP request to the server and then reload the page.
      // It ensures that the page doesn't reload when the form is submitted.
      e.preventDefault();

      const newTodo = {
          // The id property of newTodo is assigned the current time in milliseconds since the UNIX epoch (January 1, 1970).
          // This is a commonly used method to create a unique id.
          id: new Date().getTime(),

          // The text property of newTodo is assigned the trimmed value of the todo variable. 
          // The trim method removes whitespace from both ends of a string.
          text: todo.trim(),

          // Indicating that the new to-do item is not completed yet
          completed: false,
      };
      // Check if the newTodo has a length greater than 0 (not empty string)
      // This part is to add the newTodo to the todo list, and reset the todo field
      if(newTodo.text.length > 0){
          // Call setTodos
          // [...todos] creates a new array that's a copy of the todos array
          // concat adds newTodo to the end of this new array
          setTodos([...todos].concat(newTodo));

          // clears the todo state
          setTodo("");
      }
      else{
          alert("Enter Valid Task");
          setTodo("");
      }
  }
  
  // Add the deleteToDo code here
  function deleteToDo(id){
    // Filter method creates a new array with all elements that pass the condition implemented by the provided function
    // In this case, it's creating a new array with all the todos where the id is not equal to the id of the todo you want to delete
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here
  function toggleComplete(id){
      let updatedTodos = [...todos].map((todo) => {
          if(todo.id === id){
              todo.completed = !todo.completed;
          }
          return todo;
      });
      setTodos(updatedTodos);
  }
  // Add the submitEdits code here
  function submitEdits(id){
      const updatedTodos = [...todos].map((todo) => {
        if(todo.id === id){
            todo.text = editingText;
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
          onChange={(e) => setTodo(e.target.value)}
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
