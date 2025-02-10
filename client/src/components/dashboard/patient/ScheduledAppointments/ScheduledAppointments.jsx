import React from "react";
import "./ScheduledAppointments.css";
import DashboardHeader from "../../../layout/DashboardHeader/DashboardHeader";
import VideoIcon from "../../../../assets/icons/videoTiny.png";
import AudioIcon from "../../../../assets/icons/callIcon.png";
import TertiaryButton from "../../../shared/buttons/TertiaryButton/TertiaryButton";

export default function ScheduledAppointments() {
  const appointments = [
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "audio",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "audio",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "audio",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "audio",
    },
  ];

  return (
    <div className="ScheduledAppointments">
      <DashboardHeader title={"Scheduled Appointments"} />

      <div className="appointments-container">
        <div className="grid-header">
          <span>Doctor Name</span>
          <span className="hideDate">Date</span>
          <span className="hideTime">Time</span>
          <span className="hide-category">Category</span>
          <span className="Show-mode">Mode</span>
          <span>Action</span>
        </div>

        {appointments.map((appt, index) => (
          <div className="grid-row" key={index}>
            <span className="doctor-name">{appt.doctorName}</span>
            <span className="hideDate">{appt.date}</span>
            <span className="hideTime">{appt.time}</span>
            <span className="hide-category">{appt.category}</span>
            <span className="icons">
              {appt.mode === "video" ? (
                <img src={VideoIcon} alt="video-icon" />
              ) : (
                <img src={AudioIcon} alt="audio-icon" />
              )}
            </span>
            <div className="DetailsButton">
              <TertiaryButton text="View Details" width="100%" padding="1em 0.5em" textWrap="nowrap"/>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
}