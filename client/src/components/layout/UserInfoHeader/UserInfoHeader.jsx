import React, { useEffect } from "react";
import "./UserInfoHeader.css";
import notification from "../../../assets/icons/notification.png";
import circleImage from "../../../assets/imgs/circleImage.png";
import arrowDown from "../../../assets/icons/arrow-down.png";
import UserNotification from "../../shared/alerts/UserNotification/UserNotification";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useNotificationBarState } from "../../../contexts/NotificationBarContext";
import { useSideBar } from "../../../contexts/SideBarContext";
export default function UserInfoHeader({ dashboard = false }) {
  const { setShowSidebar } = useSideBar();
  const notificationRef = useRef(null);
  const [notificationCount, setNotificationCount] = useState(0);
  useEffect(() => {
    setNotificationCount(notificationRef.current?.notificationCount);
  }, [notificationRef.current?.notificationCount]);
  const { showNotificationBar, setShowNotificationBar } = useNotificationBarState();
  return (
    <div className="UserInfoHeader">
      <UserNotification ref={notificationRef} showNotification={showNotificationBar} setShowNotification={setShowNotificationBar} />
      <button className="header-container">
        <div className="notification-section" onClick={() => setShowNotificationBar(!showNotificationBar)}>
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
              {dashboard ?
                <>
                  <li className="dropdown-item dashboard"><Link onClick={() => setShowSidebar(false)} to="/">Home</Link></li>

                  <li className="dropdown-item"><Link to="/dashboard/support">Support</Link></li>
                </> :
                <>
                  <li className="dropdown-item"><Link to="/dashboard">Dashboard</Link></li>
                  <li className="dropdown-item"><Link to="/support">Support</Link></li>
                </>
              }
              <li className="dropdown-item"><a href="#">Settings</a></li>
              <li className="dropdown-item logout"><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </button>
    </div>
  );
}
