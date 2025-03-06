import React, { useEffect } from 'react'
import Calendar from '../../../shared/primitive/Calendar/Calendar'
import { useState } from 'react'
import patientPfp from '../../../../assets/imgs/patient-pfp.jpg'
import './DoctorLanding.css'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader';
import SecondaryButton from '../../../shared/buttons/SecondaryButton/SecondaryButton'
export default function DoctorLanding() {
    const [bookingStatus, setBookingStatus] = useState([]);

    useEffect(() => {
        setBookingStatus([
            { date: '2025-02-17', percentage: 90 },
            { date: '2025-02-02', percentage: 50 },
            { date: '2025-01-08', percentage: 20 },
            { date: '2025-01-03', percentage: 10 },
            { date: '2025-01-10', percentage: 0 },
        ])
    }, [])

    return (
        <div className='DoctorLanding'>
            <DashboardHeader title='Good Morning' />
            <div className="doctor-landing-content">
                <div className='doctor-landing-hero-section'>
                    <div className="doctor-landing-profile-section">
                        <div className="doctor-landing-profile-section-left">
                            <img src={patientPfp} alt="" />
                        </div>
                        <div className="doctor-landing-profile-section-right">
                            <p className="doctor-name">Dr. Shilpa Singh</p>
                            <p className="doctor-specialization">Cardiologist</p>
                            <div className="doctor-landing-profile-section-right-redirections">
                                <SecondaryButton text={'Edit Details'} padding='.7em 4em' fontSize={'.9em'} />
                                <span className="doctor-rating"><i className='fa-solid fa-star'></i> 4.5</span>

                            </div>
                        </div>


                    </div>
                    <Calendar dashboard='doctor' bookingStatus={bookingStatus} />

                </div>
            </div>
        </div>
    )
}
