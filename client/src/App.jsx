import { useState } from 'react'
import './App.css'
import ContactPage from './pages/ContactPage/ContactPage.jsx'
import Header from './components/layout/Header/Header.jsx'
import Footer from './components/layout/Footer/Footer.jsx'


function App() {
  return (
    <>
    <Header/>
    <ContactPage />
    <Footer/>
    </>
  )
}
export default App
