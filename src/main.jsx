import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux'
/* const notes = [
    {
        id:1,
        content: 'Working with Lists',
        important:true
    },
    {
        id:2,
        content:"Props Vs State",
        important:false
    },
    {
        id:3,
        content:'Usage ofkeys',
        important:false
    },
    {
        id:4,
        content:'Conditional Rendering',
        important:true
    },
    {
        id:5,
        content:'Handling Events',
        important:true
    }
] */
    
const counterReducer = (state =0, action)=>{
    switch(action.type){
        case "INCR":
            return state + 1;
        case "DECR":
            return state - 1;
        case "ZERO":
            return 0;    

    }
    
}
const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store = {store}>
        <App/>
    </Provider>
  
)
