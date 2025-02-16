import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
import './DashboardHeader.css';
import dropdownIcon from '../../../assets/icons/arrow-down.png';
import Hamburger from '../../shared/primitive/Hamburger/Hamburger';
import React, { useState, useEffect, forwardRef } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { Link } from 'react-router-dom';

const DashboardHeader = forwardRef(({ title, children, items, setShowMenubar, showMenubar }, hamBurgerRef) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { width } = useWindowSize();
    const [showHamburger, setShowHamburger] = useState(false);

    useEffect(() => {
        setShowHamburger(width < 992);
    }, [width]);

    return (
        <div className="DashboardHeader">
            {showHamburger && (
                <Hamburger onClick={() => setShowMenubar(!showMenubar)} setShowMenubar={setShowMenubar} showMenubar={showMenubar} />
            )}
            
            {!items ? (
                <p className="dash-header-title">{title}</p>
            ) : (
                <div className="dash-header-title-wrapper">
                    <p className="dash-header-title" onClick={() => setShowDropdown(!showDropdown)}>
                        {title} 
                        <img
                            className="dash-header-title-dropdown-icon"
                            src={dropdownIcon}
                            alt="dropdown-icon"
                            style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                    </p>
                    <ul className="dash-header-title-list" style={{ display: showDropdown ? 'flex' : 'none' }}>
                        {items?.map((item, index) => (
                            <li className="dash-header-title-list-item-wrapper" key={index}>
                                <Link className="dash-header-title-list-item" to={item.link}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

<<<<<<< HEAD
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
=======
            {children}
            <UserInfoHeader />
        </div>
    );
});

export default DashboardHeader;
>>>>>>> e94169ed958bc0677181ecee6e8001feb5905a5d
