import React, { useEffect, useRef, useState } from 'react';
import './AnnouncementPage.css';
import { useSideBarState } from '../../contexts/SideBarStateContext.jsx';
import announcement_rectangle from '../../assets/imgs/Announcement-Page-Rectangle.png';
import announcement_speaker from '../../assets/imgs/Announcement-Page-Speaker.png';

export default function AnnouncementPage({ }) {
    const { setSideBarState } = useSideBarState();
    useEffect(() => {
        setSideBarState('announcements');
        return () => {
            setSideBarState('');
        }
    }, []);
    return (
        <>
            <div className="AnnouncementPage">
                <div className="Announcement-Hero-Section">
                    <div className="Announcement-Hero-Section-Content">
                        <h1>Stay Updated with the Latest Announcements</h1>
                        <p>Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!</p>
                        <img src={announcement_rectangle} alt="" />
                    </div>
                    <div className="Announcement-Hero-Section-Image">
                        <img src={announcement_speaker} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
} 