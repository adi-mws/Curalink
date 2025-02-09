import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
import NewsPage from './pages/NewsPage/NewsPage'
import Pagination from './components/shared/Pagination/Pagination'


function App() {
  return (
    <NewsPage/>
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage';
import ServicePage from './pages/ServicePage/ServicePage';
import NewsPage from './pages/NewsPage/NewsPage';
import NewsSearchPage from './pages/NewsSearchPage/NewsSearchPage';
import HomePage from './pages/HomePage/HomePage';
import SupportPage from './pages/SupportPage/SupportPage';
import PatientLoginPage from './pages/PatientLoginPage/PatientLoginPage';
import PatientRegistrationPage from './pages/PatientRegistrationPage/PatientRegistrationPage';
import ScrollToTop from './components/shared/primitive/ScrollToTop/ScrollToTop';
import DoctorsCard from './components/DoctorsCard/DoctorsCard.jsx'
import DoctorsSearchPage from './pages/DoctorsSearchPage/DoctorsSearchPage.jsx';

function App() {
  return (
    <>

      <Router>
      <ScrollToTop />

        <Routes>

          <Route path='/' element={<MainLayout />}>

            <Route path='/' element={<DoctorsPage />} />
            <Route path='/support' element={<SupportPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/doctors' element={<DoctorsPage />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/news' element={<NewsSearchPage />} />
            <Route path='/news/:id' element={<NewsPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/login' element={<PatientLoginPage />} />
            <Route path='/register' element={<PatientRegistrationPage />} />
            <Route path='/searchdoctors' element={<DoctorsSearchPage />} />
            <Route path='/test' element={<><DoctorsCard/><DoctorsCard filter={true}/></>} />
          </Route>
        </Routes>
      </Router>


    </>
>>>>>>> 9b68e43c970e9894a187f48c39ec075a597d250a
  )
}
export default App
