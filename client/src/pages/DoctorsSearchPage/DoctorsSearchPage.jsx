import React from 'react'
import './DoctorsSearchPage.css'
import  DoctorsCard from '../../components/DoctorsCard/DoctorsCard.jsx'
import SearchIcon from '../../assets/icons/search-normal.png'
import DummyImage from "../../assets/imgs/Surgeon-With-Mask.png"
import Vector from '../../assets/icons/Vector.png'
import PrimaryHollowButton from '../../components/shared/buttons/PrimaryHollowButton/PrimaryHollowButton.jsx'

export default function DoctorsSearchPage({searchResults = doctorsList}) {
  return (
    <div className='DoctorsSearchPage'>
      <div className="Hero-Section">
        <div className="Hero-Content">
        <p className="Heading">Find the Right Doctor for Your Healthcare Needs</p>
        <p className="Description">Easily search, compare, and book appointments with trusted doctors across various specialties. Connect via video call, chat, or in-person consultations.</p>
        <input type="text" className="SearchBar" placeholder='Search for Doctors'/>
      </div>

      <div className="Filters">
        <div className="Filter-Logo"><img src={Vector} alt="" />Filters</div>
        <div className="Filter-Buttons-Wrapper">
        <div className="Filter-Buttons">
        <PrimaryHollowButton padding="1.2em 2em" textWrap='nowrap' borderRadius='10px' width=" 100%" text="All Category"/>
        </div>
        <div className="Filter-Buttons">
        <PrimaryHollowButton padding="1.2em 2em" textWrap='nowrap' borderRadius='10px' width=" 100%" text="Popularity"/>
        </div>
        <div className="Filter-Buttons">
        <PrimaryHollowButton padding="1.2em 2em"  width=" 100%" borderRadius='10px' textWrap='nowrap' text="Highly Rated"/>
        </div>
        <div className="Filter-Buttons">
        <PrimaryHollowButton padding="1.2em 2em" width="100%" borderRadius='10px' textWrap='nowrap' text="More Experienced"/>
        </div>
        </div>
      </div>
      </div>

      <div className="Search-Result-Section">
        {searchResults.map((result) =>(
          <DoctorsCard DoctorProfile={result} />
        ))}
      </div>
    </div>
  )
}

const doctorsList = [
  {
      profilePic: DummyImage,
      name: "Dr. John Carter",
      specialization: "Cardiologist",
      review: 4.0,
      totalreviews: 700,
      price: 150,
      duration: 10,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Emily Smith",
      specialization: "Dermatologist",
      review: 4.5,
      totalreviews: 850,
      price: 120,
      duration: 15,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Michael Johnson",
      specialization: "Neurologist",
      review: 4.2,
      totalreviews: 600,
      price: 200,
      duration: 20,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Sarah Williams",
      specialization: "Pediatrician",
      review: 4.7,
      totalreviews: 900,
      price: 100,
      duration: 12,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. David Brown",
      specialization: "Orthopedic Surgeon",
      review: 4.1,
      totalreviews: 750,
      price: 180,
      duration: 25,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Olivia Martinez",
      specialization: "Endocrinologist",
      review: 4.3,
      totalreviews: 500,
      price: 160,
      duration: 18,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. William Lee",
      specialization: "Psychiatrist",
      review: 4.6,
      totalreviews: 670,
      price: 140,
      duration: 30,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Sophia Harris",
      specialization: "Gastroenterologist",
      review: 4.4,
      totalreviews: 580,
      price: 175,
      duration: 22,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. James Clark",
      specialization: "Ophthalmologist",
      review: 4.0,
      totalreviews: 620,
      price: 130,
      duration: 14,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Ava Lewis",
      specialization: "Oncologist",
      review: 4.8,
      totalreviews: 980,
      price: 250,
      duration: 40,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Daniel Walker",
      specialization: "Urologist",
      review: 4.2,
      totalreviews: 570,
      price: 170,
      duration: 20,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Mia Allen",
      specialization: "Nephrologist",
      review: 4.1,
      totalreviews: 490,
      price: 190,
      duration: 26,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Henry White",
      specialization: "Pulmonologist",
      review: 4.3,
      totalreviews: 730,
      price: 160,
      duration: 18,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Grace Thomas",
      specialization: "Rheumatologist",
      review: 4.5,
      totalreviews: 780,
      price: 150,
      duration: 16,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Lucas Robinson",
      specialization: "Plastic Surgeon",
      review: 4.7,
      totalreviews: 910,
      price: 220,
      duration: 35,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Isabella Hall",
      specialization: "Hematologist",
      review: 4.6,
      totalreviews: 860,
      price: 200,
      duration: 28,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Matthew Young",
      specialization: "General Surgeon",
      review: 4.4,
      totalreviews: 640,
      price: 175,
      duration: 24,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Chloe King",
      specialization: "Allergist",
      review: 4.2,
      totalreviews: 550,
      price: 140,
      duration: 12,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Elijah Scott",
      specialization: "Dentist",
      review: 4.1,
      totalreviews: 710,
      price: 130,
      duration: 10,
      Currency: "$"
  },
  {
      profilePic: DummyImage,
      name: "Dr. Lily Adams",
      specialization: "Geriatrician",
      review: 4.3,
      totalreviews: 680,
      price: 145,
      duration: 15,
      Currency: "$"
  }
];





