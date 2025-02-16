import React from 'react'
import './DoctorPublicProfilePage.css'
import RatingDisplay from '../../components/Rating/RatingDisplay.jsx'
import DummyImage from '../../assets/imgs/Dummy-Doctor-Profile-Picture.png'
import MenuIcon from '../../assets/icons/Menu-Book.png'
import RefreshIcon from '../../assets/icons/refresh-2.png'
import CopyIcon from '../../assets/icons/copy.png'
import DurationIcon from '../../assets/icons/Services-Duration-Icon.png' 

export default function DoctorPublicProfilePage() {
    const doctor = {
        name: "Dr. Aisha Sharma",
        category: "Cardiologist",
        profilePicture: DummyImage,
        rating: 4.8,
        consultations: 1200,
        totalReviews: 300,
        about: "Dr. Aisha Sharma is a renowned cardiologist with over 15 years of experience in treating heart-related conditions. She specializes in non-invasive cardiology and preventive care.",
        licenceNo: "ahskdfh432"
    }
    const services = [
        {
          "category": "General Consultation",
          "price": 50,
          "duration": "30 min",
          "total_appointments": 200
        },
        {
          "category": "Dental Checkup",
          "price": 80,
          "duration": "45 min",
          "total_appointments": 150
        },
        {
          "category": "Eye Examination",
          "price": 60,
          "duration": "40 min",
          "total_appointments": 130
        },
        {
          "category": "Dermatology Consultation",
          "price": 90,
          "duration": "50 min",
          "total_appointments": 100
        },
        {
          "category": "Physiotherapy Session",
          "price": 70,
          "duration": "60 min",
          "total_appointments": 120
        },
        {
          "category": "Cardiology Checkup",
          "price": 150,
          "duration": "60 min",
          "total_appointments": 80
        },
        {
          "category": "Orthopedic Consultation",
          "price": 100,
          "duration": "45 min",
          "total_appointments": 90
        },
        {
          "category": "Psychiatry Session",
          "price": 120,
          "duration": "60 min",
          "total_appointments": 70
        },
      ]

      const education = [
        {
          "college_name": "Harvard University",
          "degree": "Bachelor of Science (B.Sc.)",
          "years": "2011-2014"
        },
        {
          "college_name": "Stanford University",
          "degree": "Master of Business Administration (MBA)",
          "years": "2011-2014"
        }
      ]
      
      
  return (
    <div className='DoctorPublicProfilePage'>
        <div className="Doctor-Profile">
            <div className="Profile-Picture-Section">
                <div className="Profile-Picture">
                    <img src={doctor.profilePicture} alt="" />
                </div>
            <p className="Licence-Id">Licence No: {doctor.licenceNo} <button className='Copy-Button'><img src={CopyIcon} alt="" /></button></p>
            </div>
            <div className="Doctor-Details">
                <p className="Doctor-Name">{doctor.name}</p>
                <p className="Doctor-Category">{doctor.category}</p>
                <div className="Doctor-Rating"><p style={{fontSize:'2rem',fontWeight:'500'}}>{doctor.rating}</p>
                <RatingDisplay rating={doctor.rating} /></div>
                <div className="Consultation-Reviews">
                    <div className="Consultation">
                        <p className='Consultation-Number'>{doctor.consultations} <p className='Consultation-Text'>Consultations</p></p>
                    </div>
                    <div className="Reviews">
                        <p className='Reviews-Number'>{doctor.totalReviews} <p className='Reviews-Text'>Reviews</p></p>
                    </div>
                </div>   
            </div>

            <div className="Buttons">
                <div className="button">
                <button className="Book-Appointment"><img src={MenuIcon} alt="" /></button>
                <p>Book Appointment</p>
                </div>
                <div className="button">
                <button className="Prescription-Renewal"><img src={RefreshIcon} alt="" /></button>
                <p>Priscription Renewal</p>
                </div>
            </div>
            <div className="About-Doctor">
                    <p className='About-Doctor-Title'>About Doctor</p>
                    <p className='About-Doctor-Description'>{doctor.about}</p>
            </div>
        </div>
        <div className="Services-Section">
            <p style={{fontSize:'1.5rem',fontWeight:'400',width:'100%',paddingLeft:'3em'}} className="Heading">Services</p>
            {services.map((service,index)=>(
                <div className="Service">
                    <u className="Category">{service.category}</u>
                    <p className="Price">${service.price}</p>
                    <div className="totalAppointmentsAndDuration">
                        <p className="TotalAppointments">{service.total_appointments}Appointments</p>
                        <img src={DurationIcon} alt="" />
                        <p className="Duration">{service.duration}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="Education">
            <p style={{fontSize:'1.5rem',fontWeight:'400',width:'100%'}} className="Heading">Education</p>
            {education.map((education,index)=>(
                <div className="Education-Item">
                    <p className="College-Name">{education.college_name}</p>
                    <p className="Degree">{education.degree}</p>
                    <p className="Years">{education.years}</p>
                </div>
            ))}
        </div>

        <div className="Review-Section"></div>
    </div>
  )
}
