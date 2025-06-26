import React from 'react'
import './HeroSection.css'
export default function HeroSection() {
    return (
        <div className='HeroSection'>
            <div className="hero-upper">
                <div className="hero-left">
                    <div className='hero-standout-features'>
                        <p className="hero-standout-feature-item">5000+ People Globally</p>
                        <p className="hero-standout-feature-item">24/7 Expert Consultations</p>
                        <p className="hero-standout-feature-item">Secure and Private Platform</p>
                    </div>
                    <div className='main-hero-content'>
                        <p className="title">Online Consultation, <span>Connecting Doctors and Patients </span> Anywhere</p>
                        <p className="description">Connect with trusted doctors anytime, anywhere. CuraLink brings expert medical advice to your fingertips for seamless, secure healthcare.</p>
                    </div>
                    <div className="appointment-form">
                        <div className="appointment-details">
                            <button>Choose Category</button>
                            <button>Select Date</button>
                        </div>
                        <button className='appointment-booking-btn'>Book Appointment</button>

                    </div>
                </div>
                <div className="hero-right">
                    <img src="/imgs/hero-image.png" alt="hero-image" />
                </div>
            </div>
            <div className="hero-bottom">
                <span>5000+ Consultations</span>
                <span>150+ Doctors</span>
                <span>4000+ Positive Impressions</span>
            </div>
        </div>


    )
}
