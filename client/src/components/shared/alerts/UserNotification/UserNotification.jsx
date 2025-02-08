import React, { useState } from "react";
import "./UserNotification.css";
import cutIcon from "../../../../assets/icons/cutIcon.png";

const UserNotification = () => {

  const [notifications, setNotifications] = useState([
    {id: 1, title: "System Notification", description: "We have cleared the best certification organized by the government of India."},
    {id: 2, title: "System Notification", description: "We have cleared the best certification organized by the government of India."},
    {id: 3, title: "System Notification", description: "We have cleared the best certification organized by the government of India."},
    {id: 4, title: "System Notification", description: "We have cleared the best certification organized by the government of India."},
    {id: 5, title: "System Notification", description: "We have cleared the best certification organized by the government of India."}

  ])

  const removeNotification = (id) => {
    const element = document.getElementById(`notification-${id}`);
    if(element){
      element.classList.add("fade-out");
      setTimeout(() => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id))
      }, 300);
    }
  }

  const clearAllNotifications = () => {
    document.querySelectorAll(".notification").forEach((element) => {
      element.classList.add("fade-out");
    })
    setTimeout(() => {
      setNotifications([]);
    }, 300);
  }

  return (
    <div className="UserNotification">
      <div className="notificationHead">
        <div className="text">
          <p>Notifications</p>
        </div>
        <div className="clearText">
          <p onClick={clearAllNotifications}>Clear All</p>
          <img src={cutIcon} alt="cutIcon" />
        </div>
      </div>

      {notifications.map((detail, Props) => (
        <div className="notification" key={Props} id={`notification-${detail.id}`}>
          <div className="title">
            <p>{detail.title}</p>
            <p className="clear-btn" onClick={() => removeNotification(detail.id)}>Clear</p>
          </div>
          <p className="description">{detail.description}</p>
        </div>
      ))}

    </div>
  );
};

export default UserNotification;
