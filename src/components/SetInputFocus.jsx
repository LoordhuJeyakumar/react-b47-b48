import React, { useEffect } from 'react'

function SetInputFocus({inputRef}) {

    useEffect(()=>{
        inputRef.current.focus();
    })

  return (
    <div></div>
  )
}

export default SetInputFocus