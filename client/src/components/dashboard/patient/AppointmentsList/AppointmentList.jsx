import React from 'react'
import './AppointmentList.css';
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader';
export default function AppointmentList() {
  return (
    <div className='AppointmentList'>
        <DashboardHeader title={"Scheduled Appointments"}/> 
    </div>
  )
}
