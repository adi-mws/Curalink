import React, { useEffect } from "react";
import "./UserInfoHeader.css";
import notification from "../../../assets/icons/notification.png";
import circleImage from "../../../assets/imgs/circleImage.png";
import arrowDown from "../../../assets/icons/arrow-down.png";
import UserNotification from "../../shared/alerts/UserNotification/UserNotification";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function UserInfoHeader() {
  const [showNotification, setShowNotification] = useState(false);
  const notificationRef = useRef(null);
  const [notificationCount, setNotificationCount] = useState(0);
  useEffect(() => {
    setNotificationCount(notificationRef.current?.notificationCount);
  }, [notificationRef.current?.notificationCount]);

  return (
    <div className="UserInfoHeader">
      <UserNotification ref={notificationRef} showNotification={showNotification} setShowNotification={setShowNotification}/>
      <button className="header-container">
        <div className="notification-section" onClick={() => setShowNotification(!showNotification)}>
          <img src={notification} alt="bellIcon" />
          {notificationRef.current?.notificationCount > 0 && (
            <span className="numberCircle">{notificationCount}</span>
          )}
        </div>

        <div className="profile-section">
          <img src={circleImage} alt="circleImage" />
          <span className="user-name">Amit Kumar</span>
          <img src={arrowDown} alt="arrowDown" className="dropdown-icon" />
          <div className="dropdown-content">
            <ul>
              <li className="dropdown-item dashboard"><a href="#">Dashboard</a></li>
              <li className="dropdown-item"><Link to="/dashboard/support">Support</Link></li>
              <li className="dropdown-item"><a href="#">Settings</a></li>
              <li className="dropdown-item logout"><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </button>
    </div>
  );
}
