import React from "react";
import "./CalendarPopUp.css";
import cutIcon from "../../assets/icons/cutIcon.png";
import videoIcon from "../../assets/icons/videoIcon.png";

const MedicineCard = ({ name, dose, time }) => (
  <div className="medicine-card">
    <div className="checkbox"></div>
    <div>
      <p>
        {name} - {dose}
      </p>
      <p>{time}</p>
    </div>
  </div>
);

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
  return (
    <div className="CalendarPopUp">
      <div className="calendar-heading">
        <p>21 JAN 2025</p>
        <button>
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

      <div className="medicines-container">
        <p>Medicines To-Do</p>
        <div className="medicines-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <MedicineCard
              key={index}
              name="Acne Cream"
              dose="25"
              time="Before Breakfast"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPopUp;
