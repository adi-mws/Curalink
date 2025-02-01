import React from 'react'
import './SupportPage.css'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import SupportPageMainImage from '../../assets/imgs/SupportPageMainImage.png'
import YellowCircle from '../../assets/icons/tick-circle-yellow.png'
import redCircle from '../../assets/icons/tick-circle-red.png'
import purpleCircle from '../../assets/icons/tick-circle-purple.png'

export default function SupportPage() {
  return (
    <div className="SupportPage">
        <div className="heading">
        <p className="HeadingMain">Dedicated Support for Your Healthcare Needs</p>
        <p className="HeadingBody">Have questions or need help? Our team is here to assist you with quick solutions and expert guidance to ensure a seamless experience.</p>
        <div className="HeadingButtons">
            <PrimaryButton text="Raise a Ticket Now"/>
            <SecondaryButton text="Email Us"/>
        </div>

        <div className="MainImage">
            <img src={SupportPageMainImage}  />
        </div>



        <div className="ChecklistSection">
            <div className="Checklist-1 Checklist">
                <p>Simplified Issue Reporting</p>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="Checklist-2 Checklist">
                <p> Quick and Reliable Assistance</p>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div className="Checklist-3 Checklist">
                <p>Comprehensive Query Tracking</p>
                <div>
                    <img src="" alt="" />
                </div></div>    
        </div>
        
        
    </div>
    </div>
  )
}
