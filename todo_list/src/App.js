// import React from "react";
// import "./App.css";
// const App = () => {
//     const [todos, setTodos] = React.useState([]);
//     const [todo, setTodo] = React.useState("");
//     const [todoEditing, setTodoEditing] = React.useState(null);
//     const [editingText, setEditingText] = React.useState("");

//     // Add the handlesubmit code here
//     function handleSubmit(e) {
//         e.preventDefault();
//         const newTodo = {
//             id: new Date().getTime(),
//             text: todo.trim(),
//             completed: false,
//         };
//         if (newTodo.text.length > 0) {
//             setTodos([...todos].concat(newTodo));
//             setTodo("");
//         } else {
//             alert("Enter Valid Task");
//             setTodo("");
//         }
//     }

//     // Add the deleteToDo code here
//     // //   e.preventDefault();
//     //   const foundTodo = todos.find(todo => todo.id === idDel);
//     //   foundTodo.completed=true;
//     function handleDelete(idDel) {
//         setTodos(todos.filter((todo) => { return todo.id !== idDel }));
//     }

//     // Add the toggleComplete code here
//     function toggleComplete(toggleId) {
//         let updation = todos.map((todo) => {
//             if (todo.id === toggleId) {
//                 todo.completed = !todo.completed;
//             }
//             return todo;
//         })
//         setTodos(updation);
//     }

//     // Add the submitEdits code here
//     function submitEdits(id) {
//         const updatedTodos = [...todos].map((todo) => {
//             if (todo.id === id) {
//                 todo.text = editingText;
//             }
//             return todo;
//         });
//         setTodos(updatedTodos);
//         setTodoEditing(null);
//     }

//     return (
//         <div className="App">
//             <h1>Todo List</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     onChange={(e) => setTodo(e.target.value)}
//                     placeholder="Add a new task"
//                     value={todo}
//                 />
//                 <button type="submit">Add Todo</button>
//             </form>
//             {
//                 todos.map(
//                     (todo) => {
//                         return (
//                             <div class="todo">
//                                 {todo.text}
//                                 <input type="checkbox" checked={todo.completed} onChange={() => { toggleComplete(todo.id) }} />
//                                 <button onClick={() => handleDelete(todo.id)}>Delete</button>
//                             </div>
//                         );
//                     }
//                 )
//             }
//         </div>
//     );
// };
// export default App;




// import React from "react";
// import "./App.css";
// const App = () => {
//   const [todos, setTodos] = React.useState([]);
//   const [todo, setTodo] = React.useState("");
//   const [todoEditing, setTodoEditing] = React.useState(null);
//   const [editingText, setEditingText] = React.useState("");
//   function handleSubmit(e) {
//     e.preventDefault();
//     const newTodo = {
//       id: new Date().getTime(),
//       text: todo.trim(),
//       completed: false,
//     };
//     if (newTodo.text.length > 0 ) {
//         setTodos([...todos].concat(newTodo));
//         setTodo("");
//     } else {
//         alert("Enter Valid Task");
//         setTodo("");
//     }
//   }
//   function deleteTodo(id) {
//     let updatedTodos = [...todos].filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   }
//   function toggleComplete(id) {
//     let updatedTodos = [...todos].map((todo) => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   }
//   function submitEdits(id) {
//     const updatedTodos = [...todos].map((todo) => {
//       if (todo.id === id) {
//         todo.text = editingText;
//         }
//         return todo;
//       });
//       setTodos(updatedTodos);
//       setTodoEditing(null);
//     }
//     return (
//         <div id="todo-list">
//           <h1>Todo List</h1>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               onChange={(e) => setTodo(e.target.value)}
//               value={todo}
//             />
//             <button type="submit">Add Todo</button>
//           </form>
//           {todos.map((todo) => (
//             <div key={todo.id} className="todo">
//               <div className="todo-text">
//                 <input
//                   type="checkbox"
//                   id="completed"
//                   checked={todo.completed}
//                   onChange={() => toggleComplete(todo.id)}
//                 />
//                 {todo.id === todoEditing ? (
//                   <input
//                     type="text"
//                     onChange={(e) => setEditingText(e.target.value)}
//                   />
//                 ) : (
//                   <div>{todo.text}</div>
//                 )}
//               </div>
//               <div className="todo-actions">
//                 {todo.id === todoEditing ? (
//                   <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
//                 ) : (
//                   <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
//                 )}
//                 <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     };
// export default App;


import React from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");
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
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
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
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      );
    };
export default App;