import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header title={"Aditya"}/>
    <h1>Welcome to Curalink</h1>
    <Header title={"Rohan"} />
    </>
  )
}

export default App
