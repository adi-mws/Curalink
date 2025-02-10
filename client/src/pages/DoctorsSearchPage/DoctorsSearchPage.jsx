import { useState, useEffect } from 'react';
import './DoctorsSearchPage.css';
import DoctorsCard from '../../components/DoctorsCard/DoctorsCard.jsx';
import SearchIcon from '../../assets/icons/search-normal.png';
import DummyImage from '../../assets/imgs/Surgeon-With-Mask.png';
import Vector from '../../assets/icons/Vector.png';
import DownArrow from '../../assets/icons/arrow-down.png';
import PrimaryHollowButton from '../../components/shared/buttons/PrimaryHollowButton/PrimaryHollowButton.jsx';

const doctorsData = [
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
  
const doctorCategories = ['All Category', ...new Set(doctorsData.map(doctor => doctor.specialization))];

export default function DoctorsSearchPage({ categories = doctorCategories, doctorsList = doctorsData }) {
    const [selectedCategory, setSelectedCategory] = useState('All Category');
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState(doctorsList);

    useEffect(() => {
        const filtered = doctorsList.filter(doctor => 
            (selectedCategory === 'All Category' || doctor.specialization === selectedCategory) &&
            (
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase()) 
            )
        );
        setFilteredDoctors(filtered);
    }, [selectedCategory, searchQuery, doctorsList]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.Filter-Button-Dropdown-Wrapper')) {
                setDropdownVisible(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="DoctorsSearchPage">
            <div className="Hero-Section">
                <div className="Hero-Content">
                    <p className="Heading">Find the Right Doctor for Your Healthcare Needs</p>
                    <p className="Description">
                        Easily search, compare, and book appointments with trusted doctors across various specialties.
                        Connect via video call, chat, or in-person consultations.
                    </p>
                    <div className="Search-Container">
                        <input 
                            type="text" 
                            placeholder='Search for Doctors' 
                            className="Search-Bar" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />    
                    </div>
                </div>
            </div>
            <div className="Filter-Bar">
                <div className="FilterLogo">
                    <img src={Vector} alt="Filter Icon" />
                    <p>Filters</p>
                </div>
                <div className="Filter-Options">
                    <div className="Filter-Button-Dropdown-Wrapper">
                        <button className='Filter-Buttons-Dropdown' onClick={() => setDropdownVisible(!isDropdownVisible)}>
                            {selectedCategory}
                            <img src={DownArrow} alt="Arrow" style={{ transform: isDropdownVisible ? "rotate(180deg)" : "rotate(0deg)" }} />
                        </button>
                        {isDropdownVisible && (
                            <div className="Categories">
                                {categories.map((category) => (
                                    <div key={category} className="Category" 
                                        onClick={() => { setSelectedCategory(category); setDropdownVisible(false); }}>
                                        {category}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <PrimaryHollowButton text="Popularity" />
                    <PrimaryHollowButton text="Highly Rated" />
                    <PrimaryHollowButton text="More Experienced" />
                </div>
            </div>
            <div className="ContentSection">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                        <DoctorsCard key={index} DoctorProfile={doctor} />
                    ))
                ) : (
                    <p className="NoResults">No doctors found matching your search.</p>
                )}
            </div>
        </div>
    );
}
