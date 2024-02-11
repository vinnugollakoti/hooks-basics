import { createContext, useState } from 'react'
import './App.css'
import Vinnu from './vinnu'
export const background = createContext()
function App() {
  const [state, setstate] = useState(false)
  return (
    <>
    <center>
    <background.Provider value={state}>
      <button onClick={()=>{setstate(!state)}}>Toggle</button>
      <Vinnu/>
      </background.Provider></center>
    </>
  )
}

export default App
