import React from 'react'
import './DoctorPublicProfilePage.css'
import RatingDisplay from '../../components/Rating/RatingDisplay.jsx'
import DummyImage from '../../assets/imgs/Dummy-Doctor-Profile-Picture.png'
import MenuIcon from '../../assets/icons/Menu-Book.png'
import RefreshIcon from '../../assets/icons/refresh-2.png'
import CopyIcon from '../../assets/icons/copy.png'
import { useSideBarState } from '../../components/contexts/SideBarStateContext.jsx';
import { useEffect,useState  } from 'react';
import DurationIcon from '../../assets/icons/Services-Duration-Icon.png' 
import DownArrow from '../../assets/icons/arrow-down.png'
import { motion, AnimatePresence } from "framer-motion";

export default function DoctorPublicProfilePage() {
    const { setSideBarState } = useSideBarState();
    useEffect(() => {
        setSideBarState('doctor-public-profile');
    }, []);

    const [showAllReviews, setShowAllReviews] = useState(false);
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

    const patientReviews = [
      {
        name: "Emily Johnson",
        rating: 4.8,
        review: "Dr. Williams is very kind and listens carefully. She diagnosed my condition accurately and provided excellent treatment.",
        profilePicture: DummyImage
      },
      {
        name: "Michael Smith",
        rating: 4.5,
        review: "A very knowledgeable doctor! He explained everything in detail and made sure I was comfortable with my treatment plan.",
        profilePicture: DummyImage
      },
      {
        name: "Sophia Brown",
        rating: 4.9,
        review: "Amazing doctor! She takes her time to explain everything and is always so patient. Highly recommended!",
        profilePicture: DummyImage
      },
      {
        name: "Daniel Wilson",
        rating: 4.2,
        review: "Good experience overall, but the waiting time was quite long. Dr. Anderson was professional and helpful.",
        profilePicture: DummyImage
      },
      {
        name: "Ava Martinez",
        rating: 5.0,
        review: "The best doctor I’ve ever visited! She truly cares about her patients and goes the extra mile.",
        profilePicture: DummyImage
      },
      {
        name: "James Lee",
        rating: 4.6,
        review: "Very professional and attentive. He took the time to address all my concerns and provided great advice.",
        profilePicture: DummyImage
      },
      {
        name: "Olivia Carter",
        rating: 4.7,
        review: "Dr. Martinez is very compassionate and knowledgeable. She made me feel at ease throughout my treatment.",
        profilePicture: DummyImage
      },
      {
        name: "Robert Anderson",
        rating: 4.3,
        review: "A good doctor with a lot of experience. However, the clinic was a bit crowded, which made the consultation feel rushed.",
        profilePicture: DummyImage
      },
      {
        name: "William Harris",
        rating: 4.9,
        review: "Excellent doctor! She is very thorough in her examination and always provides the best care.",
        profilePicture: DummyImage
      },
      {
        name: "Sarah Thompson",
        rating: 4.4,
        review: "Very patient and listens carefully to all concerns. A great doctor, though the appointment scheduling could be improved.",
        profilePicture: DummyImage
      }
    ];
    
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
          "college_name": "AIIMS DELHI",
          "degree": "Bachelor of medicine, Bachelor of Surgery",
          "years": "2005-2011"
        },
        {
          "college_name": "AIIMS DELHI",
          "degree": "Master in Surgery",
          "years": "2011-2014"
        }
      ]
      const [copied, setCopied] = useState(false);

      const handleCopy = () => {
        navigator.clipboard.writeText(doctor.licenceNo);
        setCopied(true);
      }
      setTimeout(() => {
        setCopied(false);
      }, 2500);
      
  return (
    <div className='DoctorPublicProfilePage'>
        <div className="Doctor-Profile">
            <div className="Profile-Picture-Section">
                <div className="Profile-Picture">
                    <img src={doctor.profilePicture} alt="" />
                </div>
            <p className="Licence-Id">Licence No: {doctor.licenceNo} <button onClick={handleCopy} className='Copy-Button'><img src={CopyIcon} alt="" /></button>
            <div style={{backgroundColor:copied ? 'gray' : 'transparent'}} className="Copied-Message">
                <AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-2 py-1 rounded-md text-sm"
                    >
                      Copied!
                    </motion.span>
                  )}
              </AnimatePresence>
              </div>
            
            </p>
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
            <p style={{fontSize:'1.5rem',fontWeight:'400',width:'100%'}} className="Heading">Services</p>
            {services.map((service,index)=>(
                <div className="Service">
                    <u className="Category">{service.category}</u>
                    <p className="Price">${service.price}</p>
                    <div className="totalAppointmentsAndDuration">
                        <p className="TotalAppointments">{service.total_appointments} Appointments</p>
                        <img style={{marginRight:'-0.5em'}} src={DurationIcon} alt="" />
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

        <div className="Review-Section">
          <p className="Heading">Reviews<p style={{color:"var(--gray-text)"}}> ({patientReviews.length})</p></p>
          {patientReviews
      .slice(0, showAllReviews ? patientReviews.length : 3)
      .map((review,index)=>(
        <div className="Review">
            <div className="Patient-Detail">
              <img className='ProfilePicture' src={review.profilePicture} alt="" />
              <p className="Name">{review.name}</p>
              <p className="Rating">{review.rating}</p>
              <RatingDisplay rating={review.rating} />
            </div>
            <p className="Review-Content">{review.review}</p>
        </div>
    ))}
            <button onClick={()=>setShowAllReviews(!showAllReviews)} className="View-All-Reviews">
      {showAllReviews ? 'Show Less' : 'View All Reviews'} <img style={{transform:showAllReviews ? 'rotate(180deg)' : 'rotate(0deg)'}} src={DownArrow} alt="" />
    </button>
        </div>
    </div>
  )
}

