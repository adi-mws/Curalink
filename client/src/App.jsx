import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header/Header.jsx'
import SecondaryButton from './components/shared/buttons/SecondaryButton/SecondaryButton.jsx'

function App() {
  return (
    <>
      <Header />
      <SecondaryButton text={"Aditya"} fontSize={"1em"}/>
    </>
  )
}

export default App
