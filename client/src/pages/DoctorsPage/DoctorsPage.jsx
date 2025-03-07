import './DoctorsPage.css'
import React from 'react'
import MainHeroImage from '../../assets/imgs/heroDoctorPage.png'
import FAQs from '../../components/FAQs/FAQs.jsx'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import DummyVideo from '../../assets/videos/DoctorsPageDummyVideo.mp4'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import SupportStaff from '../../assets/imgs/Support-Staff-1.png'
import TestimonialsImage from '../../assets/imgs/Surgeon-With-Mask.png'
import JoinButtonImage from '../../assets/icons/right-arrow-rectangle.png'
import { useSideBarState } from '../../contexts/SideBarStateContext.jsx';
import { useEffect } from 'react';
export default function DoctorsPage() {
  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState('doctors');
  }, []);
  const doctors = [
    {
        TestimonialsImage: TestimonialsImage,
        name: "Dr. Emily Carter",
        specialization: "Cardiologist",
        testimonial: "The patient communication features are top-notch. I can manage appointments, share reports, and follow up with patients seamlessly."
    },
    {
        TestimonialsImage: TestimonialsImage,
        name: "Dr. Rajesh Malhotra",
        specialization: "Neurologist",
        testimonial: "Managing patient records has never been easier. The seamless integration of reports and scheduling makes my work so much more efficient."
    },
    {
        TestimonialsImage: TestimonialsImage,
        name: "Dr. Sophia Martinez",
        specialization: "Dermatologist",
        testimonial: "This platform has revolutionized my practice. From consultations to follow-ups, everything is smooth and well-organized."
    }
];

console.log(doctors);

  return (
    <div className="DoctorsPage">
      
        <div style={{backgroundImage:`url(${MainHeroImage})`}} className="Hero-Section">
          <div className="Text-Content">
            <div className="Hero-content">
                <p className="Heading">Join Us in Revolutionizing Healthcare</p>
                <p className="Body">Become a part of our mission to provide exceptional care through innovation, compassion, and expertise. Together, let's transform lives and shape the future of online healthcare.</p>
                <PrimaryButton text="Join Us" width='12em'/>
            </div>
             
            
            <div className="Hero-Merits">
              <div className="Merit-1">
                <p className="Merit-Head">80+</p>
                <p className="Merit-Body">Specialists</p>
              </div>
              <div className="Merit-2">
                <p className="Merit-Head">27/7</p>
                <p className="Merit-Body">Support</p>
              </div>
              <div className="Merit-3">
                <p className="Merit-Head">10%</p>
                <p className="Merit-Body">Platform Charge</p>
              </div>
            </div>
            </div>
        </div>

        <div className="Video-Section">
          <p className="Video-Heading">Experience the Power of Seamless Healthcare Management</p>
          <p className="Video-Text">Streamline your workflow with our Doctor's Dashboard – manage appointments, review reports, and connect with patients effortlessly, all in one place.</p>
          <div className="DashBoardVideo">
            <video autoPlay controls muted src={DummyVideo}></video>
          </div>
        </div>
        
        <div className="Perks-Section">
          <p className="Perks-Heading">Major Perks of Partnering with Us</p>
          <div className="Perks-Body">
            <div className="perks">
              <p className="Heading">Flexible Work Hours</p>
              <p className="Body">Set your availability and consult with patients at times that suit your schedule.</p>
            </div>
            <div className="perks">
              <p className="Heading">Wider Patient Reach</p>
              <p className="Body">Expand your practice by connecting with patients across regions from the comfort of your workspace.</p>
              </div>
            <div className="perks">
              <p className="Heading">Secure Platform</p>
              <p className="Body">Enjoy encrypted communication and data storage, ensuring complete confidentiality for you and your patients.</p>
              </div>
            <div className="perks">
              <p className="Heading">Streamlined Workflow</p>
              <p className="Body">Manage appointments, patient records, and consultations effortlessly through an intuitive dashboard.</p>
              </div>
            <div className="perks">
              <p className="Heading">Growth Opportunities</p>
              <p className="Body">Build your online presence and enhance your career with our growing network of professionals.</p>
              </div>
            <div className="perks">
              <p className="Heading">Dedicated Support</p>
              <p className="Body">Access 24/7 technical and operational support to help you focus on providing excellent care.</p>
            </div>
          </div>
        </div>

        <div className="Communication-Section">  
        <div className="Demo-Video-Subject">
          <p className="Communication-Heading">Seamless Patient Communication at Your Fingertips</p>
          <p className="Communication-Body">Connect with your patients effortlessly through our advanced communication tools. Whether it's answering queries, providing follow-ups, or conducting consultations, our platform ensures a smooth and secure interaction between you and your patients.</p>
          <div className="Demo-Video-Button">
            <PrimaryButton text = "Play Demo Video"/>
            <SecondaryButton text="Register Now"/>
          </div>
        </div>
          <img className="Communication-image" src={SupportStaff} alt="" />
        </div>

        

        <div className="Doctor-Testimonials-Section">
          <p className="Tetimonial-Heading">Voices of Our Trusted Doctors</p>
          <p className="Testimonial-Body">Don’t just take our word for it – hear from the healthcare professionals who trust us.</p>
          <div className="Testimonial-Cards">
            {doctors.map((doctor) => (
              <div className="Testimonial">
              <img src={TestimonialsImage} alt="" className="Testimonial-Image" />
              <p className="Doctors-Name">{doctor.name}</p>
              <p className="Doctors-Specialization">{doctor.specialization}</p>
              <p className="Doctors-Testimonial">{doctor.testimonial}</p>
            </div>
            ))}
          </div>
        </div>

        <div className="Join-request-Section">
          <p className="heading">Join Us and Transform Healthcare Together</p>
          <p className="Description">Become part of a revolutionary platform designed to empower doctors and improve patient care. With cutting-edge tools, secure communication, and a growing network of professionals, you’ll be equipped to deliver exceptional care anytime, anywhere. Together, let’s redefine the future of online healthcare.</p>
          <div className="Joining-Perks-Container">
          <div className="Joining-Perk"><p >Work with flexibility and freedom</p></div>
          <div className="Joining-Perk"><p>Leverage powerful tools for streamlined care.</p></div>
          <div className="Joining-Perk"><p>Reach more patients effortlessly</p></div>
          </div>
          <button className="Join-Button">Join Us Now <img src={JoinButtonImage} alt="" /></button>
        </div>

        <div className="FAQs-Section">
          <FAQs/>
        </div>
    </div>
  )
}
