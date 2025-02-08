import React from "react";
import "./AppointmentAlert.css";
import cutIcon from "../../../assets/icons/cutIcon.png";
import videoIcon from "../../../assets/icons/videoIcon.png";
import doctorImage from "../../../assets/icons/doctor.png";
import patientImage from "../../../assets/icons/patient.png";
import SecondaryButton from "../../shared/buttons/SecondaryButton/SecondaryButton.jsx"

const AppointmentAlert = () => {
  return (
    <div className="AppointmentAlert">
      <div className="header">
        <p>Doctor has Started Appointment</p>
        <img src={cutIcon} alt="cutIcon" />
      </div>
      <div className="doctorName">
        <p>Dr. Piyush Singh</p>
        <p>General Healthcare</p>
      </div>
      <div className="videoCall">
        <img src={patientImage} alt="PatientImage" />
        <div className="video">
          <img src={videoIcon} alt="VideoIcon" />
          <p>Video Call</p>
        </div>
        <img src={doctorImage} alt="DoctorImage" />
      </div>
      <p style={{fontSize: "14px", color: "gray"}}>
        You can rejoin the appointment if you lost your network through
        appointments page
      </p>
      <SecondaryButton text="Join Now" />
    </div>

  );
};

export default AppointmentAlert;
