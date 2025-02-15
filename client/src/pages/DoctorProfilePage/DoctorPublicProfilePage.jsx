import React from 'react'
import './DoctorPublicProfilePage.css'
import RatingDisplay from '../../components/Rating/RatingDisplay.jsx'
import DummyImage from '../../assets/imgs/Dummy-Doctor-Profile-Picture.png'
import MenuIcon from '../../assets/icons/Menu-Book.png'
import RefreshIcon from '../../assets/icons/refresh-2.png'
import CopyIcon from '../../assets/icons/copy.png'

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
    </div>
  )
}
