import React from 'react';

const App = () => {
    const[todo, setTodo] = React.useState("");
    const[todos, setTodos] = React.useState([]);
    const[wantToEdit, setWantToEdit] = React.useState(null);
    const[editText, setEditText] = React.useState("");

    React.useEffect(() => {
        const json = localStorage.getItem("todos");
        const loadedTodos = JSON.parse(json);
        if (loadedTodos) {
          setTodos(loadedTodos);
        }
      }, []);
    
      React.useEffect(() => {
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
      }, [todos]);

    //creating handle submit fnction to handle form data

    function handleSubmit(e){
        e.preventDefault();
        const newTodo = {
            id : new Date().getTime(),
            text : todo.trim(),
            completed : false,
        };
        if(newTodo.text.length > 0){
            setTodos([...todos].concat(newTodo));
            setTodo("");
        }else{
            alert("Invalid Input");
            setTodo("");
        }


    }

    //creating a delete todo function that willl delete an item from the list

    function deleteTodo(id){
        const updatedTodos = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    //creating a function to toggle 

    function setToggle(id){
        const updatedTodos = [...todos].map((todo)=> {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });

        setTodos(updatedTodos);
    }

    //Handle submit edit function

    function handleSubmitEdit(id){
        const updatedTodos = [...todos].map((todo) => {
            if(todo.id === id){
                todo.text = editText;
                setEditText("");
               
            }
            return todo;    
        });
        setTodos(updatedTodos);
        setWantToEdit(null);
    }

    return (
        <div>
             <h1>Todo List:</h1>
            <form onSubmit={handleSubmit}>
            <input type = 'text' placeholder='Add Todo' onChange = {(e)=> setTodo(e.target.value)} value = {todo}/>
            <button type='submit'>AddTodo</button>
            </form>
            {todos.map((todo) => <div > 
            <input type='checkbox' checked = {todo.completed} onChange = {()=> setToggle(todo.id)} />
            {todo.id === wantToEdit ? (
                <input type = 'text' onChange={(e)=>setEditText(e.target.value)}/>
            ):(<div>{todo.text}</div>)} 
            
            <button onClick = {() => deleteTodo(todo.id)}>Delete Todo</button>
                
            {todo.id === wantToEdit?(
                   <button onClick= {()=>handleSubmitEdit(todo.id)}>Submit Edit</button>
               ):(
                   <button onClick={()=> setWantToEdit(todo.id)}>Edit</button>
               )}

            </div>)}
           
                
            
           
        </div>
    );
}



export default App;