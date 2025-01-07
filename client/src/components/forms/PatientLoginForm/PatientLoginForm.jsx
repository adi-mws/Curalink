import './PatientLoginForm.css'
import React, { useState } from 'react'
import googleIcon from '../../../assets/icons/google-icon.webp'
import eyeIcon from '../../../assets/icons/eye.png'
import eyeSlashIcon from '../../../assets/icons/eye-slash.png'
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton'

export default function PatientLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="PatientLoginForm">
      <form action="">
        <div className="email inputFields">
          <label >Email</label>
          <input type="Email" placeholder="Enter Email" />
        </div>
        <div className="inputFields">
          <label>Password</label>
          <input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" />
          <span className="eye-icon" onClick={() => {setShowPassword(!showPassword)}}>
            <img src={showPassword ? eyeSlashIcon : eyeIcon} alt="" />
          </span>
        </div>
        <div className="recovery"><a>Forgot Password?</a></div>
        <PrimaryButton text="Login" width='266px' padding=".8em 4em" borderRadius='5px' type='submit'/>
        <p className="or">or</p>
        <button className="googleLogin">
          <img src={googleIcon} alt="" />
          <p>Continue with google</p>
        </button>
      </form>
    </div>
  )
}