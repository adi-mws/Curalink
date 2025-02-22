import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DoctorsPage from './pages/DoctorsPage/DoctorsPage';
import ServicePage from './pages/ServicePage/ServicePage';
import AnnouncementPage from './pages/AnnouncementPage/AnnouncementPage.jsx';
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
import FAQsPage from './pages/FAQsPage/FAQsPage.jsx';
import DoctorPublicProfilePage from './pages/DoctorProfilePage/DoctorPublicProfilePage.jsx';
import { SideBarStateContextProvider } from './components/contexts/SideBarStateContext.jsx';
import { NotificationBarStateContextProvider } from './components/contexts/NotificationBarContext.jsx';
import PatientLanding from './components/dashboard/patient/PatientLanding/PatientLanding.jsx';
import { SideBarProvider } from './components/contexts/SidebarContext.jsx';
<<<<<<< HEAD
import DoctorLanding from './components/dashboard/doctor/DoctorLanding/DoctorLanding.jsx';
=======
import ShowServices from './components/dashboard/doctor/forms/ServiceForm/ShowServices.jsx';

>>>>>>> 83a76efb4709c8d10a193953684cbf6b40d8cee2
function App() {
  return (
    <>
      <SideBarProvider>
        <SideBarStateContextProvider>
          <NotificationBarStateContextProvider>
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
                  <Route path='/search-doctors' element={<DoctorsSearchPage />} />
                  <Route path='/test' element={<DoctorsCard filter={true} />} />
                  <Route path='/search-faqs' element={<FAQsPage />} />
                  <Route path='/doctor-profile' element={<DoctorPublicProfilePage />} />
                  <Route path='/doctor-profile/show-services' element={<ShowServices />} />
                </Route>



                <Route path='/dashboard' element={<DashboardLayout />}>
                  <Route path='/dashboard' element={<PatientLanding />} />
                  <Route path='/dashboard/appointments' element={<ScheduledAppointments />} />
                  <Route path='/dashboard/appointments/scheduled' element={<ScheduledAppointments appointmentsState='scheduled' />} />
                  <Route path='/dashboard/appointments/past' element={<ScheduledAppointments appointmentsState='past' />} />
                  <Route path='/dashboard/support' element={<SupportSystem />} />
                  <Route path='/dashboard/prescriptions' element={<PrescriptionSystem />} />
                </Route>

                <Route path='/doctor-dashboard' element={<DashboardLayout />}>
                  <Route path='/doctor-dashboard' element={<DoctorLanding />} />
                </Route>
              </Routes>
            </Router>
          </NotificationBarStateContextProvider>
        </SideBarStateContextProvider>
      </SideBarProvider>

    </>
  )
}
export default App
