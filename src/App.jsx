
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is Day 1 progress</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment </button><br/> <br/>
      <button onClick={()=>setCount(count-1)}>Decrement </button>

    </>
  )
}

export default App
