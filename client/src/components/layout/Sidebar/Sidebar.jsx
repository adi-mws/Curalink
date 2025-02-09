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
export default function Sidebar({ showMenubar = false, dashboard=false, setShowMenubar, hamBurgerRef = null }) {
    const sidebarRef = useRef(null);

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
        <div po ref={sidebarRef} className='Sidebar' style={{ transform: `${showMenubar ? 'translate(0px)' : 'translate(-400px)'}`, position: `${dashboard ? 'relative' : 'fixed'}`, transition: '.3s' }}>
            <div className="Logo-Cross">
                <img src={logo} alt="" className="Logo" />
                <div className="Cross"></div>
            </div>
            <div className="Complete-Your-Profile">
                <CompleteYourProfile />
            </div>
            <div className="Menu-Bar">
                <div>
                    <div>
                        <img src={essentials} alt="" />
                        <p>Essentials</p>
                    </div>
                    <br />
                    <ul>
                        <li>Login</li>
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>FAQ's</li>
                        <li>Support Fourm</li>
                        <li>Support</li>
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
                        <li>Scheduled Appointments</li>
                        <li>Schedules</li>
                        <li>Patients</li>
                        <li>Book Appointments</li>
                        <li>Request Follow Up</li>
                        <li>Payments</li>
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
                        <li>All Prescriptions</li>
                        <li>Active Prescriptions</li>
                        <li>Dosage Tracker</li>
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
                        <li>Events</li>
                        <li>Announcements</li>
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
                        <li>News</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Daily Reads</li>
                        <li>App Updates</li>
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
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
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
