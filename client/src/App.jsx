import { useState } from 'react'
import './App.css'
import NewsPage from './pages/NewsPage/NewsPage'
import NewsSearchPage from './pages/NewsSearchPage/NewsSearchPage.jsx'
import DoctorsPage from './pages/DoctorsPage/DoctorsPage.jsx'
import Pagination from './components/shared/Pagination/Pagination'
import SupportPage from './pages/SupportPage/SupportPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'


function App() {
  return (
    <NewsSearchPage/>
  )
}
export default App
