import React from 'react'
import './CompleteProfileAlert.css'
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton'
export default function CompleteProfileAlert() {
    return (
        <div className="CompleteProfileAlert-wrapper">
            <div className='CompleteProfileAlert'>
                <p className="title">Complete Your Profile to Get Started</p>
                <div className="section">
                    <div className="section-notes">
                        <p className="description">Welcome to Curalink, your trusted online health companion!
                            To ensure accurate and personalized medical consultations, we require you to complete your profile. This includes your basic information, medical history, and current health status.
                        </p>
                        <p className="extranote">Completing your profile is mandatory before booking or attending any consultation.</p>

                    </div>

                    <img src="/imgs/complete-your-profile-graphic.jpg" alt="complete-your-profile" className="graphics" />

                </div>

                <PrimaryButton text={'Complete Now'} />
            </div>

        </div>
    )
}
