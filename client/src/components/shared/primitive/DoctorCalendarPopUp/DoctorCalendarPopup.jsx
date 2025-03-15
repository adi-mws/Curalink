import React from 'react'
import "./DoctorCalendarPopup.css";
import cutIcon from "../../../../assets/icons/cutIcon.png";
import TertiaryButton from "../../../shared/buttons/TertiaryButton/TertiaryButton"

const DoctorCalendarPopup = ({ showCalendarPopUp, setShowCalendarPopUp }) => {
    return (
        <div className='DoctorCalendarPopup' style={{
            opacity: showCalendarPopUp ? "1" : "0",
            transition: "all 0.3s ease-in-out",
            transform: showCalendarPopUp ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(0)",
            pointerEvents: showCalendarPopUp ? "auto" : "none"
        }}>

            <div className="calendar-heading">
                <p style={{ color: "var(--primary-color)", fontWeight: "bold", fontSize: "34px" }}>21 <span style={{ color: "grey" }}>JAN</span> 2025</p>
                <button onClick={() => { setShowCalendarPopUp(false) }}>
                    <img src={cutIcon} alt="cutIcon" />
                </button>
            </div>

            <div className="progressContainer">
                <div className="progressBar"></div>
            </div>

            <p className='Booking'><span style={{ color: "var(--primary-color)" }}>50%</span> Booked</p>

            <div className="container">
                <div className="appointments">
                    <p style={{ color: "var(--primary-color)" }}>45</p>
                    <p>Appointments</p>
                </div>
                <div className="scheduled">
                    <p style={{ color: "var(--primary-color)" }}>1h 21m</p>
                    <p>Schedule</p>
                </div>
                <div className="reports">
                    <p style={{ color: "var(--primary-color)" }}>10</p>
                    <p>Reports</p>
                </div>
            </div>

            <TertiaryButton text="View Day" />


        </div>
    )
}

export default DoctorCalendarPopup