import './ServicePage.css'
import React from 'react'
import Services from '../../components/shared/services/Services.jsx'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import DummyImage from '../../assets/imgs/Services-Dummy-Image.png'

const Dummyservices = [
  {
      image: DummyImage,
      service: "General Healthcare",
      description: "Your go-to solution for routine check-ups and preventive care",
      duration: "10 mins"
  },
  {
      image: DummyImage,
      service: "Dental Care",
      description: "Comprehensive dental check-ups and treatments for a healthy smile",
      duration: "20 mins"
  },
  {
      image: DummyImage,
      service: "Mental Wellness",
      description: "Professional counseling and therapy for your mental well-being",
      duration: "30 mins"
  },
  {
      image: DummyImage,
      service: "Nutrition Consultation",
      description: "Personalized diet plans and nutritional guidance",
      duration: "15 mins"
  },
  {
      image: DummyImage,
      service: "Physiotherapy",
      description: "Rehabilitation and pain management through expert therapy",
      duration: "25 mins"
  },
  {
      image: DummyImage,
      service: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents",
      duration: "20 mins"
  },
  {
      image: DummyImage,
      service: "Skin & Dermatology",
      description: "Expert care for skin-related issues and treatments",
      duration: "15 mins"
  },
  {
      image: DummyImage,
      service: "Eye Care",
      description: "Comprehensive eye check-ups and vision care",
      duration: "20 mins"
  }
];

export default function ServicePage({Service = Dummyservices}) {
  return (
    <div className="ServicePage">
        <div className="Hero-Section">
          <div className="Hero-Content">
            <p className="Heading">Connect with Expert Doctors Anytime, Anywhere</p>
            <p className="Body">Discover a wide range of healthcare services designed to cater to your specific needs. From online consultations to expert care in various specialties, we’re here to ensure your wellness journey is seamless and effective.</p>
            <div className="Hero-Buttons">
              <PrimaryButton text = "Find a Specialist" width='20em' borderRadius='7.4px'/>
              <SecondaryButton text="See Healthcare Option" width='20em' borderRadius='7.4px'/>
            </div>
          </div>
        </div>

        <div className="Services-Section">
          <div className="Heading">Comprehensive Care for Every Need</div>
          <div className="Body">Our platform connects you with specialists across a wide range of medical fields. Explore our healthcare categories and get expert care tailored to your needs</div>
          <div className="Services-Card-Section">
            {Service.map((serv) => (
              <Services Service={serv}/>
            ))}
          </div>
        </div>

        <div className="News-Redirect-Section">
          <div className="Text">
          <p className="Heading"></p>
          <p className="Body"></p>
          <button className="Redirect-Button"><img src="" alt="" /></button>
          </div>
          <img src="" alt="" className="Redirect-Image" />
        </div>

        
    </div>
  )
}
