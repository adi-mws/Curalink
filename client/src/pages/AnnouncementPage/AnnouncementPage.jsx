import React, { useEffect, useRef, useState } from 'react';
import './AboutPage.css';
import { useSideBarState } from '../../components/contexts/SideBarStateContext.jsx';

export default function AnnouncementPage({ }) {
    const { setSideBarState } = useSideBarState();
    useEffect(() => {
        setSideBarState('announcement');
        return () => {
            setSideBarState('');
        }
    }, []);
    return (
        <>
            <div className="AnnouncementPage">
                <div className="Announcement-Hero-Section">

                </div>
            </div>
        </>
    )
} 