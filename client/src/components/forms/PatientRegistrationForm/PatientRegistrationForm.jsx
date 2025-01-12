import React from 'react'
import { useForm } from 'react-hook-form'
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton'

export default function PatientRegistrationForm() {
  return (
    <div className="PatientRegistrationForm">
        <form action="">
            <div className="div-1">
                <div className="input-field">
                    <label >Name</label>
                    <input type="text" placeholder='Enter name' />
                </div>
                <div className="input-field">
                    <label >Email</label>
                    <input type="email" placeholder='Enter Email' />
                </div>
                <div className="input-field">
                    <label >Password</label>
                    <input type="password" placeholder='Enter Password' />
                </div>
                <div className="input-field">
                    <label >Confirm Password</label>
                    <input type="text" placeholder='Confirm password' />
                </div>
            </div>
            <div className="div-2">
                <div className="input-field">
                    <label >Gender</label>
                    <input type="option" placeholder='Select gender' />
                </div>
                <div className="input-field">
                    <label >Date of Birth</label>
                    <input type="date" placeholder='Select Dob' />
                </div>
                <div className="input-field">
                    <label >Address</label>
                    <input type="text" placeholder='Enter Address' />
                </div>
                <div className="input-field">
                <label >Phone Number</label>
                <input type="number" placeholder='Enter Email' />
                </div>
            </div>
            <div>
            <input type="checkbox">I agree to the <a href="">terms of service</a> and <a href="">privacy policy</a></input>
            <PrimaryButton text="Register" width='266px' padding=".8em 4em" borderRadius='5px' type='submit'/>
            </div>
        </form>
    </div>
  )
}
