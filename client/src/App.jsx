import { useState } from 'react'
import './App.css'
import NewsPage from './pages/NewsPage/NewsPage'
import NewsSearchPage from './pages/NewsSearchPage/NewsSearchPage.jsx'
import DoctorsPage from './pages/DoctorsPage/DoctorsPage.jsx'
import SupportPage from './pages/SupportPage/SupportPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import UserInfoHeader from './components/layout/UserInfoHeader/UserInfoHeader.jsx'
import Header from "./components/layout/Header/Header.jsx"
import UserNotification from './components/layout/UserNotification/UserNotification.jsx'
import AppointmentAlert from './components/layout/AppointmentAlert/AppointmentAlert.jsx'
import ServicePage from './pages/ServicePage/ServicePage.jsx'
import PrimaryHollowButton from './components/shared/buttons/PrimaryHollowButton/PrimaryHollowButton.jsx'
import Rating from './components/shared/Rating/Rating.jsx'

function App() {
  return (
    <Rating/>
  )
}
export default App
