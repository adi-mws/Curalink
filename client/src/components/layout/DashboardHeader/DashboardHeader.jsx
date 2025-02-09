import UserInfoHeader from '../UserInfoHeader/UserInfoHeader';
import './DashboardHeader.css';

import React from 'react'

export default function DashboardHeader({ title, children }) {
    return (
        <div className='DashboardHeader'>
            <p className="dash-header-title">{title}</p>
            {children}
            <UserInfoHeader />
        </div>
    )
}
