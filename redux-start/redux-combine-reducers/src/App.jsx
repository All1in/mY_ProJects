import React from 'react';
import "./App.css"
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  console.log("cash:", cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (  
    <div className="App">
      <div style={{fontSize: "3rem"}}>Cash: {cash}</div>
        <div style={{display: "flex", gap: "20px"}}>
            <button className="c-button" onClick={() => addCash(Number(prompt()))}> Поповнити рахунок </button>
            <button className="c-button" onClick={() => getCash(Number(prompt()))}> Зняти готівку </button>
        </div> 
    </div>
  );
}

export default App;
