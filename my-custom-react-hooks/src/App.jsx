import React, { useState } from "react";
// import Hover from "./components/Hover";
// import List from "./components/List";
// import useInput from "./hooks/useInput";
// import useDebounce from "./hooks/useDebounce"
import useRequest from "./hooks/useRequest";
import axios from "axios";


const App = () => {
  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos()  {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error...</h1>
  }
  
  return (
    <div className="App">
      {todos && todos.map(todo =>
            <div 
                key={todo.id} 
                style={{padding: "30px", border: "2px solid #000"}}>
                {todo.id}. {todo.title}
            </div>          
        )}
    </div>
  );
}

export default App;
