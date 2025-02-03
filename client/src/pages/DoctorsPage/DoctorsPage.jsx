import './DoctorsPage.css'
import React from 'react'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'

export default function DoctorsPage() {
  return (
    <div className="DoctorsPage">
        <div style={{backgroundImage: `url(${HeroBackgroundSlope})` }} className="Hero-Section">
            <div className="Hero-content">
                <p className="Heading">Join Us in Revolutionizing Healthcare</p>
                <p className="Body">Become a part of our mission to provide exceptional care through innovation, compassion, and expertise. Together, let's transform lives and shape the future of online healthcare.</p>
                <PrimaryButton text="Join Us"/>
                
            </div>
        </div>

        <div className="Video-Section"></div>

        <div className="Perks-Section"></div>

        <div className="Communication-Section"></div>

        <div className="Doctor-Testimonials-Section"></div>

        <div className="Join-request-Section"></div>

        <div className="FAQs-Section"></div>
    </div>
  )
}
