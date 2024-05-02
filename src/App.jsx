import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [state, setState] = useState({count: 0, theme:"blue"})
  const count=state.count
  const theme=state.theme
  function decrement(){
    setState(prevState=>{
      return {...prevState, count: prevState.count-1}
    })
  }

  return (
    <>
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <span>{theme}</span>

      </div>

    </>
  )
}


export default App
