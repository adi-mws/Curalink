import React, { useState } from "react";
import "./UserNotification.css";
import cutIcon from "../../../../assets/icons/cutIcon.png";
import { forwardRef, useImperativeHandle } from "react";
const UserNotification = forwardRef(({ showNotification, setShowNotification }, ref) => {
  // API CALL TO GET NOTIFICATIONS
  const [notifications, setNotifications] = useState([
    { id: 1, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 2, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 3, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 4, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 5, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 6, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 7, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 8, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 9, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 10, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 11, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 12, title: "System Notification", description: "We have cleared the best certification organized by the government of India." },
    { id: 13, title: "System Notification", description: "We have cleared the best certification organized by the government of India." }

  ])

  useImperativeHandle(ref, () => ({
    notificationCount: notifications.length
  }))
  const [fadingNotifications, setFadingNotifications] = useState([]);


  const removeNotification = (id) => {
    setFadingNotifications((prev) => [...prev, id]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
      setFadingNotifications((prev) => prev.filter((fadeId) => fadeId !== id));
    }, 300); 

  }

  const clearAllNotifications = () => {
    // Add all notification IDs to fadingNotifications
    const allIds = notifications.map((notif) => notif.id);
    setFadingNotifications(allIds);
  
    setTimeout(() => {
      setNotifications([]);
      setFadingNotifications([]);
    }, 300); // Matches the CSS transition duration
  };
  

  return (
    <div className="UserNotification" ref={ref} style={{ right: `${showNotification ? "0" : "-100%"}`, transition: "right 0.3s ease-in-out" }}>
      <div className="notificationHead">
        <div className="text">
          <p>Notifications</p>
        </div>
        <div className="clearText">
          <p onClick={clearAllNotifications} className="clear-all">Clear All</p>
          <button onClick={() => setShowNotification(false)}><img src={cutIcon} alt="cutIcon" /></button>
        </div>
      </div>
      <div className="notification-container">
        {notifications.map((detail, index) => (
          <div
            className={`notification ${fadingNotifications.includes(detail.id) ? "fade-out" : ""}`}
            key={detail.id}
          >
            <div className="title">
              <p>{detail.title}</p>
              <p className="clear-btn" onClick={() => removeNotification(detail.id)}>Clear</p>
            </div>
            <p className="description">{detail.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
});
export default UserNotification;
