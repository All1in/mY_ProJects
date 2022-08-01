import React from 'react';
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from "./asyncActions/customers"

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (  
    <div className="App">
      <div style={{fontSize: "3rem", textAlign: "center", marginBottom: "15px"}}>Cash: {cash}</div>
        <div style={{display: "flex", gap: "20px"}}>
            <button className="c-button" onClick={() => addCash(Number(prompt()))}> Поповнити рахунок </button>
            <button className="c-button" onClick={() => getCash(Number(prompt()))}> Зняти готівку </button>
            <button className="c-button" onClick={() => addCustomer(prompt())}> Додати клієнта </button>
            <button className="c-button" onClick={() => dispatch(fetchCustomers())}> Додати клієнтів з серверу</button>
        </div> 
        {customers.length > 0 ?
          <div>
            {customers.map(customer => 
              <div 
                onClick={() => removeCustomer(customer)}
                style={{
                        fontSize: "2rem", 
                        border: "1px solid #000", 
                        padding: "10px 20px", 
                        marginTop:"5px"}}
                >
                 {customer.name} 
              </div>
            )} 
          </div> 
          : 
          <div style={{fontSize: "2rem", marginTop: "20px", textAlign: "center"}}>
              Відсутні клiєнти
          </div>
        } 
    </div>
      
  );
}

export default App;
