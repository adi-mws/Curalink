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

export default function Sidebar({ }) {
    const [data, setData] = useState(false);
    useEffect(() => {
        console.log("Hello!")
        sidebar.current.style.background = "white";
    }, [data])
    const sidebar = useRef(null);
    return (
        <div className='Sidebar' ref={sidebar}>
            <div className="Logo-Cross">
                <img src={logo} alt="" className="Logo"/>
                <div className="Cross">&#10005;</div>
            </div>
            <div className="Complete-Your-Profile">
                <CompleteYourProfile/>
            </div>
            <div className="Menu-Bar">
                <div>
                    <div>
                        <img src={essentials} alt="" />
                        <p>Essentials</p>
                    </div>
                    <ul>
                        <li>Login</li>
                        <li>Home</li>
                        <li>Dashboard</li>
                        <li>FAQ's</li>
                        <li>Support Fourm</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <img src={appointments} alt="" />
                        <p>Appointments</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={prescriptions} alt="" />
                        <p>Prescriptions</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={company} alt="" />
                        <p>Company</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={others} alt="" />
                        <p>Others</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={legals} alt="" />
                        <p>Legals</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
