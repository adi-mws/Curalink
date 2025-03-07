import React from 'react'
import "./DoctorLoginPage.css";
import DoctorWork from "../../../assets/imgs/DoctorWork.png";
import TertiaryButton from '../../shared/buttons/TertiaryButton/TertiaryButton';
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton';

const DoctorLoginPage = () => {
  return (
    <div className='DoctorLoginPage'>

        <div className="DoctorCard">
            <p className='title'>Secure Access to Your Doctor's Dashboard</p>
            <p className='text'>Welcome back! Log in to manage your appointments, consult with patients, and access your digital practice with ease.</p>
            <img src={DoctorWork} alt="doctorWork" />
            <div className="buttons">
                <PrimaryButton text="Explore Doctor Perks" />
                <TertiaryButton text="Register As Doctor"/>
            </div>
        </div>

    </div>
  )
}

export default DoctorLoginPage