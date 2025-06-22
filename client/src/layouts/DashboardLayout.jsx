import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import useWindowSize from '../contexts/useWindowSize'
import { useEffect, useRef } from 'react';
import './layouts.css';

export default function DashboardLayout() {
    const [ dashboardState, setDashboardState ] = useState('patient');
    const [showMenubar, setShowMenubar] = useState(false);
    const { width } = useWindowSize();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes('/doctor/dashboard')) {
            setDashboardState('doctor');
        }
    }, [])
    useEffect(() => {
        if (width > 992) {
            setShowMenubar(true);
        } else setShowMenubar(false);
    }, [width]);


    return (
        <>
            <div className="DashboardLayout" >
                <Sidebar showMenubar={showMenubar} setShowMenubar={setShowMenubar} dashboard={dashboardState} />
                <div className="outlet-wrapper">
                    <Outlet context={{ showMenubar, setShowMenubar }} />
                </div>
            </div>

        </>
    )
}
