import './ServicePage.css'
import React from 'react'
import Services from '../../components/shared/services/Services.jsx'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import DummyImage from '../../assets/imgs/Services-Dummy-Image.png'
import ButtonIcon from '../../assets/icons/right-arrow-rectangle.png'
import CoffeeMan from '../../assets/imgs/Man-Sofa-Coffee.png'
import DummyVideo from '../../assets/videos/DoctorsPageDummyVideo.mp4'
import JourneySectionImage from '../../assets/imgs/Journey-Section-Image.png'
import { useSideBarState } from '../../components/contexts/SideBarStateContext.jsx';
import { useEffect } from 'react';
const Videos = [
  {
    video: DummyVideo,
    Discription: "This is the first video showcasing an amazing journey."
  },
  {
    video: DummyVideo,
    Discription: "Explore the second chapter of our adventure in this video."
  },
  {
    video: DummyVideo,
    Discription: "A deep dive into the most exciting moments of the trip."
  },
  {
    video: DummyVideo,
    Discription: "Watch the final episode capturing the best highlights."
  },
  {
    video: DummyVideo,
    Discription: "An exclusive behind-the-scenes look at how everything came together."
  },
  
];



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

export default function ServicePage({Service = Dummyservices, VideosDescrition=Videos}) {
  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState('services');
    return () => {
      setSideBarState('');
    }
  }, []);
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

        <div className="VideoCallAd">
          <p className="Head">Connect Doctors with Secure Chats, Calls and Video Calls</p>
          <p className="Body">Seamlessly connect with doctors through secure chats, calls, and video consultations. Get instant medical advice, discuss prescriptions, and receive expert care—all from the comfort of your home.</p>
        </div>

        <div className="Journey-Section">
            <p className="Heading">Your Healthcare Journey – Simple & Hassle-Free</p>
            <div className="CentralLine"></div>
            <div className="Video-Journey">
            {VideosDescrition.map((comp, index) => (
            <div key={index}
      className="VideosWithImage" 
      style={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row", display: "flex", alignItems: "center" }}
    >
      <img src={JourneySectionImage} style={{ marginRight: index % 2 === 0 ? "8%" : "0", marginLeft: index % 2 !== 0 ? "6%" : "0" }} alt="" />
      <div className="PinkCircle"></div>
      <div className="VideoDiscription">
        <p>{comp.Discription}</p>
        <video autoPlay muted loop src={comp.video}></video>     
    </div>
  </div>
))}

            </div>
        </div>

        <div className="News-Redirect-Section">
          <div className="Text">
          <p className="Heading">Stay Informed with the Latest Health News</p>
          <p className="Body">We bring you relevant, up-to-date health news from trusted sources to keep you informed about medical advancements, wellness tips, and healthcare trends. Stay ahead with expert insights, research updates, and essential health alerts—all in one place.</p>
          <button className="Redirect-Button">Read Latest News<img src={ButtonIcon} alt="" /></button>
          </div>
          <div className="Redirect-Image">
            <img src={CoffeeMan} alt="" />
          </div>
        </div>
    </div>
  )
}
