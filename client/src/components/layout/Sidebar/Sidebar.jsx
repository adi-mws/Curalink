import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import CompleteYourProfile from '../../shared/adcards/CompleteYourProfile/CompleteYourProfile';
import essentials from '../../../assets/icons/3dcube.png';
import company from '../../../assets/icons/building.png';
import appointments from '../../../assets/icons/health.png';
import others from '../../../assets/icons/colorfilter.png';
import prescriptions from '../../../assets/icons/menu-board.png';
import legals from '../../../assets/icons/stickynote.png';
import cutIcon from '../../../assets/icons/cutIcon.png';
import useWindowSize from '../../../contexts/useWindowSize.jsx';
import { Link } from 'react-router-dom';
import { useSideBar } from '../../../contexts/SideBarContext.jsx';
import { useSideBarState } from '../../../contexts/SideBarStateContext.jsx';

// Two in one component (Patient Dashboard and Doctor Dashboard)
export default function Sidebar({ dashboard = null, hamBurgerRef = null }) {
    const sidebarRef = useRef(null);
    const { width } = useWindowSize();
    const { sideBarState, setSideBarState } = useSideBarState();
    const [showCloseButton, setShowCloseButton] = useState(false);
    const { showSidebar, setShowSidebar } = useSideBar();

    useEffect(() => {
        if (dashboard) {
            if (dashboard === 'patient') {
                setSideBarState('patient');
            } else if (dashboard === 'doctor') {
                setSideBarState('doctor');
            } else {
                setSideBarState('home');
            }
        }
    }, [dashboard]);
    useEffect(() => {
        if (width < 992 && dashboard) {
            setShowCloseButton(true);
            setShowSidebar(false);
        } else if (width > 992 && dashboard) {
            setShowCloseButton(false);
            setShowSidebar(true);
        }
    }, [width]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current &&
                !sidebarRef.current?.contains(event.target) &&
                hamBurgerRef?.current &&
                !hamBurgerRef.current?.contains(event.target)
            ) {
                setShowSidebar(false);
            }
        }

        if (showSidebar) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSidebar]);

    return (
        <div ref={sidebarRef} className='Sidebar' style={{ transform: `${showSidebar ? 'translate(0px)' : 'translate(-400px)'}`, position: `${dashboard ? 'relative' : 'fixed'}`, transition: '.3s' }}>

            <div className="Logo-Cross">
                <img src='/imgs/logo/logo.png' alt="" className="Logo" />
                {dashboard && showCloseButton ?
                    <div className="Cross" onClick={() => setShowSidebar(false)}><img src={cutIcon} alt="" /></div> : <></>}
            </div>
            {/* <div className="Complete-Your-Profile">
                <CompleteYourProfile />
            </div> */}
            <div className="Menu-Bar">
                <div className='menu-bar-category'>
                    <div>
                        <img src={essentials} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <br />
                    <ul className='menu-bar-list'>
                        <li><Link to={dashboard == 'doctor' ? '/doctor/dashboard' : '/dashboard'} className={sideBarState === 'dash-patient-landing' || sideBarState === 'dash-doctor-landing' ? 'active' : ''}>Dashboard</Link></li>
                        <li><Link to={dashboard == 'doctor' ? '/doctor/dashboard/account-details' : '/dashboard/account-details'} className={sideBarState === 'dash-patient-account-details' || sideBarState === 'dash-doctor-account-details' ? 'active' : ''}>Your Account</Link></li>
                        <li><Link to={dashboard == 'doctor' ? '/doctor/dashboard/support' : '/dashboard/support'} className={sideBarState === 'dash-support' ? 'active' : ''}>Support</Link></li>
                        <li><Link to={dashboard == 'doctor' ? '/doctor/dashboard/earnings' : '/dashboard/payments'} className={sideBarState === 'dash-patient-payments' || sideBarState === 'dash-doctor-earnings' ? 'active' : ''}>{dashboard == 'doctor' ? 'Earnings' : 'Payments'}</Link></li>

                    </ul>
                    <br />
                </div>
                {!dashboard && <div className='menu-bar-category'>
                    <div>
                        <img src={essentials} alt="" />
                        <p>Essentials</p>
                    </div>
                    <br />
                    <ul className='menu-bar-list'>
                        <li><Link to="/login" className={sideBarState === 'login' ? 'active' : ''}>Login</Link></li>
                        <li><Link to="/" onClick={() => { setShowSidebar(false) }} className={sideBarState === 'home' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/dashboard" className={sideBarState === 'dash-patient-landing' || sideBarState === 'dash-doctor-landing' ? 'active' : ''}>Dashboard</Link></li>
                        <li><Link to="/faqs" onClick={() => { setShowSidebar(false) }} className={sideBarState === 'faqs' ? 'active' : ''}>FAQ's</Link></li>
                        <li><Link to="/support" className={sideBarState === 'support' ? 'active' : ''}>Support</Link></li>
                    </ul>
                    <br />
                </div>}




                {/* Appointments part for patients */}
                {dashboard && dashboard == 'patient' ?
                    <div className='menu-bar-category'>

                        <div>
                            <img src={appointments} alt="" />
                            <p>Appointments</p>
                        </div>
                        <br />
                        <ul className='menu-bar-list'>
                            <li><Link to="/dashboard/appointments/" className={sideBarState === 'dash-all-appointments' ? 'active' : ''}>Appointments</Link></li>
                            <li><Link to="/dashboard/prescriptions" className={sideBarState === 'dash-prescriptions' ? 'active' : ''}>Prescriptions</Link></li>
                            <li><Link to="/dashboard/book-appointment" className={sideBarState === 'book-appointment' ? 'active' : ''}>Book Appointment</Link></li>
                            <li><Link to="/dashboard/request-follow-up" className={sideBarState === 'request-follow-up' ? 'active' : ''}>Request Follow Up</Link></li>
                            <li><Link to="/dashboard/payments" className={sideBarState === 'payments' ? 'active' : ''}>Payments</Link></li>
                        </ul>
                        <br />
                    </div>
                    : <></>}


                {dashboard && dashboard == 'doctor' ?
                    <div className='menu-bar-category'>

                        <div>
                            <img src={appointments} alt="" />
                            <p>Appointments</p>
                        </div>
                        <br />
                        <ul className='menu-bar-list'>
                            <li><Link to="/doctor/dashboard/appointments/" className={sideBarState === 'dash-all-appointments' ? 'active' : ''}>Appointments</Link></li>
                            <li><Link to="/doctor/dashboard/prescriptions" className={sideBarState === 'dash-prescriptions' ? 'active' : ''}>Prescriptions</Link></li>
                        </ul>
                        <br />
                    </div>
                    : <></>}


                <div className='menu-bar-category'>
                    <div>
                        <img src={company} alt="" />
                        <p>Company</p>
                    </div>
                    <br />
                    <ul className='menu-bar-list'>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link onClick={() => {setShowSidebar(false)}} to="/announcements">Announcements</Link></li>
                    </ul>
                    <br />
                </div>
                <div className='menu-bar-category'>
                    <div>
                        <img src={others} alt="" />
                        <p>Others</p>
                    </div>
                    <br />
                    <ul className='menu-bar-list'>
                        <li><Link onClick={() => { setShowSidebar(false) }} to="/news">News</Link></li>
                        <li><Link onClick={() => { setShowSidebar(false) }} to="/contact-us">Contact Us</Link></li>
                        <li><Link onClick={() => { setShowSidebar(false) }} to="/about-us">About Us</Link></li>
                        <li><Link onClick={() => { setShowSidebar(false) }} to="/announcements">Announcements</Link></li>
                    </ul>
                    <br />
                </div>
                <div className='menu-bar-category'>
                    <div>
                        <img src={legals} alt="" />
                        <p>Legals</p>
                    </div>
                    <br />
                    <ul className='menu-bar-list'>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms Of Service</Link></li>
                    </ul>
                    <br />
                </div>
            </div>
            <div className="Yellow-Card">
                <p>Now you can follow-up  to reschedule the appointment without booking a new one. Just follow-up again. Show the old data to doctors and many more!</p>
            </div>
        </div >
    )
}


/* 
Menu bar state Information

The components inside the dashboard uses 'dash-' as a prefix as their state name.
Others have the similar name as their component name.






*/
