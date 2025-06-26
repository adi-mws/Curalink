import {React, useState} from 'react'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader';
import './AppointmentPage.css'
import TertiaryButton from '../../../shared/buttons/TertiaryButton/TertiaryButton';
import CalanderIcon from '../../../../assets/icons/calendar.png'
import DownArrow from '../../../../assets/icons/arrow-down.png'
import Calendar from '../../../shared/primitive/Calendar/Calendar';

export default function AppointmentPage() {

  const [showAppointmentFilter, setShowAppointmentFilter] = useState(false);
  const [showShiftFilters, setShowShiftFilter] = useState(false);

  const AppointmentsToday = {
    TotalAppointments: 100,
    PendingAppointments:45
  }

  const circumference = AppointmentsToday.TotalAppointments;
  const offset = AppointmentsToday.PendingAppointments
  
  const appointments = [
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    },
    {
      name:"John Doe",
      category:"general Consultancy",
      start:"9:00 AM",
      end:"9:10 AM"
    }
  ]

  const shifts = [
    {
      shift:"1",
      start:"9:00",
      end:"10:15",
      status:"45",
    },
    {
      shift:"2",
      start:"9:00",
      end:"10:15",
      status:"56",
    },
    {
      shift:"3",
      start:"9:00",
      end:"10:15",
      status:"49",
    },
    {
      shift:"4",
      start:"9:00",
      end:"10:15",
      status:"68",
    },
    {
      shift:"5",
      start:"9:00",
      end:"10:15",
      status:"92",
    },    
  ]
  return (
    <div className="AppointmentPage">
      <DashboardHeader title="Appointments"/>
      <div className="Appointment-Page-Content">
        <div className="Hero-section">
          <div className="Appointments-Details">
            <div className="Todays-Appointments">
              <div className="Total-Appointments">
                <p>{AppointmentsToday.PendingAppointments}</p>
                <p style={{color:'var(--primary-color)', fontWeight:'bold'}}>Sun</p>
              </div>
              
              <svg 
                      width="150" 
                      height="150" 
                      viewBox="0 0 80 80"
                      style={{ "--final-offset": `${offset}px` }}
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="25"
                        fill="none"
                        stroke="#D9D9D9"
                        strokeWidth="15"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="25"
                        fill="none"
                        stroke="var(--primary-color)"
                        strokeWidth="15" 
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        transform="rotate(-90 40 40)"
                        className="progress-circle"
                      />
              </svg>
            </div>
            <div className="Date">
                <button><img style={{transform:"rotate(90deg)"}} src={DownArrow} alt="" /></button>
                <p>12th February 2025</p>
                <button><img style={{transform:"rotate(270deg)"}} src={DownArrow} alt="" /></button>
                <button><img src={CalanderIcon} alt="" /></button>
            </div>

            <div className="Pending-FollowUps">
              <p><b>15</b> follow Ups</p>
              <p><b>18</b> Reports Pending</p>
            </div>

            <div className="Total-Duration">
              <b>180 mins</b> <p>Today</p>
            </div>
          </div>
          <div className="Booking-Status">
            <p className="heading">Booking Status By shifts</p>
            <div className="Shift-Details">
              {shifts.map((shift,index) => (
                <div key={index} className="shift">
                  <p>Shift - {shift.shift}</p>
                  <div className="Progress-Bar">
                    <div style={{width:`${shift.status}%`}} className="Progress"></div>
                  </div>
                  <p>{shift.start} - {shift.end}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Appointments-Section">
          <div className="appointments-header">
            <div className="Appointment-Category">
              <p>All Appointment</p>
              <img onClick={() => {setShowAppointmentFilter(!showAppointmentFilter)}}
               className={showAppointmentFilter ? "rotated" : ""} src={DownArrow} alt="" />
            </div>
            <div className="Shift-Category">
              <p>Shift(All)</p>
              <img onClick={() => {setShowShiftFilter(!showShiftFilters)}}
              className={showShiftFilters ? "rotated" : ""} src={DownArrow} alt="" />
            </div>
          </div>
          {appointments.map((appointment,index) => (
            <div key={index} className="appointment">
              <div className="Name">{appointment.name}</div>
              <div className="category">{appointment.category}</div>
              <div className="duration">{appointment.start} - {appointment.end}</div>
              <div className="button"><TertiaryButton text="View Details"/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
