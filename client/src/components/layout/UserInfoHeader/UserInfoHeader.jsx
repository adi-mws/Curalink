import React, { useState } from 'react';
import './UserInfoHeader.css';
import notification from "../../../assets/icons/notification.png"
import circleImage from "../../../assets/imgs/circleImage.png"
import arrowDown from "../../../assets/icons/arrow-down.png";

export default function UserInfoHeader() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='UserInfoHeader'>

      <button className="header-container">

        <div className="notification-section">
        <img src={notification} alt="bellIcon" />
        <span className="numberCircle">12</span>
        </div>

        <div className="profile-section">
          <img src={circleImage} alt="circleImage" />
          <span className='user-name'>Amit Kumar</span>
          <img src={arrowDown} alt="arrowDown" className={`dropdown-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}/>
        </div>

      </button>

      {
        isOpen && (
          <div className="dropdown-content">
            <ul>
              <li className="dropdown-item dashboard">Dashboard</li>
              <li className="dropdown-item">Support</li>
              <li className="dropdown-item">Settings</li>
              <li className="dropdown-item logout">Logout</li>
            </ul>
          </div>
        )
      }
    </div>
  )
}
