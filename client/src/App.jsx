import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import CompleteYourProfile from './components/Primitive/CompleteYourProfile/CompleteYourProfile.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage />  */}
      <CompleteYourProfile />  
    </>
  )
}

export default App
