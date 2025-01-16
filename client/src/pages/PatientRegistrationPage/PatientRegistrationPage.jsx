import React, { Component } from 'react'
import './PatientRegistrationPage.css'
import PatientRegistrationForm from '../../components/forms/PatientRegistrationForm/PatientRegistrationForm' 
import Header from '../../components/layout/Header/Header.jsx' 
import Footer from '../../components/layout/Footer/Footer.jsx'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import GoogleIcon from '../../assets/icons/google-icon.webp'
import Handshake from '../../assets/graphics/patientRegistrationPersonHandshake.png'

function Heading(){
  return(
    <div className="PatientRegistrationPage">
    <div className="heading">
      <h2>Join Us and Simplify Your Health Journey</h2>
      <p>Create your account to book appointments, manage <br />prescriptions, and more.</p>
    </div>
    </div>
  )
}
function GoogleLogin() {
  return (
    <div className="PatientRegistrationPage"> 
      <div className="GoogleLogin">
        <button className="register">Register here <img  alt="" /></button>
        <p>or</p>
        <button className="google"><img className="googlelogo" src={GoogleIcon} alt="" /> Continue with google </button>
      </div>
    </div>
  )
}
function LoginRedirect(){
  return(
    <div className="PatientRegistrationPage">
    <div className="login-redirect">
      <div className="login-redirect-text">
      <b>Already have an account?</b>
      <p>Log in now to book appointments seamlessly,track your medical history, and manage everything through our intuitive dashboard.</p>
      </div>
      <SecondaryButton text="Login Now" />
    </div>
    </div>
  )
}
function HandshakeImage(){
  return(
    <div className="PatientRegistrationPage">
      <div className="handshake-image">
        <img src={Handshake} alt="" />
      </div>
    </div>
  )
}

export default function PatientRegistrationPage() {
  return (
    <div className="PatientRegistrationPage">
        <main>
            <div className="div-1"><Heading/></div>
                  <div id="HandshakeImage"><HandshakeImage /></div>
                  <div id="GoogleLogin"><GoogleLogin /></div>
            <div className="div-3">
              <LoginRedirect />
            </div>
          <div className="div-4">
            <PatientRegistrationForm />
          </div>
        </main>
        
    </div>
  )
}
