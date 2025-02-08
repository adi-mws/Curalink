import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import logo from "../../../assets/logo/logo.png";
import down from "../../../assets/icons/arrow-down.png";
import SecondaryButton from '../../shared/buttons/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton';
import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
import { Link, useNavigate } from 'react-router-dom';

export default function Header({ }) {
    const navigate = useNavigate();
    return (
        <>
            <div className='Header-relative'></div>
            <header className='Header' >
                <div className="ham-burger">
                    &#9776;
                </div>
                <div className="Logo" ><img src={logo} alt="" /></div>
                <div className="nav-bar">
                    <div><Link to="/">Home</Link></div> 
                    <div><Link to="/about">About</Link></div>
                    <div className="services">
                        <Link className="services-dropdown" to="/services">Services</Link><img src={down} alt="" className="down-arrow" />
                        <div className="services-content">
                            <Link id="service1" to="">Service 1</Link>
                            <Link to="#">Service 2</Link>
                        </div>
                    </div>
                    <div><Link to="/news">News</Link></div>
                </div>
                <div className="auth-buttons">
                    <div className="login-btn">
                        <SecondaryButton text={"Login"} onClick={() => {navigate('/login')}} fontSize={"1em"} />
                    </div>
                    <div className="register-btn">
                        <PrimaryButton text={"Register"} onclick={() =>{navigate('/register')} } fontSize={"1em"} />
                    </div>
                </div>
                {/* <UserInfoHeader /> */}
            </header>
        </>
    )
}