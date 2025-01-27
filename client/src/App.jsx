import { useState } from 'react'
import './App.css'
import PatientLoginPage from './pages/PatientLoginPage/PatientLoginPage'
import PatientRegistrationPage from './pages/PatientRegistrationPage/PatientRegistrationPage'
import Sidebar from './components/layout/Sidebar/Sidebar'
import Header from './components/layout/Header/Header'
import AboutPage from './pages/AboutPage/AboutPage'

function App() {
  return (
    <>
      <Header />
      <AboutPage />
    </>
  )
}
export default App
