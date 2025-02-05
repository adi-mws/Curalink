import './DoctorsPage.css'
import React from 'react'
import MainHeroImage from '../../assets/imgs/heroDoctorPage.png'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import DummyVideo from '../../assets/videos/DoctorsPageDummyVideo.mp4'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import SupportStaff from '../../assets/imgs/Support-Staff-1.png'

export default function DoctorsPage() {
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
          <div className="Communication-image">
          <img src={SupportStaff} alt="" />
       </div>
        </div>

        

        <div className="Doctor-Testimonials-Section"></div>

        <div className="Join-request-Section"></div>

        <div className="FAQs-Section"></div>
    </div>
  )
}
