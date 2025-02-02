import React from 'react'
import './SupportPage.css'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton.jsx'
import SupportPageMainImage from '../../assets/imgs/SupportPageMainImage.png'
import YellowCircle from '../../assets/icons/tick-circle-yellow.png'
import redCircle from '../../assets/icons/tick-circle-red.png'
import purpleCircle from '../../assets/icons/tick-circle-purple.png'
import TicketButtonIcon from '../../assets/icons/right-arrow-rectangle.png'
import FAQs from '../../components/FAQs/FAQs.jsx'

export default function SupportPage() {
  return (
    <div className="SupportPage">
        <div className="Hero-Section">
        <div className="SupportHeading">
        <p className="HeadingMain">Dedicated Support for Your Healthcare Needs</p>
        <p className="HeadingBody">Have questions or need help? Our team is here to assist you with quick solutions and expert guidance to ensure a seamless experience.</p>
        <div className="HeadingButtons">
            <PrimaryButton text="Raise a Ticket Now" padding='1em 5em'/>
            <SecondaryButton text="Email Us" padding='1em 7.4em'/>
        </div>
    </div>

        <div className="MainImage">
            <img src={SupportPageMainImage}  />
        </div>



        <div className="ChecklistSection">
            <div className="Checklist-1 Checklist">
                <p>Simplified Issue Reporting</p>
                <div>
                    <img src={redCircle} alt="" />
                </div>
            </div>
            <div className="Checklist-2 Checklist">
                <p> Quick and Reliable Assistance</p>
                <div>
                    <img src={YellowCircle} alt="" />
                </div>
            </div>
            <div className="Checklist-3 Checklist">
                <p>Comprehensive Query Tracking</p>
                <div>
                    <img src={purpleCircle} alt="" />
                </div></div>    
        </div>  
        </div>  

        <div className="SupportTicketDetails">
            <div className="TicketDetailsHeading">
                <p>How Do We Support You?</p>
            </div>
            <div className="TicketDetailsDiscription">
                <div className="discription">
                    <div className="Head">Ticket System</div>
                    <div className="Body">Easily submit your concerns using our ticket system. Provide details about your issue, and our team will respond promptly.</div>
                </div>
                <div className="discription">
                    <div className="Head">Direct Email Support</div>
                    <div className="Body">Prefer email? Reach out to us directly at support@curalink.com for quick assistance.</div>
                </div>
                <div className="discription">
                    <div className="Head">Real Time Updates</div>
                    <div className="Body">Track your ticket’s progress and receive updates directly to your registered email or dashboard.</div>
                </div>
            </div>
            <button className="SupportTicketButton">Open Support Ticket Now  <img src={ TicketButtonIcon} alt="" /></button>
        </div>

        <div className="SupportTicketStatus">
            <div className="TicketStatusHeading">Your Ticket</div>
            <div className="TicketStatusBody">
                <div className="StatusFields">
                    <p className="StatusField-Issue">Issue</p>
                    <p className="StatusField-Status">Status</p>
                    <p className="StatusField-Action">Action</p>
                </div>
                <div className="IssueDetails">
                    <p>Facing certain issues regarding new version</p>
                    <p className="TicketStatus">Pending</p>
                    <SecondaryButton text="View Details"/></div>
                <div className="IssueDetails">
                    <p>Facing certain issues regarding new version</p>
                    <p className="TicketStatus" >Pending</p>
                    <SecondaryButton text="View Details"/>
                </div>
                <div className="IssueDetails">
                    <p>Facing certain issues regarding new version</p>
                    <p className="TicketStatus" >Pending</p>
                    <SecondaryButton text="View Details"/>
                </div>
            </div>
        </div>

        <div className="FAQs-Section">
            <FAQs></FAQs>
        </div>

    </div>
  )
}
