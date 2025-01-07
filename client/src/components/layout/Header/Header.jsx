import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import logo from "../../../assets/logo/logo.png";
import down from "../../../assets/icons/arrow-down.png"
import SecondaryButton from '../../shared/buttons/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton';

export default function Header({ }) {
    const [data, setData] = useState(false);
    useEffect(() => {
        console.log("hello ")
        header.current.style.background = "white";

    }, [data])
    const header = useRef(null);
    return (
        <div className='Header' ref={header}>
            <div className="ham-burger"></div>
            <div className="Logo" ><img src={logo} alt="" /></div>
            <div className="nav-bar">
                <div><a href="#">Home</a></div>
                <div><a href="#">About</a></div>
                <div className="services">
                    <a className="services-dropdown" href="#">Services</a><img src={down} alt="" className="down-arrow" />
                    <div className="services-content">
                        <a id="service1" href="#">Service 1</a>
                        <a href="#">Service 2</a>
                    </div>
                </div>
                <div><a href="#">News</a></div>
            </div>
            <div className="auth-buttons">
                <div>
                    <SecondaryButton text={"Login"} fontSize={"1em"} />
                </div>
                <div>
                    <PrimaryButton text={"Register"} fontSize={"1em"} />
                </div>
            </div>
        </div>
    )
}