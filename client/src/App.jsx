import { useState } from 'react'
import './App.css'
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
import DashboardLayout from './layouts/DashboardLayout.jsx';
import ScheduledAppointments from './components/dashboard/patient/ScheduledAppointments/ScheduledAppointments.jsx';
import SupportSystem from './components/dashboard/patient/SupportSystem/SupportSystem.jsx';
import PrescriptionSystem from './components/dashboard/patient/PrescriptionSystem/PrescriptionSystem.jsx';

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
            <Route path='/test' element={<DoctorsCard filter={true} />} />
          </Route>

          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route path='/dashboard/scheduled-appointments' element={<ScheduledAppointments />} />
            <Route path='/dashboard/support-system' element={<SupportSystem />} />
            <Route path='/dashboard/prescription-system' element={<PrescriptionSystem />} />
          </Route>
        </Routes>
      </Router>


    </>
  )
}
export default App
