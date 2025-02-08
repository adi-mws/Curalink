import React from "react";
import "./UserInfoHeader.css";
import notification from "../../../assets/icons/notification.png";
import circleImage from "../../../assets/imgs/circleImage.png";
import arrowDown from "../../../assets/icons/arrow-down.png";

export default function UserInfoHeader() {
  return (
    <div className="UserInfoHeader">
      <button className="header-container">
        <div className="notification-section">
          <img src={notification} alt="bellIcon" />
          <span className="numberCircle">12</span>
        </div>

        <div className="profile-section">
          <img src={circleImage} alt="circleImage" />
          <span className="user-name">Amit Kumar</span>
          <img src={arrowDown} alt="arrowDown" className="dropdown-icon" />
          <div className="dropdown-content">
            <ul>
              <li className="dropdown-item dashboard"><a href="#">Dashboard</a></li>
              <li className="dropdown-item"><a href="#">Support</a></li>
              <li className="dropdown-item"><a href="#">Settings</a></li>
              <li className="dropdown-item logout"><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </button>
    </div>
  );
}
