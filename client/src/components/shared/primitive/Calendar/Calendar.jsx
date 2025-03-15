import React, { useState, useEffect } from 'react';
import "./Calendar.css";
import PatientCalendarPopUp from '../PatientCalendarPopUp/PatientCalendarPopUp';
import DoctorCalendarPopup from '../DoctorCalendarPopUp/DoctorCalendarPopup';

export default function Calendar({ date = new Date(), dashboard = 'patient', bookingStatus = [], patientAppointments }) {
    const [currentDate, setCurrentDate] = useState(date);
    const [bookingData, setBookingData] = useState([]);
    const [showCalendarPopUp, setShowCalendarPopUp] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Add useEffect to fetch booking data when month changes
    useEffect(() => {
        // console.log(bookingStatus);
        setBookingData(bookingStatus);
    }, [bookingStatus]);

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const handlePrevMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1));

    const getBookingPercentage = (day) => {
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const bookingInfo = bookingData.find(booking => booking.date === formattedDate);
        return bookingInfo?.percentage || 0;
    };

    const hasAppointment = (day) => {
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return patientAppointments?.appointments?.includes(formattedDate);
    };

    const hasMedication = (day) => {
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return patientAppointments?.medications?.includes(formattedDate);
    };

    const popUpHandler = (date) => {
        setSelectedDate(date);
        setShowCalendarPopUp(true);
    }

    const renderDays = () => {
        const calendarItems = [];
        const totalSlots = 42;

        for (let i = 0; i < firstDay; i++) {
            calendarItems.push(<div key={`empty-${i}`} className="calendar-item empty no-hover"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const percentage = getBookingPercentage(day);
            const circumference = 2 * Math.PI * 17; // Circle radius is 17px
            const offset = circumference - (percentage / 100) * circumference;
            const hasAppt = hasAppointment(day);
            const hasMed = hasMedication(day);

            calendarItems.push(

                <div key={day} onClick={() => popUpHandler(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`)} className={`calendar-item ${day === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear() ? 'current-day' : ''}`}>
                    {dashboard === 'doctor' ? <svg className="booking-progress" width="40" height="40">
                        <circle
                            className="booking-progress-bg"
                            cx="20"
                            cy="20"
                            r="17"
                            fill="none"
                            strokeWidth="2"
                        />
                        <circle
                            className="booking-progress-indicator"
                            cx="20"
                            cy="20"
                            r="17"
                            fill="none"
                            strokeWidth="2"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform="rotate(-90 20 20)"
                        />
                    </svg> : (
                        dashboard === 'patient' && (
                            <div className="event-indicators">
                                {hasAppt && <div className="event-dot appointment-dot"></div>}
                                {hasMed && <div className="event-dot medication-dot"></div>}
                            </div>
                        )
                    )}
                    <span className="day-number">{day}</span>
                </div>
            );
        }
        while (calendarItems.length < totalSlots) {
            calendarItems.push(<div key={`extra-${calendarItems.length}`} className="calendar-item empty no-hover"></div>);
        }
        return calendarItems;
    };

    return (
        <div className='Calendar'>
            <div className="calendar-header">
                <button onClick={handlePrevMonth}><i className='fa-solid fa-chevron-left' /></button>
                <div className="month-year-item">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</div>
                <button onClick={handleNextMonth}><i className='fa-solid fa-chevron-right' /></button>
            </div>
            <div className="calendar-body">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="calendar-item weekday-item">{day}</div>
                ))}
                {renderDays()}
            </div>
            {dashboard === 'patient' ?

                <PatientCalendarPopUp showCalendarPopUp={showCalendarPopUp} setShowCalendarPopUp={setShowCalendarPopUp} selectedDate={selectedDate} />

                : null
            }
            {dashboard === 'doctor' ?

                <DoctorCalendarPopup showCalendarPopUp={showCalendarPopUp} setShowCalendarPopUp={setShowCalendarPopUp} selectedDate={selectedDate} />

                : null
            }
        </div>
    );
}
