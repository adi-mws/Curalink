import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css';
import Header from '../../components/layout/Header/Header';
import Frame from '../../assets/imgs/aboutFrame.png';

export default function AboutPage({ }) {
    return (
        <>
        <div>
            <Header />
            <div className="Hero">
                <div className="Hero-Left">
                    <h1>We Make Healthcare Simple, Accessible, and Personalized for You</h1>
                    <br />
                    <p>At CuraLink, we are redefining healthcare accessibility and transforming the way patients and doctors connect across India. As a trusted online consultancy platform, our mission is to simplify healthcare by bringing it closer to those who need it most, while empowering doctors with tools to manage their practices efficiently.</p>
                </div>
                <div className="Hero-Right">
                    <img src={Frame} alt="Smiling Woman" className="Smiling-Woman"/>
                </div>
            </div>
        </div>
        </>
    )
}