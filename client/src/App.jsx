import { useState } from 'react'
import './App.css'
import NewsPage from './pages/NewsPage/NewsPage'
import NewsSearchPage from './pages/NewsSearchPage/NewsSearchPage.jsx'
import DoctorsPage from './pages/DoctorsPage/DoctorsPage.jsx'
import SupportPage from './pages/SupportPage/SupportPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import UserInfoHeader from './components/layout/UserInfoHeader/UserInfoHeader.jsx'
import Header from "./components/layout/Header/Header.jsx"
import RatingDisplay from './components/Rating/RatingDisplay.jsx'
import RatingInput from './components/Rating/RatingInput.jsx'
import ServicePage from './pages/ServicePage/ServicePage.jsx'
import PrimaryHollowButton from './components/shared/buttons/PrimaryHollowButton/PrimaryHollowButton.jsx'
import AppointmentAlert from './components/shared/alerts/AppointmentAlert/AppointmentAlert.jsx'
import UserNotification from './components/shared/alerts/UserNotification/UserNotification.jsx'

function App() {
  return (
    <>
      <DoctorsPage/>
    </>
  )
}
export default App
