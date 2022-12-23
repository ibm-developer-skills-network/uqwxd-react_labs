import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
return(
<div className ="App">
<h1>Todo List</h1>
<form>
<input type ="text" align ="right" />
<button type ="submit">Add Todo</button>
</form>
</div>
);
};
export default App;
