import React, { useEffect, useRef, useState } from 'react';
import './AnnouncementPage.css';
import { useSideBarState } from '../../contexts/SideBarStateContext.jsx';
import announcement_rectangle from '../../assets/imgs/Announcement-Page-Rectangle.png';
import announcement_rectangle_2 from '../../assets/imgs/Pink-Rectangle-2.png';
import announcement_speaker from '../../assets/imgs/Announcement-Page-Speaker.png';
import announcement_2nd_speaker from '../../assets/imgs/Announcement-Page-2nd-Speaker.png';
import arrow_down from "../../assets/icons/arrow-down.png";

export default function AnnouncementPage({ }) {
    const { setSideBarState } = useSideBarState();
    useEffect(() => {
        setSideBarState('announcements');
        return () => {
            setSideBarState('');
        }
    }, []);
    const recent_announcements = [
        {
            title: "Doctor Support Enhancement",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "New Patient",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "Patient V1.2 Version",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "New Patient",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "New Patient ",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        }
    ];
    const upcoming_features = [
        {
            title: "Doctor Support Enhancement",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "New Patient",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "New Patient",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        },
        {
            title: "New Patient ",
            description: "Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!",
            date: "Released on 12/02/2025"
        }
    ];
    const [moreAnnouncement,setMoreAnnouncement] = useState(false);
    return (
        <>
            <div className="AnnouncementPage">
                <div className="Announcement-Hero-Section">
                    <div className="Announcement-Hero-Section-Content">
                        <img src={announcement_2nd_speaker} alt="" className="nd-Speaker"/>
                        <h1>Stay Updated with the Latest Announcements</h1>
                        <p>Welcome to our announcements page, where we keep you informed about new features, important updates, and upcoming events. Stay tuned for the latest improvements designed to enhance your healthcare experience!</p>
                        <img src={announcement_rectangle} alt="" className="th-Image"/>
                        <img src={announcement_rectangle_2} alt="" className="rd-Image"/>
                    </div>
                    <img src={announcement_speaker} alt="" className="st-Speaker"/>
                </div>
                <div className="Announcement-Page-Recent-Announcements">
                    <p className="Recent-Annoucements-Heading">Recent Announcements</p>
                    <div className="Announcements-Container">
                        {
                            recent_announcements.slice(0,moreAnnouncement ? recent_announcements.length:2).map((announcement, index) => (
                                <div className="Announcements-Container-Cards">
                                    <h3>{announcement.title}</h3>
                                    <p>{announcement.description}</p>
                                    <p>{announcement.date}</p>
                                </div>
                            ))
                        }
                    </div>
                    <button className="View-More-Announcements" onClick={()=>setMoreAnnouncement(!moreAnnouncement)}>
                        <p>View More Announcements</p>
                        <img src={arrow_down}/>
                    </button>
                    <p className="Recent-Annoucements-Heading">Upcoming Features</p>
                    <div className="Announcements-Container">
                        {
                            upcoming_features.map((features, index) => (
                                <div className="Features-Container-Cards">
                                    <h3>{features.title}</h3>
                                    <p>{features.description}</p>
                                    <p>{features.date}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
} 