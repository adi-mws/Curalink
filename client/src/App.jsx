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
import DoctorsCard from './components/shared/cards/DoctorsCard/DoctorsCard.jsx'
import DoctorsSearchPage from './pages/DoctorsSearchPage/DoctorsSearchPage.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import ScheduledAppointments from './components/dashboard/patient/ScheduledAppointments/ScheduledAppointments.jsx';
import SupportSystem from './components/dashboard/patient/SupportSystem/SupportSystem.jsx';
import PrescriptionSystem from './components/dashboard/patient/PrescriptionSystem/PrescriptionSystem.jsx';
import FAQsPage from './pages/FAQsPage/FAQsPage.jsx';
import DoctorPublicProfilePage from './pages/DoctorProfilePage/DoctorPublicProfilePage.jsx';
import { SideBarProvider } from './contexts/SideBarContext.jsx';
import { SideBarStateContextProvider } from './contexts/SideBarStateContext.jsx';
import { NotificationBarStateContextProvider } from '../src/contexts/NotificationBarContext.jsx';
import PatientLanding from './components/dashboard/patient/PatientLanding/PatientLanding.jsx';
import DoctorLanding from './components/dashboard/doctor/DoctorLanding/DoctorLanding.jsx';
import ShowServices from './components/dashboard/doctor/forms/ServiceForm/ShowServices.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { useAuth } from './contexts/AuthContext.jsx';
import AnnouncementPage from './pages/AnnouncementPage/AnnouncementPage.jsx';
import DoctorDetails from './components/dashboard/doctor/DoctorDetails/DoctorDetails.jsx';
import AddQualification from './components/dashboard/doctor/forms/QualificationForm/AddQualification.jsx';
import DoctorLoginPage from "./components/forms/DoctorLoginPage/DoctorLoginPage.jsx"
import DoctorRegistrationPage from './pages/DoctorRegistrationPage/DoctorRegistrationPage.jsx';
import AdminLoginPage from './components/forms/AdminLoginPage/AdminLoginPage.jsx';
import PatientInformation from './components/dashboard/patient/PatientInformation/PatientInformation.jsx';
import AppointmentPage from './components/dashboard/doctor/AppointmentPage/AppointmentPage.jsx'
import DoctorCalendarPopup from './components/shared/primitive/DoctorCalendarPopUp/DoctorCalendarPopup.jsx';
import AdminSidebar from './components/layout/AdminSidebar/AdminSidebar.jsx';
function App() {
  // const { user } = useAuth();
  return (
    <>
      {/* <DoctorCalendarPopup /> */}
      {/* <DoctorLoginPage /> */}
      {/* <DoctorRegistrationPage /> */}
      {/* <AdminLoginPage /> */}
      <AuthProvider>
        <SideBarProvider>
          <SideBarStateContextProvider>
            <NotificationBarStateContextProvider>
              <Router>
                <ScrollToTop />
                <Routes>

                  <Route path='/' element={<MainLayout />}>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/admin-sidebar' element={<AdminSidebar />} />
                    <Route path='/support' element={<SupportPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/doctors' element={<DoctorsPage />} />
                    <Route path='/services' element={<ServicePage />} />
                    <Route path='/news' element={<NewsSearchPage />} />
                    <Route path='/news/:id' element={<NewsPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/login' element={<PatientLoginPage />} />
                    <Route path='/announcements' element={<AnnouncementPage />} />
                    <Route path='/registration' element={<PatientRegistrationPage />} />
                    <Route path='/search-doctors' element={<DoctorsSearchPage />} />
                    <Route path='/search-faqs' element={<FAQsPage />} />
                    <Route path='/doctor-profile' element={<DoctorPublicProfilePage />} />
                    <Route path='/doctor-profile/show-services' element={<ShowServices />} />
                    <Route path='/test' element={<AddQualification/>}/>
                    <Route path='/doctor-profile/:id' element={<DoctorPublicProfilePage />} />
                    <Route path='/doctor/login' element={<DoctorLoginPage />} />
                    <Route path='/doctor/register' element={<DoctorRegistrationPage />} />

                  </Route>


                  <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route path='/dashboard' element={<PatientLanding />} />
                    <Route path='/dashboard/appointments' element={<ScheduledAppointments />} />
                    <Route path='/dashboard/appointments/scheduled' element={<ScheduledAppointments appointmentsState='scheduled' />} />
                    <Route path='/dashboard/appointments/past' element={<ScheduledAppointments appointmentsState='past' />} />
                    <Route path='/dashboard/support' element={<SupportSystem />} />
                    <Route path='/dashboard/prescriptions' element={<PrescriptionSystem />} />
                    <Route path='/dashboard/patient-information' element={<PatientInformation />} />
                  </Route>

                  <Route path='/doctor/dashboard' element={<DashboardLayout />}>
                    <Route path='/doctor/dashboard' element={<DoctorLanding />} />
                    <Route path='/doctor/dashboard/support' element={<SupportSystem />} />
                    <Route path='/doctor/dashboard/account-details' element={<DoctorDetails />}></Route>
                    <Route path='/doctor/dashboard/appointments' element={<AppointmentPage />}></Route>
                  </Route>


                </Routes>
              </Router>
            </NotificationBarStateContextProvider>
          </SideBarStateContextProvider>
        </SideBarProvider>
      </AuthProvider>
    </>
  )
}
export default App