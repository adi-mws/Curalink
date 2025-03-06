import React, { useEffect, useState } from "react";
import "./PatientCalendarPopUp.css";
import cutIcon from "../../../../assets/icons/cutIcon.png";
import videoIcon from "../../../../assets/icons/videoIcon.png";

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

const PatientCalendarPopUp = ({ selectedDate, showCalendarPopUp, setShowCalendarPopUp }) => {
  const appointments = [
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },
    {
      name: "Dr. Rupali Sinha",
      specialty: "General Healthcare",
      time: "12:00 PM",
      duration: "20 Mins",
    },





  ];


  useEffect(() => {
    console.log("Aditya");

  }, []);
  const closePopup = () => {
    setShowCalendarPopUp(false);
  };

  return setShowCalendarPopUp ? (
    <div className="PatientCalendarPopUp" style={{
      opacity: showCalendarPopUp ? "1" : "0",
      transition: "all 0.3s ease-in-out",
      transform: showCalendarPopUp ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)",
      pointerEvents: showCalendarPopUp ? "auto" : "none"
    }}>
      <div className="calendar-heading">
        <p style={{ color: "var(--primary-color)", fontWeight: "bold", fontSize: "34px" }}>21 <span style={{ color: "grey" }}>JAN</span> 2025</p>
        <button onClick={closePopup}>
          <img src={cutIcon} alt="cutIcon" />
        </button>
      </div>

      <div className="CalendarAppointments">
        <p style={{ textAlign: "center" }} className="CalendarAppointments-heading">Appointments</p>
          {appointments.map((appointment, index) => (
            <DoctorAppointment
              key={index}
              name={appointment.name}
              specialty={appointment.specialty}
              time={appointment.time}
              duration={appointment.duration}
            />
          ))}
      </div>
    </div>
  ) : null; // Return null when setshowCalendarPopUp is false
};

export default PatientCalendarPopUp;
