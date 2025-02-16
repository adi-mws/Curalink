import React, { forwardRef } from "react";
import "./ScheduledAppointments.css";
import DashboardHeader from "../../../layout/DashboardHeader/DashboardHeader";
import VideoIcon from "../../../../assets/icons/videoTiny.png";
import AudioIcon from "../../../../assets/icons/callIcon.png";
import TertiaryButton from "../../../shared/buttons/TertiaryButton/TertiaryButton";
import { useOutletContext } from "react-router-dom";
import { useSideBarState } from '../../../contexts/SideBarStateContext';
import { useEffect } from "react";
const ScheduledAppointments = forwardRef(({ appointmentsState = 'all' }, ref) => {
  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState(`dash-${appointmentsState}-appointments`);
    return () => {
      setSideBarState('');
    }
  }, [appointmentsState]);

  const appointments = [
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Scheduled',
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      status: 'Completed',
      time: "09:30 AM",
      category: "General Healthcare",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      status: 'Completed',
      time: "09:30 AM",
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "audio",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "audio",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
        status: 'Completed',
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "video",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
      category: "General Healthcare",
      mode: "audio",
    },
    {
      doctorName: "Dr. Harsh Mehta",
      date: "04-01-2025",
      time: "09:30 AM",
      status: 'Completed',
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

  const items = [
    {
      text: "All Appointments",
      link: "/dashboard/appointments",
    },
    {
      text: "Scheduled Appointments",
      link: "/dashboard/appointments/scheduled",
    },
    {
      text: "Past Appointments",
      link: "/dashboard/appointments/past",
    },
  ];

  const { setShowMenubar, showMenubar } = useOutletContext();
  return (
    <div className="ScheduledAppointments">
      <DashboardHeader setShowMenubar={setShowMenubar}

        showMenubar={showMenubar}
        title={
          appointmentsState === "scheduled"
            ? "Scheduled Appointments"
            : appointmentsState === "past"
            ? "Past Appointments"
            : "All Appointments"
        }
        items={items}
      />

      <div className="appointments-container">
        <div className="grid-header">
          <span>Doctor Name</span>
          <span className="hideDate">Date</span>
          { appointmentsState === 'all' ?
            <span className="hideStatus">Status</span>
            :
            <span className="hideTime">Time</span>
          }
          <span className="hide-category">Category</span>
          <span className="Show-mode">Mode</span>
          <span>Action</span>
        </div>

        {appointments.map((appt, index) => (
          <div className="grid-row" key={index}>
            <span className="doctor-name">{appt?.doctorName}</span>

            <span className="hideDate ">{appt?.date}</span>
            {appointmentsState === 'all' ?
              <span className="hideStatus status">{appt?.status}</span>
              :
              <span className="hideTime time">{appt?.time}</span>
            }
            <span className="hide-category">{appt?.category}</span>
            <span className="icons">
              {appt.mode === "video" ? (
                <img src={VideoIcon} alt="video-icon" />
              ) : (
                <img src={AudioIcon} alt="audio-icon" />
              )}
            </span>
            <div className="DetailsButton">
              <TertiaryButton
                fontSize=".9em"
                text="View Details"
                width="100%"
                padding=".8em 0.5em"
                textWrap="nowrap"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ScheduledAppointments;