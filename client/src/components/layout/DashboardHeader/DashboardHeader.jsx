import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
import './DashboardHeader.css';
import dropdownIcon from '../../../assets/icons/arrow-down.png';
import Hamburger from '../../shared/primitive/Hamburger/Hamburger';
import React, { useState, useEffect, forwardRef } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { Link } from 'react-router-dom';

const DashboardHeader = ({ title, children, items }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { width } = useWindowSize();
    const [showHamburger, setShowHamburger] = useState(false);


    useEffect(() => {
        setShowHamburger(width < 992);
    }, [width]);

    return (
        <div className="DashboardHeader">
            <div className="dashboard-header-left">

                {showHamburger && (

                    <Hamburger />

                )}
            </div>

            <div className="dashboard-header-middle">
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
                                    <Link className="dash-header-title-list-item" onClick={() => setShowDropdown(false)} to={item.link}>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {children}
            </div>
            <div className="dashboard-header-right">
                <UserInfoHeader dashboard={true} />
            </div>
        </div>
    );
};

export default DashboardHeader;
