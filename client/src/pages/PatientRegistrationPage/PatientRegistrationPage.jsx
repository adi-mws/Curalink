import React from 'react'
import './PatientRegistrationPage.css'
import Handshake from '../../assets/graphics/patientRegistrationPersonHandshake.png'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton'
import PatientRegistrationForm from '../../components/forms/PatientRegistrationForm/PatientRegistrationForm.jsx'
import googleIcon from '../../assets/icons/google-icon.webp'
import circleArrow from '../../assets/icons/ArrowCircleRight.png'

import { useNavigate } from 'react-router-dom'
import { useSideBarState } from '../../contexts/SideBarStateContext.jsx';
import { useEffect } from 'react';

export default function PatientRegistrationPage() {
  const navigate = useNavigate();
  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState('register');
    return () => {
      setSideBarState('');
    }
  }, []);


  return (<>
    <div className="PatientRegistrationPage">
      <div className="MainHeading">
        <h2>Join Us and Simplify Your Health Journey</h2>
        <p>Create your account to book appointments, manage prescriptions, and more.</p>
      </div>

      <div className="handshake">
        <img src={Handshake} alt="" />
      </div>

      <div className="google-sign-in">
        <button className="registerHere" onClick={() => navigate('/registration')}>Register Here <img src={circleArrow} alt="" /></button>
        <p>or</p>
        <button className="ContinueWithGoogle"><img src={googleIcon} alt="" /> Continue with Google </button>
      </div>

      <div className="login-redirect">
        <div className="text">
          <b>Already have an account?</b>
          <p>Log in now to book appointments seamlessly, track your medical history, and manage everything through our intuitive dashboard.</p>
        </div>
        <button onClick={() => navigate('/login')}><SecondaryButton text="Login Now" padding="1em 6em" borderRadius='4px'/></button>
      </div>

      <div className="SmallHeading">
        <h1 className="Head">Welcome Back to Better Health</h1>
        <button className="Google"><img src={googleIcon} alt="" />Continue with Google</button>
        <p>or</p>
      </div>

      <div className="form">
        <PatientRegistrationForm/>
      </div>
    </div>
    </>
  )
}
