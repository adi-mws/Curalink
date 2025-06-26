import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import down from "../../../assets/icons/arrow-down.png";
import SecondaryButton from '../../shared/buttons/SecondaryButton/SecondaryButton';
import PrimaryButton from '../../shared/buttons/PrimaryButton/PrimaryButton';
import { Link, useNavigate } from 'react-router-dom';
import useWindowSize from '../../../contexts/useWindowSize';
import Hamburger from '../../shared/primitive/Hamburger/Hamburger';
import Sidebar from '../Sidebar/Sidebar';
import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
export default function Header({ }) {
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const [showMenubar, setShowMenubar] = useState(false);
    const [showHamburger, setShowHamburger] = useState(false);

    const hamBurgerRef = useRef(null);
    useEffect(() => {
        if (width <= 992) {
            setShowHamburger(true);
        } else setShowHamburger(false);
    }, [width]);

    return (
        <>

            <Sidebar hamBurgerRef={hamBurgerRef} showMenubar={showMenubar} setShowMenubar={setShowMenubar} />
            <div className='Header-relative'></div>
            <header className='Header' >
                {showHamburger ?
                    <Hamburger isCross={showMenubar} ref={hamBurgerRef} onClick={() => setShowMenubar(!showMenubar)} /> : <></>
                }
                <div className="Logo" onClick={() => { navigate('/') }}><img src='/imgs/logo/logo.png' alt="" /></div>
                <div className="nav-bar">
                    <div><Link to="/">Home</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/services">Services</Link></div>
                    {/* <div className="services">
                        <Link className="services-dropdown" to="/services">Services</Link><img src={down} alt="" className="down-arrow" />
                        <div className="services-content">
                            <Link id="service1" to="">Service 1</Link>
                            <Link to="#">Service 2</Link>
                        </div>
                    </div> */}
                    <div><Link to="/news">News</Link></div>
                    <div><Link to="/support">Support</Link></div>
                </div>
                <div className="auth-buttons">
                    <div className="login-btn">
                        <SecondaryButton text={"Login"} onClick={() => { navigate('/login') }} fontSize={"1em"} />
                    </div>
                    <div className="register-btn">
                        <PrimaryButton text={"Register"} onClick={() => { navigate('/registration') }} fontSize={"1em"} />
                    </div>
                </div>
                {/* <UserInfoHeader /> */}
            </header>
        </>
    )
}