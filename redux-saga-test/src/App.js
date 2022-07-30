import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

const App = () => {

  const store = useSelector(store => store);
  const dispatch = useDispatch();

  console.log(store);

  return (
    <div className="App">
       Redux-saga-Tutorial
       <button onClick={() => dispatch({type: "Click"})}> Click here </button>
    </div>
  );
}

export default App;
