import React, { useEffect } from 'react'
import Calendar from '../../../shared/primitive/Calendar/Calendar'
import { useState } from 'react'
import doctorPfp from '../../../../assets/imgs/DoctorDashboardImage.png'
import './DoctorLanding.css'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader';
import SecondaryButton from '../../../shared/buttons/SecondaryButton/SecondaryButton'
import AppointmentIcon from '../../../../assets/icons/profile-2user.png'
import NewsDummy from '../../../../assets/imgs/doctor-landing-page-news-dummy.png'
import DownArrow from '../../../../assets/icons/arrow-down.png'
import DoctorCalendarPopup from '../../../shared/primitive/DoctorCalendarPopUp/DoctorCalendarPopup'
import { useSideBarState } from '../../../../contexts/SideBarStateContext'
const newsList = [
  {
    image: NewsDummy,
    heading: "Tech Giants Unveil AI Breakthrough",
    description: "Leading companies introduce AI models that surpass human-like reasoning and creativity."
  },
  {
    image: NewsDummy,
    heading: "Global Markets See Unexpected Surge",
    description: "Stock markets across the globe experience a sharp rise amid economic optimism."
  },
  {
    image: NewsDummy,
    heading: "Scientists Discover New Exoplanet",
    description: "A potentially habitable exoplanet has been detected in a nearby solar system."
  },
  {
    image: NewsDummy,
    heading: "Major Cyberattack Hits Government Systems",
    description: "Hackers infiltrate sensitive data networks, prompting global security alerts."
  },
  {
    image: NewsDummy,
    heading: "Electric Cars to Dominate by 2030",
    description: "Experts predict EVs will make up 70% of the global automobile market in the next decade."
  },
  {
    image: NewsDummy,
    heading: "Breakthrough in Cancer Research",
    description: "A new treatment shows promising results in reducing cancerous tumors significantly."
  },
  {
    image: NewsDummy,
    heading: "Olympics 2024: Records Are Meant to Be Broken",
    description: "Athletes shatter world records in various sporting events at the Paris Olympics."
  },
  {
    image: NewsDummy,
    heading: "Social Media Faces New Regulations",
    description: "Governments introduce stricter laws to curb misinformation and privacy violations."
  },
  {
    image: NewsDummy,
    heading: "Wildlife Conservation Efforts Show Success",
    description: "Several endangered species see population growth due to conservation initiatives."
  },
  {
    image: NewsDummy,
    heading: "SpaceX Launches First Civilian Moon Mission",
    description: "A historic mission sends civilians on a journey around the Moon for the first time."
  }
];

const DummyAppointments = [
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  },
  {
    patient: "John Doe",
    category: "General consultancy",
    time: "12:00 AM"
  }
]

const DummyTimings = [
  {
    duration: "4 hours",
    start: "9:00 AM",
    end: "10:00 AM",
  },
  {
    duration: "4 hours",
    start: "9:00 AM",
    end: "10:00 AM",
  },
  {
    duration: "4 hours",
    start: "9:00 AM",
    end: "10:00 AM",
  },
  {
    duration: "4 hours",
    start: "9:00 AM",
    end: "10:00 AM",
  },
  {
    duration: "4 hours",
    start: "9:00 AM",
    end: "10:00 AM",
  }
]

const DummyMeetings = [
  {
    title: "Annual Meeting",
    description: "Meeting about the upcoming features of the application expected by doctors this year....",
    members: 450,
    date: '2025-01-10'
  }, {
    title: "Annual Meeting",
    description: "Meeting about the upcoming features of the application expected by doctors this year....",
    members: 450,
    date: '2025-01-10'
  },
  {
    title: "Annual Meeting",
    description: "Meeting about the upcoming features of the application expected by doctors this year....",
    members: 450,
    date: '2025-01-10'
  },
  {
    title: "Annual Meeting",
    description: "Meeting about the upcoming features of the application expected by doctors this year....",
    members: 450,
    date: '2025-01-10'
  }
]

export default function DoctorLanding({ newsData = newsList, Appointments = DummyAppointments, schedules = DummyTimings, meetings = DummyMeetings }) {
  const [bookingStatus, setBookingStatus] = useState([]);
  const [selectedData, setSelectedDate] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [moreMeetings, setMoreMeetings] = useState(false);
  const { setSideBarState } = useSideBarState();
  const Categories = [...new Set(Appointments.map(Appointment => Appointment.category))];

  useEffect(() => {
    setSideBarState(`dash-doctor-landing`);
    return () => {
      setSideBarState('');
    }
  }, [])
  useEffect(() => {
    setBookingStatus([
      { date: '2025-02-17', percentage: 90 },
      { date: '2025-02-02', percentage: 50 },
      { date: '2025-01-08', percentage: 20 },
      { date: '2025-01-03', percentage: 10 },
      { date: '2025-01-10', percentage: 0 },
    ])
  }, [])
  useEffect(() => {
    const filteredCategories = Categories.filter(obj => obj.category == selectedCategory);
  }, [selectedCategory])



  return (
    <div className='DoctorLanding'>
      <DoctorCalendarPopup />
      <DashboardHeader title='Good Morning' />
      <div className="doctor-landing-content">
        <div className='doctor-landing-hero-section'>
          <div className="doctor-landing-profile-section">
            <div className="doctor-landing-profile-section-left">
              <img src={doctorPfp} alt="" />
            </div>
            <div className="doctor-landing-profile-section-right">
              <p className="doctor-name">Dr. Shilpa Singh</p>
              <p className="doctor-specialization">Cardiologist</p>
              <div className="doctor-landing-profile-section-right-redirections">
                <SecondaryButton text={'Edit Details'} padding='.7em 4em' fontSize={'.9em'} />
                <span className="doctor-rating"><i className='fa-solid fa-star'></i> 4.5</span>
              </div>
              <div className="Appointment-data">
                <div>
                  <p>Appointment Today</p>
                  <div className='data'>
                    <img src={AppointmentIcon} alt="" />
                    <p>101</p>
                  </div>
                </div>

                <div>
                  <p>Total Appointment</p>
                  <div className='data'>
                    <img src={AppointmentIcon} alt="" />
                    <p>350</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Calendar dashboard='doctor' bookingStatus={bookingStatus} />
        </div>
        <div className="News-category-section">
          <div className="Appointment-List">
            <div className="selection-Fields">
              <div className="Categories"></div>
              <div className="date"></div>
            </div>
            <div className="Appointments">
              {Appointments.map((Appointment, index) => (
                <div className="Appointment" key={index}>
                  <p className="name">{Appointment.patient}</p>
                  <p className="Category">{Appointment.category}</p>
                  <p className="time">{Appointment.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="Daily-News">
            <div className="Heading">Daily News</div>
            {newsData.map((news, index) => (
              <div key={index} className="newsCard">
                <div className="news-text">
                  <p className="Heading">{news.heading}</p>
                  <p className="Body">{news.description}</p>
                </div>
                <img src={news.image} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="Todays-Schedule">
          <p className="Heading">Today's Schedules</p>
          <div className="schedules">
            {schedules.map((obj, index) => (
              <div className="schedule" key={index}>
                <div className="duration">{obj.duration}</div>
                <div className="timing">{obj.start} - {obj.end}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="meetings-section">
          <p className="heading">Company Meetings / Events</p>
          {meetings.slice(0, !moreMeetings ? "2" : meetings.length).map((meeting, index) => (
            <div className="meeting" key={index}>
              <div className="meeting-text">
                <p className="title">{meeting.title}</p>
                <p className="description">{meeting.description}</p>
              </div>
              <div className="meeting-right">
                <p className="date">21 November 2024</p>

                <div className="members-joining">
                  <div className="images-wrapper">
                    <div className="images">
                      <img src={doctorPfp} alt="" className="img-1" />
                      <img src={doctorPfp} alt="" className="img-2" />
                      <img src={doctorPfp} alt="" className="img-3" />
                    </div>
                  </div>
                  <div className="members-joining-text">
                    <p className="joining-members">{meeting.members}+ joining</p>
                    <button>Notify Me Too</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button className='viewMore' onClick={() => setMoreMeetings(!moreMeetings)}>{moreMeetings ? "View Less" : "View More"}</button>
        </div>
      </div>
    </div>
  )
}
