import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage />   
    </>
  )
}

export default App
