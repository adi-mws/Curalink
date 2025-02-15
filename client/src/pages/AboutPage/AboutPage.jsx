import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css';
import Frame from '../../assets/imgs/aboutFrame.png';
import Doctor from '../../assets/imgs/About-Doctor.png';
import right from '../../assets/icons/arrow-down.png';
import LappyWoman from '../../assets/imgs/LappyWoman.png';
import LappyMan from '../../assets/imgs/LappyMan.png';
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx';
import TertiaryButton from '../../components/shared/buttons/TertiaryButton/TertiaryButton.jsx';

export default function AboutPage({ }) {
    return (
        <>
        <div className="AboutPage">
            <div className="Hero-Section">
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
            
            <div className="About-Services">
                <h1>What We Do ?</h1>
                <div className="First">
                    <div className="Written-Block">
                        <p className="First-P">Services for Patients</p>
                        <p className="Second-P">At CuraLink, we believe that healthcare should be a fundamental right, accessible to everyone, no matter where they are or what their circumstances may be. We are committed to bridging the gap between patients and medical professionals, making quality healthcare not just efficient but also deeply personalized to meet the unique needs of each individual.</p>
                    </div>
                    <div className="Read-More">
                        <img src={right} alt="" className="Right-Arrow" />
                        <p>Read More</p>
                    </div>
                    <div className="Doctor-Image">
                        <img src={Doctor} alt="" />
                    </div>
                </div>
                <div className="Second">
                    <div>
                        <h3>Easy Appointment Booking</h3>
                        <p>Schedule appointments with verified doctors from across India at your convenience.</p>
                    </div>
                    <div>
                        <h3>Virtual Consultation</h3>
                        <p>Connect with doctors via video or call consultations, eliminating the need for in-person visits.</p>
                    </div>
                    <div>
                        <h3>Access Your Medical History</h3>
                        <p>View and manage your past consultations, prescriptions, and medical records all in one place.</p>
                    </div>
                    <div>
                        <h3>Prescription Management</h3>
                        <p> Receive digital prescriptions directly from doctors, which you can easily access anytime.</p>
                    </div>
                    <div>
                        <h3>Health News & Updates</h3>
                        <p>Stay informed with the latest health tips, wellness advice, and news tailored to both you and your healthcare needs.</p>
                    </div>
                    <div>
                        <h3>Request Follow-Ups</h3>
                        <p>Easily request follow-up consultations with doctors and track your treatment progress.</p>
                    </div>
                </div>
                <div className="First">
                    <div className="Written-Block">
                        <p className="First-P">Services for Doctors</p>
                        <p className="Second-P">CuraLink is committed to transforming the way doctors manage their practices by offering innovative tools and features that enhance efficiency, improve patient care, and streamline daily operations. Our platform is designed to empower medical professionals by reducing administrative burdens and enabling seamless communication with patients.</p>
                    </div>
                    <div className="Read-More">
                        <img src={right} alt="" className="Right-Arrow" />
                        <p>Read More</p>
                    </div>
                    <div>
                        <img src={LappyWoman} alt="" />
                    </div>
                </div>
                <div className="Second">
                    <div>
                        <h3>Reliable Support System</h3>
                        <p>Get dedicated assistance for seamless communication and issue resolution, ensuring uninterrupted care delivery.</p>
                    </div>
                    <div>
                        <h3>Verified Patient Connections</h3>
                        <p>Connect with patients across India who are verified and seeking your expertise.</p>
                    </div>
                    <div>
                        <h3>Digital Consultations</h3>
                        <p>Offer virtual consultations via video or call, expanding your reach to patients beyond geographical boundaries.</p>
                    </div>
                    <div>
                        <h3>Health Records at Your Fingertips</h3>
                        <p>Access and update patient medical history easily to provide informed and effective care.</p>
                    </div>
                    <div>
                        <h3>Custom Availability Settings</h3>
                        <p>Add your own schedules, including meetings, seminars, or time off, to manage your availability seamlessly.</p>
                    </div>
                    <div>
                        <h3>Prescription Management</h3>
                        <p>Generate and send digital prescriptions directly to patients, ensuring clarity and convenience.</p>
                    </div>
                    <div>
                        <h3>Secure Communication</h3>
                        <p>Interact with patients and manage their concerns in a secure, encrypted environment.</p>
                    </div>
                    <div>
                        <h3>Enhanced Visibility</h3>
                        <p>Be part of a platform that helps patients discover and connect with you based on your specialization and expertise.</p>
                    </div>
                    <div>
                        <h3>Intuitive Dashboard</h3>
                        <p>Manage appointments, patient records, and follow-ups easily from one user-friendly platform.</p>
                    </div>
                </div>
            </div>
            <div className="Different">
                <hr />
                <div className="Heading">
                    <h1>How We're Different?</h1>
                    <div className="P-Block"></div>
                </div>
                <div className="Body-Section">
                    <div>
                        <img src={LappyMan} alt="" />
                        <div>
                            <p><b>Own Communication Software ensuring security and encyption</b></p>
                            <p>CuraLink is committed to transforming the way doctors manage their practices by offering innovative tools and features that enhance efficiency, improve patient care, and streamline daily operations. Our platform is designed to empower medical professionals by reducing administrative burdens and enabling seamless communication with patients.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><b>Own Communication Software ensuring security and encyption</b></p>
                            <p>CuraLink is committed to transforming the way doctors manage their practices by offering innovative tools and features that enhance efficiency, improve patient care, and streamline daily operations. Our platform is designed to empower medical professionals by reducing administrative burdens and enabling seamless communication with patients.</p>
                        </div>
                        <img src={LappyMan} alt="" />
                    </div>
                    <div>
                        <img src={LappyMan} alt="" />
                        <div>
                            <p><b>Own Communication Software ensuring security and encyption</b></p>
                            <p>CuraLink is committed to transforming the way doctors manage their practices by offering innovative tools and features that enhance efficiency, improve patient care, and streamline daily operations. Our platform is designed to empower medical professionals by reducing administrative burdens and enabling seamless communication with patients.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><b>Own Communication Software ensuring security and encyption</b></p>
                            <p>CuraLink is committed to transforming the way doctors manage their practices by offering innovative tools and features that enhance efficiency, improve patient care, and streamline daily operations. Our platform is designed to empower medical professionals by reducing administrative burdens and enabling seamless communication with patients.</p>
                        </div>
                        <img src={LappyMan} alt="" />
                    </div>
                </div>
            </div>
            <div className="Contact-Cards">
                <div className="Discover-Services">
                    <h1>Discover Our Services</h1>
                    <p>We’re more than just a company – we’re your partner in success. Explore our diverse range of services designed to transform your goals into reality. From innovative solutions to expert guidance, we’re here to support you every step of the way</p>
                    <SecondaryButton text={"Explore services"} fontSize={"1em"} />
                    <h1 className="Heading-2">Are you a doctor?</h1>
                    <TertiaryButton text={"Join Us"} fontSize={"1em"}></TertiaryButton>
                </div>
                <div className="Get-In-Touch">
                    <h1>Get in Touch</h1>
                    <p>Have questions or ready to take the next step? Reach out to us and let’s discuss how we can help you achieve your goals. Our team is here to assist you with any inquiries or collaboration opportunities.</p>
                    <SecondaryButton text={"Contact Us"} fontSize={"1em"} />
                </div>
            </div>
        </div>
        </>
    )
}