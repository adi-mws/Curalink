import React, { useState } from "react";
import "./CalendarPopUp.css";
import cutIcon from "../../assets/icons/cutIcon.png";
import videoIcon from "../../assets/icons/videoIcon.png";

const DoctorAppointment = ({ name, specialty, time, duration }) => (
  <div className="doctor-appointment">
    <div className="doctorName-image">
      <div className="doctorImage"></div>
      <div>
        <p>{name}</p>
        <p>{specialty}</p>
      </div>
    </div>
    <div className="doctorSchedule-icon">
      <div>
        <p>{time}</p>
        <p>{duration} (Duration)</p>
      </div>
      <div>
        <img src={videoIcon} alt="videoIcon" />
        <p>Video</p>
      </div>
    </div>
  </div>
);

const CalendarPopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <div className="CalendarPopUp">
      <div className="calendar-heading">
        <p style={{color: "var(--primary-color)", fontWeight: "bold", fontSize: "34px"}}>21 <span style={{color: "grey"}}>JAN</span> 2025</p>
        <button onClick={togglePopup}>
          <img src={cutIcon} alt="cutIcon" />
        </button>
      </div>

      <div className="CalendarAppointments">
        <p style={{ textAlign: "center" }}>Appointments</p>
        {[1, 2].map((_, index) => (
          <DoctorAppointment
            key={index}
            name="Dr. Rupali Sinha"
            specialty="General Healthcare"
            time="12:00 PM"
            duration="20 Mins"
          />
        ))}
      </div>
    </div>
  ) : null; // Return null when isOpen is false
};

export default CalendarPopUp;
