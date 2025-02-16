import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
import './DashboardHeader.css';
import dropdownIcon from '../../../assets/icons/arrow-down.png'
import Hamburger from '../../shared/primitive/Hamburger/Hamburger';
import React, { useState, useRef, forwardRef } from 'react'
import useWindowSize from '../../../hooks/useWindowSize';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashboardHeader = forwardRef(({ title, children, items, setShowMenubar, showMenubar }, hamBurgerRef) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { width } = useWindowSize();
    const [showHamburger, setShowHamburger] = useState(false);
    const [showCloseButton, setShowCloseButton] = useState(false);

    useEffect(() => {
        if (width < 992) {
            setShowHamburger(true);
        } else setShowHamburger(false);
    }, [width]);

    return (
        <>
            <div className='DashboardHeader'>
                {showHamburger ?

                    <Hamburger onClick={() => setShowMenubar(!showMenubar)} setShowMenubar={setShowMenubar} showMenubar={showMenubar} />
                : <></>}
                {!items ?
                    <p className="dash-header-title">{title}</p>
                    :
                    <>
                        <div className="dash-header-title-wrapper">
                            <p className='dash-header-title' onClick={() => setShowDropdown(!showDropdown)}>{title} <img className='dash-header-title-dropdown-icon' src={dropdownIcon} alt="dropdown-icon" style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} /></p>
                            <ul className="dash-header-title-list" style={{ display: showDropdown ? 'flex' : 'none' }}>
                                
                                {items?.map((item, index) => {
                                    return <li key={index} className='dash-header-title-list-item-wrapper' >
                                        <Link className='dash-header-title-list-item' to={item.link} key={index}>{item.text}</Link>
                                    </li>
                                })}

                            </ul>
                        </div>
                    </>
                }
                {children}
                <UserInfoHeader dashboard={true} />

            </div>
        </>
    )
})

export default DashboardHeader;