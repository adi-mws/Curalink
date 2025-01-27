import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css';
import Frame from '../../assets/imgs/aboutFrame.png';

export default function AboutPage({ }) {
    return (
        <>
        <div className="AboutPage">
            <div className="Hero">
                <div className="Hero-Left">
                    <h1>We Make Healthcare Simple, Accessible, and Personalized for You</h1>
                    <br />
                    <p>At CuraLink, we are redefining healthcare accessibility and transforming the way patients and doctors connect across India. As a trusted online consultancy platform, our mission is to simplify healthcare by bringing it closer to those who need it most, while empowering doctors with tools to manage their practices efficiently.</p>
                    <div className="Cards">
                        <div className="Vision">
                            <h3>Our Vision</h3>
                            <p>To provide accessible, reliable, and personalized healthcare by connecting patients with trusted doctors, ensuring quality care is just a click away.</p>
                            <a href="">Read More</a>
                        </div>
                        <div className="Mission">
                            <h3>Our Mission</h3>
                            <p>To be India’s top platform for seamless, patient-centered healthcare, empowering patients and doctors with innovation and technology.</p>
                            <a href="">Read More</a>
                        </div>                    
                    </div>
                </div>
                <div className="Hero-Right">
                    <img src={Frame} alt="Smiling Woman" className="Smiling-Woman"/>
                </div>
            </div>
            
            <div className="Services">
                <h1>What We Do ?</h1>
            </div>
        </div>
        </>
    )
}