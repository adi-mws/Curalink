import React, { useEffect, useState } from 'react'
import './AdminAnnouncements.css';
import '../admin.css'
import cutIcon from '../../../../assets/icons/cutIcon.png'
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/trash.png';
import searchIcon from '../../../../assets/icons/search-normal.png'
import truncateTextByLetter from '../../../../utils/textFormatter';
export default function AdminAnnouncements() {
    const announcement_items = [
        {
            title: "Introducing Video Consultations",
            content: "Patients can now connect with doctors via secure video calls directly within the Curalink platform.",
            createdAt: "2025-06-10",
            feature: true,
        },
        {
            title: "Health Tips Added Weekly",
            content: "Stay informed with our new weekly health tips section, curated by medical professionals.",
            createdAt: "2025-06-15",
            feature: false,
        },
        {
            title: "Prescription Upload Made Easy",
            content: "Upload and manage prescriptions in a more intuitive way with our new file handling upgrade.",
            createdAt: "2025-06-20",
            feature: true,
        },
        {
            title: "Maintenance Notice",
            content: "Curalink will be under scheduled maintenance on July 1st from 2 AM to 4 AM IST. We apologize for any inconvenience.",
            createdAt: "2025-06-25",
            feature: false,
        },
        {
            title: "Doctor Availability Calendar",
            content: "Doctors can now update and share their weekly availability with patients using our new calendar feature.",
            createdAt: "2025-06-22",
            feature: true,
        },
        {
            title: "Your Feedback Matters",
            content: "We’ve added a new feedback form to help us understand your experience and improve Curalink for everyone.",
            createdAt: "2025-06-18",
            feature: false,
        },
    ];

    const [selectedAnnouncement, setSelectedAnnouncement] = useState({});
    const [announcements, setAnnouncements] = useState([]);
    const [showDetailsPopup, setShowDetailsPopup] = useState(false);
    useEffect(() => {
        setAnnouncements(announcement_items);
    }, [])
    return (
        <div className='AdminAnnouncements admin-page'>
            <div className="annoucements-header admin-page-header">
                <p className="header-title">Annoucements</p>
                <div className="search-bar-wrapper">
                    <input type="text" className="search-bar" placeholder='Search Annoucements' />
                    <button className='search-submit-button'><img src={searchIcon} alt="search-icon" /></button>


                </div>
                <div className="header-controls">
                    <button>New Annoucement</button>
                </div>
            </div>
            <div className="announcements-body admin-page-body">
                {announcements.item === 0 ? <p>No Annoucements Available</p> : announcements.map((announcement, index) => (
                    <div key={index} onClick={() => { setSelectedAnnouncement(announcement); setShowDetailsPopup(true) }} className="announcement-item">
                        <p className="announcement-title">{truncateTextByLetter(announcement?.title, 16)}</p>
                        <p className="announcement-tag-wrapper" >
                            <span className="announcement-tag" style={{ background: `${announcement.feature ? '#d5d5e9' : '#bee9d0'}`, color: `${announcement?.feature ? '#39397e' : 'green'}` }}>{announcement?.feature ? 'Feature' : 'General'}</span></p>
                        <p className="annoucement-date">{announcement.createdAt}</p>
                        <div className="announcement-control">
                            <button><img src={editIcon} alt="edit-icon" /></button>
                            <button><img src={deleteIcon} alt="delete-icon" /></button>
                        </div>
                    </div>


                ))}

                <div className="announcement-details admin-page-item-details" style={{ display: `${showDetailsPopup ? 'flex' : 'none'}` }}>
                    <div className="head">
                        <p className="title">Announcement Details</p>
                        <div className="announcement-control control">
                                <button><img src={editIcon} alt="edit-icon" /></button>
                                <button><img src={deleteIcon} alt="delete-icon" /></button>
                                <button className='closebtn' onClick={() => setShowDetailsPopup(close)}><img src={cutIcon} alt="close-btn" /></button>

                            </div>
                    </div>

                    <div className="body">
                        <div className="body-head">
                            <p className="announcement-name">{selectedAnnouncement.title}</p>
                           

                            <span className="announcement-tag" style={{ background: `${selectedAnnouncement.feature ? '#d5d5e9' : '#bee9d0'}`, color: `${selectedAnnouncement?.feature ? '#39397e' : 'green'}` }}>{selectedAnnouncement?.feature ? 'Feature' : 'General'}</span>
                        </div>
                        <p className="announcement-content">{selectedAnnouncement?.content}</p>
                    </div>

                </div>
            </div>



        </div>
    )
}
