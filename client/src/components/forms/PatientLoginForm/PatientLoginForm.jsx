import './PatientLoginForm.css'
import React from 'react'
/* import { useForm } from 'react-hook-form' */
import googleIcon from '../../assets/icons/google-icon.webp'
import eyeIcon from '../../assets/icons/eye.png'

export default function PatientLoginForm() {
  return (
    <div className="PatientLoginForm">
      <div className="email inputFields">
          <label >Email</label>
            <input type="Email" placeholder="Enter Email"/>
            </div>
           <div className="inputFields">
            <label>Password</label>
            <input type="password" placeholder="Enter Password"/>
            <span class="eye-icon" onclick="togglePasswordVisibility()">
              <img src={eyeIcon} alt="" />
            </span>
           </div>
            <div className="recovery"><a>Forgot Password?</a></div>
            <button type="submit" className='button'>Login</button>
        <p className="or">or</p>
        <div className="googleLogin">
          <img src={googleIcon} alt="" />
          <p>Continue with google</p>
        </div>
    </div>
  )
}