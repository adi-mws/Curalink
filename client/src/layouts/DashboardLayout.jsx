import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import './layouts.css';
export default function DashboardLayout() {
    const [showMenubar, setShowMeunbar] = useState(true);

    return (
        <>
            <div className="DashboardLayout">
                <Sidebar showMenubar={showMenubar} dashboard={true} />
                <div className="outlet-wrapper">
                    <Outlet />

                </div>
            </div>

        </>
    )
}
