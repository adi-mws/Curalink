import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import logo from '../../../assets/logo/logo.png';
import CompleteYourProfile from '../../shared/adcards/CompleteYourProfile/CompleteYourProfile';
import essentials from '../../../assets/icons/3dcube.png';
import company from '../../../assets/icons/building.png';
import appointments from '../../../assets/icons/health.png';
import others from '../../../assets/icons/colorfilter.png';
import prescriptions from '../../../assets/icons/menu-board.png';
import legals from '../../../assets/icons/stickynote.png';
import cutIcon from '../../../assets/icons/cutIcon.png';
import useWindowSize from '../../../hooks/useWindowSize';
import { Link } from 'react-router-dom';
export default function Sidebar({ showMenubar = false, dashboard = false, setShowMenubar, hamBurgerRef = null }) {
    const sidebarRef = useRef(null);
    const { width } = useWindowSize();
    const [showCloseButton, setShowCloseButton] = useState(false);
    useEffect(() => {
        if (width < 992 && dashboard) {
            setShowCloseButton(true);
        } else setShowCloseButton(false);
    }, [width]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                hamBurgerRef.current &&
                !hamBurgerRef.current.contains(event.target)
            ) {
                setShowMenubar(false);
            }
        }

        if (showMenubar) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenubar]);

    return (
        <div ref={sidebarRef} className='Sidebar' style={{ transform: `${showMenubar ? 'translate(0px)' : 'translate(-400px)'}`, position: `${dashboard ? 'relative' : 'fixed'}`, transition: '.3s' }}>

            <div className="Logo-Cross">
                <img src={logo} alt="" className="Logo" />
                {dashboard && showCloseButton  ?
                    <div className="Cross" onClick={() => setShowMenubar(false)}><img src={cutIcon} alt="" /></div> : <></>}
            </div>
            {/* <div className="Complete-Your-Profile">
                <CompleteYourProfile />
            </div> */}
            <div className="Menu-Bar">
                <div>
                    <div>
                        <img src={essentials} alt="" />
                        <p>Essentials</p>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/faqs">FAQ's</Link></li>
                        <li><Link to="/support">Support</Link></li>
                    </ul>
                    <br />
                </div>
                <div>
                    <div>
                        <img src={appointments} alt="" />
                        <p>Appointments</p>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="/dashboard/appointments/schedule">Scheduled Appointments</Link></li>
                        <li><Link to="/dashboard/appointments/schedules">Schedules</Link></li>
                        <li><Link to="/dashboard/patients">Patients</Link></li>
                        <li><Link to="/dashboard/book-appointments">Book Appointments</Link></li>
                        <li><Link to="/dashboard/request-follow-up">Request Follow Up</Link></li>
                        <li><Link to="/dashboard/payments">Payments</Link></li>
                    </ul>
                    <br />
                </div>
                <div>
                    <div>
                        <img src={prescriptions} alt="" />
                        <p>Prescriptions</p>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="/dashboard/all-prescriptions">All Prescriptions</Link></li>
                        <li><Link to="/dashboard/active-prescriptions">Active Prescriptions</Link></li>
                        <li><Link to="/dashboard/dosage-tracker">Dosage Tracker</Link></li>
                    </ul>
                    <br />
                </div>
                <div>
                    <div>
                        <img src={company} alt="" />
                        <p>Company</p>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/announcements">Announcements</Link></li>
                    </ul>
                    <br />
                </div>
                <div>
                    <div>
                        <img src={others} alt="" />
                        <p>Others</p>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/daily-reads">Daily Reads</Link></li>
                        <li><Link to="/app-updates">App Updates</Link></li>
                    </ul>
                    <br />
                </div>
                <div>
                    <div>
                        <img src={legals} alt="" />
                        <p>Legals</p>
                    </div>
                    <br />
                    <ul>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms Of Service</Link></li>
                    </ul>
                    <br />
                </div>
            </div>
            <div className="Yellow-Card">
                <p>Now you can follow-up  to reschedule the appointment without booking a new one. Just follow-up again. Show the old data to doctors and many more!</p>
            </div>
        </div>
    )
}
