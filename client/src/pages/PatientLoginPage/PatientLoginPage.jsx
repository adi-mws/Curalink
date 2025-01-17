import React from 'react'
import './PatientLoginPage.css'
import PatientLoginFrom from '../../components/forms/PatientLoginForm/PatientLoginForm.jsx'
import twitter from '../../assets/icons/twitter.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import 



export default function PatientLoginPage() {
  return (
    <div  className="PatientLoginPage">
       <div className="social-handles">
        <div className="text">
        <b>Also Follow Us On</b>
        <p>Follow us on social media for the latest health tips, wellness trends, and updates about our services. </p>
        </div>
        <div className="handles">
          <a href=""><img src={twitter} alt="" /></a>
          <a href=""><img src={facebook} alt="" /></a>
          <a href=""><img src={instagram} alt=""/></a>
          <a href=""><img src={linkedin} alt="" /></a>
        </div>
      </div>

      <div className="registerNow">
        <b>New to our platform?</b>
        <p>Create your account today to easily book appointments, manage prescriptions with a powerful dashboard.</p>
        <div className="button"><SecondaryButton text="Register Now" padding="0.8em 4em" borderRadius='3px'/></div>
      </div>

      <div className="form">
        <PatientLoginFrom/>
      </div>
    <div className="patient-registration-page-content">
      <img src={} alt="" />
      <div className="welcomeMessage">
        <p className="heading">Welcome Back to Better Health</p>
        <p className="text">Log in to access your appointments, prescriptions, and health dashboard.</p>
        <b>Cured 1800+ Patients</b>
      </div>
    </div>
      
    </div>
  )
}

