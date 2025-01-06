import './PatientLoginForm.css'
import React from 'react'
import { useForm } from "react-hook-form"

export default function PatientLoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
  return (
    <div className="PatientLoginForm">PatientLoginForm
        <form action="">
            <input type="Email" placeholder="Enter Email"/>
            <input type="password" placeholder="Enter Password"/>
            <p>Forgot Password</p>
            <input type="submit" />
        </form>
    </div>
  )
}
