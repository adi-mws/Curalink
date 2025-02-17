import React from 'react'
import "./PatientLanding.css"
import Calendar from '../../../shared/primitive/Calendar/Calendar'
import { useState, useEffect } from 'react'
export default function PatientLanding() {

  const [patientAppointments, setPatientAppointments] = useState({});
  const [bookingStatus, setBookingStatus] = useState([]);
  useEffect(() => {
    setPatientAppointments({
      appointments: [
        '2025-02-17',
        '2025-02-02',
        '2025-01-08',
        '2025-01-03',
        '2025-01-10',
      ],
      medications: [
        '2025-02-17',
        '2025-02-03',
        '2025-01-05',
        '2025-01-03',
        '2025-01-10',
      ]
    })
  }, [])

  useEffect(() => {
    setBookingStatus([
      {date: '2025-02-17', percentage: 90},
      {date: '2025-02-02', percentage: 50},
      {date: '2025-01-08', percentage: 20},
      {date: '2025-01-03', percentage: 10},
      {date: '2025-01-10', percentage: 0},
    ])
  }, [])

  

  return (
    <div className='PatientLanding'>
        <Calendar dashboard='doctor' patientAppointments={patientAppointments} bookingStatus={bookingStatus}  />
    </div>
  )
}
