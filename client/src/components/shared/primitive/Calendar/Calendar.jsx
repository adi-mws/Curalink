import React, { useState, useEffect } from 'react';
import "./Calendar.css";

export default function Calendar({ date = new Date() }) {
    const [currentDate, setCurrentDate] = useState(date);
    const [bookingData, setBookingData] = useState([]);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Add useEffect to fetch booking data when month changes
    useEffect(() => {
        const fetchBookingData = async () => {
            setBookingData([
                { date: '2025-02-17', percentage: 75 },
                { date: '2025-02-02', percentage: 50 },
                { date: '2025-01-08', percentage: 30 },
                { date: '2025-01-03', percentage: 30 },
                { date: '2025-01-10', percentage: 30 },
                { date: '2025-02-20', percentage: 30 },
            ]); 
        };

        fetchBookingData();
    }, [currentYear, currentMonth]);

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const handlePrevMonth = () => setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentYear, currentMonth + 1, 1));

    const getBookingPercentage = (day) => {
        const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const bookingInfo = bookingData.find(booking => booking.date === formattedDate);
        return bookingInfo?.percentage || 0;
    };

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

            calendarItems.push(
                <div key={day} className={`calendar-item ${day === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear() ? 'current-day' : ''}`}>
                    <svg className="booking-progress" width="40" height="40">
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
                    </svg>
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
        </div>
    );
}
