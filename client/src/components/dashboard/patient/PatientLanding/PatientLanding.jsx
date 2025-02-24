import React from 'react'
import "./PatientLanding.css"
import Calendar from '../../../shared/primitive/Calendar/Calendar'
import { useState, useEffect } from 'react'
import patientPfp from '../../../../assets/imgs/patient-pfp.jpg'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader'
import SecondaryButton from '../../../shared/buttons/SecondaryButton/SecondaryButton'
import bookAppointmentIcon from '../../../../assets/icons/book-appointment.png'
import searchDoctorsIcon from '../../../../assets/icons/search-doctors.png'
import requestFollowUpIcon from '../../../../assets/icons/request-followup.png'
import viewAppointmentsIcon from '../../../../assets/icons/view-appointments.png'
import { useSideBarState } from '../../../contexts/SideBarStateContext'
import PrimaryButton from '../../../shared/buttons/PrimaryButton/PrimaryButton'
import { useNavigate } from 'react-router-dom'
export default function PatientLanding() {

  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState(`dash-patient-landing`);
    return () => {
      setSideBarState('');
    }
  }, []);

  const navigate = useNavigate();

  const [patientAppointments, setPatientAppointments] = useState({});
  const [bookingStatus, setBookingStatus] = useState([]);
  const [activePrescriptions, setActivePrescriptions] = useState([]);
  const [recentAppointments, setRecentAppointments] = useState([]);
  const [showMenubar, setShowMenubar] = useState(false);
  const medicationData = [
    { date: '2024-02-17', totalDosage: 20, completedDosage: 20 },
    { date: '2024-02-16', totalDosage: 20, completedDosage: 15 },
    { date: '2024-01-15', totalDosage: 20, completedDosage: 10 },
    { date: '2024-01-07', totalDosage: 20, completedDosage: 5 },
    { date: '2024-01-06', totalDosage: 20, completedDosage: 30 },
    { date: '2024-01-05', totalDosage: 20, completedDosage: 20 },
    { date: '2024-01-04', totalDosage: 20, completedDosage: 18 },
  ];

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
      { date: '2025-02-17', percentage: 90 },
      { date: '2025-02-02', percentage: 50 },
      { date: '2025-01-08', percentage: 20 },
      { date: '2025-01-03', percentage: 10 },
      { date: '2025-01-10', percentage: 0 },
    ])

    setActivePrescriptions([
      { name: 'General Consultancy', doctor: 'Dr. John Doe', date: '2025-02-17', totalDuration: '14 days' },
      { name: 'General Consultancy', doctor: 'Dr. John Doe', date: '2025-02-17', totalDuration: '14 days' },
      { name: 'General Consultancy', doctor: 'Dr. John Doe', date: '2025-02-11', totalDuration: '14 days' },
    ])

    setRecentAppointments([
      { doctorName: 'Dr. Harsh Mehta', date: '2025-02-17', status: 'Scheduled' },
      { doctorName: 'Dr. Harsh Mehta', date: '2025-02-17', status: 'Scheduled' },
      { doctorName: 'Dr. Harsh Mehta', date: '2025-02-17', status: 'Completed' },
      { doctorName: 'Dr. Harsh Mehta', date: '2025-02-17', status: 'Scheduled' },

    ])
  }, [])

  const calculateRemainingDays = (prescriptionDate, totalDuration) => {
    const startDate = new Date(prescriptionDate);
    const currentDate = new Date();
    const durationDays = parseInt(totalDuration);

    // Calculate days elapsed since prescription start
    const daysElapsed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    // Calculate remaining days
    const remainingDays = durationDays - daysElapsed;
    return Math.max(0, remainingDays); // Ensure we don't return negative days
  };

  const calculateProgress = (remainingDays, totalDays) => {
    const progress = (remainingDays / totalDays) * 100;
    return Math.max(0, Math.min(100, progress)); // Ensure progress is between 0 and 100
  };

  return (
    <div className='PatientLanding'>
      <DashboardHeader title='Good Morning'/>
      <div className='PatientLandingContent'>
        <div className="patient-landing-hero">
          <div className='patient-landing-profile-section'>
            <div className="patient-profile">
              <div className="patient-profile-avatar">
                <img src={patientPfp} alt="" />
              </div>
              <div className="patient-profile-details">
                <div className="patient-profile-name">Anisha Singh</div>
                <div className="patient-profile-gender">Female</div>
                <div className="patient-profile-age">20 years old</div>
                <SecondaryButton text='Edit Profile' padding='.7em 3em' />
              </div>

            </div>
            <div className='patient-landing-redirections'>
              <button id='book-appointment'><img src={bookAppointmentIcon} alt="" /><span>Book Appointment</span></button>
              <button id='view-appointments' onClick={() => {navigate('/dashboard/appointments')}}><img src={viewAppointmentsIcon} alt="" /><span>View Appointments</span></button>
              <button id='search-doctors'><img src={searchDoctorsIcon} alt="" /><span>Search Doctors</span></button>
              <button id='request-follow-up'><img src={requestFollowUpIcon} alt="" /><span>Request Follow Up</span></button>
            </div>
          </div>

          <Calendar dashboard='patient' patientAppointments={patientAppointments} bookingStatus={bookingStatus} />
        </div>
        <div className="active-prescription-section">
          <div className="main-heading">
            <p className="main-heading-title">
              Active Prescriptions
            </p>
          </div>
          <div className="prescription-container">
            {activePrescriptions.map((prescription, index) => {
              const totalDays = parseInt(prescription.totalDuration);
              const remainingDays = calculateRemainingDays(prescription.date, totalDays);
              const progress = calculateProgress(remainingDays, totalDays);
              const circumference = 2 * Math.PI * 25; // 2πr where r=25
              const offset = circumference - (progress / 100) * circumference;

              return (
                <div className="prescription-card" key={index}>
                  <div>
                    <p>{prescription.name}</p>
                    <p>{prescription.doctor}</p>
                    <SecondaryButton text={'View Details'} padding='.8em 3em' />
                  </div>

                  <div className="prescription-duration">
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
                    <p className='duration-tooltip'>{remainingDays} days left</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="recent-appointments-section">
            <div className="recent-appointments-section-heading">
              <p>Recent Appointments</p>
            </div>
            <div className="recent-appointments-container">
              {recentAppointments.map((item, index) => {
                return <div className="recent-appointment-card">
                  <div className="recent-appointment-card-details">
                    <p className='recent-appointment-card-doctor-name'>Dr. Harsh Mehta</p>
                    <p className='recent-appointment-card-date'>2025-02-17</p>
                  </div>
                  <p className='recent-appointment-card-status'>Scheduled</p>
                  <PrimaryButton text='View Details' padding='.8em 3em' />
                </div>
              })}

            </div>


          </div>
        </div>


      </div>
    </div>
  )
}
