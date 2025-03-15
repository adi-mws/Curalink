import './PatientLoginForm.css'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import googleIcon from '../../../assets/icons/google-icon.webp'
import eyeIcon from '../../../assets/icons/eye.png'
import eyeSlashIcon from '../../../assets/icons/eye-slash.png'
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton'

import axios from 'axios';
export default function PatientLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const submit = async (data) => {
    data.role = 'patient';
    console.log(data);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, data);
      if (response.status === 200) {

      } else {
        console.error(response.data.message);

      }
    }
    catch (error) {
      // console.error(response.data.message);
    }
  }
  return (
    <div className="PatientLoginForm">
      <form onSubmit={handleSubmit(submit)}>
        <div className="email inputFields">
          <label >Email</label>
          <input
            className={errors.email ? "email-error" : ""}
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className={errors.password ? "password-error" : "password inputFields"}>
          <label>Password</label>
          <input
            {...register('password',
              {
                required: { value: true, message: 'Password is required' },
                minLength: { value: 8, message: 'Password must contain at least 8 characters' },
                maxLength: { value: 20, message: 'Password must contain at most 20 characters' }
              })}
            type={showPassword ? 'text' : 'password'} placeholder="Enter Password" />
          {errors.password && <p className="error">{errors.password.message}</p>}
          <button className="eye-icon" type='button' onClick={() => { setShowPassword(!showPassword) }}>
            <img src={showPassword ? eyeSlashIcon : eyeIcon} alt="" />
          </button>
        </div>
        <div className="recovery"><a>Forgot Password?</a></div>
        <PrimaryButton text="Login" width='266px' padding=".8em 4em" borderRadius='5px' type='submit' />
        <p className="or">or</p>
        <button className="googleLogin">
          <img src={googleIcon} alt="" />
          <p>Continue with google</p>
        </button>
      </form>
    </div>
  )
}