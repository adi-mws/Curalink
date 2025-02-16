import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { useEffect, useRef } from 'react';
import './layouts.css';

export default function DashboardLayout() {
    const [showMenubar, setShowMenubar] = useState(false);
    const { width } = useWindowSize();
    useEffect(() => {
        if (width >  992) {
            setShowMenubar(true);
        } else setShowMenubar(false);
    }, [width]);
    
    return (
        <>
            <div className="DashboardLayout" >
                <Sidebar showMenubar={showMenubar} setShowMenubar={setShowMenubar} dashboard={true}  />
                <div className="outlet-wrapper">
                    <Outlet context={{ showMenubar, setShowMenubar }} />

                </div>
            </div>

        </>
    )
}
