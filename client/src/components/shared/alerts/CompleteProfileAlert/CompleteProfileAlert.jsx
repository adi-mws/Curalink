import React from 'react'
import './CompleteProfileAlert.css'
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton'
export default function CompleteProfileAlert() {
  return (
    <div className='CompleteProfileAlert'>
        <p className="title">Complete Your Profile to Get Started</p>
        <img src="" alt="" className="graphics" />
        <p className="description">Welcome to Curalink, your trusted online health companion!
        To ensure accurate and personalized medical consultations, we require you to complete your profile. This includes your basic information, medical history, and current health status.</p>
        <p className="extranote">Completing your profile is mandatory before booking or attending any consultation.</p>
        <PrimaryButton text={'Complete Now'}/>
    </div>
  )
}
