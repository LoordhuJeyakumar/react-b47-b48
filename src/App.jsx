import React from 'react'

function App() {

  const dispatch = useDispatch();
  const counter = useSelector(state => state);

  return (
    <div>App</div>
  )
}

export default App