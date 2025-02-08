import React from 'react'
import { useState } from 'react'
import './DoctorsCard.css'
import DummyImage from "../../assets/imgs/Surgeon-With-Mask.png"
import RatingDisplay from '../Rating/RatingDisplay'
import TertiaryButton from '../shared/buttons/TertiaryButton/TertiaryButton'
import SecondaryButton from '../shared/buttons/SecondaryButton/SecondaryButton'
import DurationIcon from '../../assets/icons/Services-Duration-Icon.png'



export default function DoctorsCard({DoctorProfile = data, filter = false}) {
    const [filterEnabled, changeFilter] = useState(filter);
  return (
    <div className='DoctorsCard'>
        <div className="ImageAndRating">
            <img src={DoctorProfile.profilePic} alt="" className="ProfilePicture" />
            <div className="Reviews">
                <p className="AvgRating">{DoctorProfile.review}</p>
                <RatingDisplay rating={DoctorProfile.review}/>
                <p className="TotalReviews" style={{ display:filterEnabled ? "none" : ""}}>{DoctorProfile.totalreviews}+ reviews</p>
                <p className="ViewProfile"style={{ display:filterEnabled ? "" : "none"}}>View Profile</p>
            </div>
            </div>
            <div className="NameAndSpec">
                <p className="Name">{DoctorProfile.name}</p>
                <p className="Specialization">{DoctorProfile.specialization}</p>
            </div>

            <div className="ButtonsOrPrice">
                <div style={{ display:filterEnabled ? "" : "none"}} className="PriceAndDuration">
                    <p className="Price">{DoctorProfile.price}</p>
                    <div className="Duration">
                        <img src={DurationIcon} alt="" className="DurationIcon" />
                        <p className="DurationValue">{DoctorProfile.duration}</p>
                    </div>
                </div>

                    <div className="ProfileButton" style={{ display:filterEnabled ? "none" : ""}} ><SecondaryButton width='100%' padding="1em 0em" text="View Profile"/></div>
                    <div className="BookAppointment"><TertiaryButton width='100%' padding="1em 0em" text="Book Appointment"/></div>
                
            </div>

        
    </div>
  )
}
const data = {
    profilePic: DummyImage,
    name: "Dr. John Carter",
    specialization: "Cardiologist",
    review: 4.8,
    totalreviews:700,
    price: "$150",
    duration: "30 mins"
  }
