import React, { useEffect, useState } from 'react';
import './AdminNotifications.css';
import '../admin.css';
import cutIcon from '../../../../assets/icons/cutIcon.png';
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/trash.png';
import searchIcon from '../../../../assets/icons/search-normal.png';
import truncateTextByLetter from '../../../../utils/textFormatter';
import AdminNotificationForm from '../forms/AdminNotificationForm/AdminNotificationForm';

export default function AdminNotifications() {
    const dummyNotifications = [
        { title: "System Maintenance", description: "Platform will be under maintenance on July 5th.", createdAt: "2025-06-25", recipient: "all_doctors" },
        { title: "New Feature Release", description: "We have launched a new appointment booking system.", createdAt: "2025-06-20", recipient: "all_patients" },
        { title: "Weekly Health Tips", description: "Check out our latest tips for staying healthy.", createdAt: "2025-06-18", recipient: "patient_individual", email: "patient1@example.com" },
        { title: "Account Security Update", description: "We’ve enhanced security measures to protect your data.", createdAt: "2025-06-15", recipient: "doctor_individual", email: "doctor1@example.com" },
        { title: "Feedback Request", description: "Your feedback helps us improve. Share your thoughts.", createdAt: "2025-06-10", recipient: "all_patients" },
    ];

    const [notifications, setNotifications] = useState([]);
    const [filteredNotifications, setFilteredNotifications] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedNotification, setSelectedNotification] = useState({});
    const [editData, setEditData] = useState({});
    const [showDetailsPopup, setShowDetailsPopup] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setNotifications(dummyNotifications);
        setFilteredNotifications(dummyNotifications);
    }, []);

    useEffect(() => {
        const query = searchQuery.toLowerCase();
        const filtered = notifications.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.createdAt.toLowerCase().includes(query)
        );
        setFilteredNotifications(filtered);
    }, [searchQuery, notifications]);

    const handleFormClose = (val) => {
        setShowForm(val);
        if (!val) {
            setEditMode(false);
            setEditData({});
        }
    };

    return (
        <div className='AdminNotifications admin-page'>
            <div className="notifications-header admin-page-header">
                <p className="header-title">Notifications</p>
                <div className="search-bar-wrapper">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder='Search Notifications'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className='search-submit-button'>
                        <img src={searchIcon} alt="search-icon" />
                    </button>
                </div>
                <div className="header-controls">
                    <button onClick={() => setShowForm(true)}>New Notification</button>
                </div>
            </div>

            <div className="notifications-body admin-page-body">
                {filteredNotifications.length === 0 ? (
                    <p>No Notifications Found</p>
                ) : (
                    filteredNotifications.map((notification, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedNotification(notification);
                                setShowDetailsPopup(true);
                            }}
                            className="notification-item"
                        >
                            <p className="notification-title">
                                {truncateTextByLetter(notification?.title, 16)}
                            </p>
                            <p className="notification-date">{notification.createdAt}</p>
                            <div className="notification-control admin-control">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setEditMode(true);
                                        setEditData(notification);
                                        setShowForm(true);
                                    }}
                                >
                                    <img src={editIcon} alt="edit-icon" />
                                </button>
                                <button onClick={(e) => e.stopPropagation()}>
                                    <img src={deleteIcon} alt="delete-icon" />
                                </button>
                            </div>
                        </div>
                    ))
                )}

                <div
                    className="notification-details admin-page-item-details"
                    style={{ display: showDetailsPopup ? 'flex' : 'none' }}
                >
                    <div className="head">
                        <p className="title">Notification Details</p>
                        <div className="notification-control control">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEditData(selectedNotification);
                                    setEditMode(true);
                                    setShowForm(true);
                                }}
                            >
                                <img src={editIcon} alt="edit-icon" />
                            </button>
                            <button>
                                <img src={deleteIcon} alt="delete-icon" />
                            </button>
                            <button
                                className='closebtn'
                                onClick={() => setShowDetailsPopup(false)}
                            >
                                <img src={cutIcon} alt="close-btn" />
                            </button>
                        </div>
                    </div>

                    <div className="body">
                        <div className="body-head">
                            <p className="notification-name">{selectedNotification.title}</p>
                        </div>
                        <p className="notification-description">{selectedNotification?.description}</p>
                        <p><strong>Recipient:</strong> {selectedNotification?.recipient}</p>
                        {selectedNotification?.email && (
                            <p><strong>Email:</strong> {selectedNotification.email}</p>
                        )}
                    </div>
                </div>
            </div>

            <AdminNotificationForm
                showForm={showForm}
                setShowForm={handleFormClose}
                editData={editData}
                editMode={editMode}
            />
        </div>
    );
}
