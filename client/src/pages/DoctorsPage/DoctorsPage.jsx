import './DoctorsPage.css'
import React from 'react'
import HeroSectionSlope from '../../assets/imgs/heroDoctorsPage-slope.png'
import MainHeroImage from '../../assets/imgs/heroDoctorPage.png'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'

export default function DoctorsPage() {
  return (
    <div className="DoctorsPage">
      
        <div style={{backgroundImage:`url(${HeroSectionSlope})`}} className="Hero-Section">
            <div className="Hero-content">
                <p className="Heading">Join Us in Revolutionizing Healthcare</p>
                <p className="Body">Become a part of our mission to provide exceptional care through innovation, compassion, and expertise. Together, let's transform lives and shape the future of online healthcare.</p>
                <PrimaryButton text="Join Us" width='12em'/>
            </div>
             
                <img className="MainImage" src={MainHeroImage} alt="" />
            
            <div className="Hero-Merits">
              <div className="Merit-1">
                <p className="Merit-Head">80+</p>
                <p className="Merit-Body">Specialists</p>
              </div>
              <div className="Merit-2">
                <p className="Merit-Head">27/7</p>
                <p className="Merit-Body">Support</p>
              </div>
              <div className="Merit-3">
                <p className="Merit-Head">10%</p>
                <p className="Merit-Body">Platform Charge</p>
              </div>
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
