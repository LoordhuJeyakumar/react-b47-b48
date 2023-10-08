import React, { createContext, useContext, useState } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { MessageContext } from '../App';

// create a childMessageContext

const childMessageContext = createContext()

function ChildComponent() {

    const [message, setMessage] = useContext(MessageContext);
    const {childMessage, setMessageChild} = useState('Hello from Child');


    const updateMessage = () => {
        setMessage('Hello from Parent');
    }
    
    return (
        <div>
            <h2>Child Component</h2>
        <p>Message from Parent Component: {message}
        </p>
            <button onClick={updateMessage}>Update Message</button>
            {/* provide the childMessageContext to GrandChildComponent */}
            <childMessageContext.Provider value={[message, setMessage]}>
            <GrandChildComponent />
            </childMessageContext.Provider>
            
        </div>
    )
}

export  {ChildComponent as default, childMessageContext};