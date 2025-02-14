import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
import './DashboardHeader.css';
import dropdownIcon from '../../../assets/icons/arrow-down.png'

import React, { useState } from 'react'

export default function DashboardHeader({ title, children, items }) {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <>
                
        
        <div className='DashboardHeader'>
            {!items ?
                <p className="dash-header-title">{title}</p>
                :
                <>
                    <div className="dash-header-title-wrapper">
                        <p className='dash-header-title' onClick={() => setShowDropdown(!showDropdown)}>{title} <img className='dash-header-title-dropdown-icon' src={dropdownIcon} alt="dropdown-icon" style={{ transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} /></p>
                        <ul className="dash-header-title-list" style={{ display: showDropdown ? 'flex' : 'none' }}>

                            {items?.map((item, index) => {
                                return <li className='dash-header-title-list-item-wrapper' >
                                    <a className='dash-header-title-list-item' href={item.link} key={index}>{item.text}</a>
                                </li>
                            })}

                        </ul>
                    </div>
                </>
            }
            {children}  
                < UserInfoHeader />
            </div>
        </>
    )
}
