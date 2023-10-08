import React, { useContext } from 'react';
import { MessageContext } from '../App';
import { childMessageContext } from './ChildComponent';

function GrandChildComponent() {
    const message = useContext(MessageContext);
    // use the context childMessageContext, get the data
    const childMsg = useContext(childMessageContext)
    return (
      <div>
            <h2>GrandChild Component</h2>
            {/* print the data received from the childMessageContext */
            childMsg
            }
          <p>Message from Parent Component: { message }</p>
    </div>
  )
}

export default GrandChildComponent