import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"

const sagaMiddleWare = createSagaMiddleware({}) 

const store = createStore(reducer, applyMiddleware(sagaMiddleWare));