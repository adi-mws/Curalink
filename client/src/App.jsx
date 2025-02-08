import { useState } from 'react'
import './App.css'
import NewsPage from './pages/NewsPage/NewsPage'
import Pagination from './components/shared/Pagination/Pagination'
import Header from './components/layout/Header/Header'
import AboutPage from './pages/AboutPage/AboutPage'
import Footer from './components/layout/Footer/Footer'



function App() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  )
}
export default App
