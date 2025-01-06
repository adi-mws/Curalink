import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import Header from './components/Header/Header.jsx'
import CompleteYourProfile from './components/Primitive/CompleteYourProfile/CompleteYourProfile.jsx'
import Footer from './components/Footer/Footer.jsx'
import PatientLoginForm from './components/PatientLoginForm/PatientLoginForm.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CompleteYourProfile />  

      <PatientLoginForm /> 
      {/* <HomePage />  */}
      {/* <CompleteYourProfile />   */}
      {/* < Footer/> */}
    </>
  )
}

export default App
