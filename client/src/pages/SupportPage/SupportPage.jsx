import React, { useState } from 'react'
import './SupportPage.css'
import MainImage from '../../assets/imgs/SupportPageMainImage.png'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/shared/buttons/SecondaryButton/SecondaryButton'
import FAQs from '../../components/FAQs/FAQs'
import tickCircleYellow from '../../assets/icons/tick-circle-yellow.png'
import tickCircleRed from '../../assets/icons/tick-circle-red.png'
import tickCirclePurple from '../../assets/icons/tick-circle-purple.png'
import ButtonIcon from '../../assets/icons/right-arrow-rectangle.png'
import SupportTicketForm from '../../components/dashboard/patient/SupportTicketForm/SupportTicketForm'

export default function SupportPage() {

    const [showTicketForm, setShowTicketForm] = useState(false);

    const supportTickets = [
        { issue: "Unable to log in to the portal", status: "Open" },
        { issue: "Payment not processed after transaction", status: "In Progress" },
        { issue: "Website loading slowly for users", status: "Open" },
        { issue: "Error 404 on clicking the 'Help' page", status: "Resolved" },
        { issue: "Mobile app crashes on startup", status: "In Progress" },
        { issue: "Email notifications not being sent", status: "Open" },
        { issue: "Password reset link not working", status: "Closed" },
        { issue: "Video not playing on streaming platform", status: "In Progress" },
        { issue: "User profile images not updating", status: "Resolved" },
        { issue: "Live chat support not responding", status: "Pending Review" }
    ];
    
  return (
    <div className='SupportPage'>
        <SupportTicketForm  showTicketForm={showTicketForm} setShowTicketForm={setShowTicketForm} /> 
        <div className="Hero-Section">
            <div className="Hero-Content">
                <p className="Heading">Dedicated Support for Your Healthcare Needs</p>
                <p className="Description">Our support team is here to help you with any questions or concerns you may have. We are dedicated to providing you with the best possible service.</p>
                <div className="Buttons">
                    <div className="Button-Container">
                        <PrimaryButton text="Raise a Ticket" onClick={() => setShowTicketForm(true)} padding="0.5em 5em" borderRadius="7.41px" width="100%"/>
                    </div>
                    <div className="Button-Container">
                        <SecondaryButton text="Email Us" padding="0.5em 5em" borderRadius="7.41px" width="100%"/>
                    </div>
                </div>
            </div>
            <img src={MainImage} alt="" className="mainImage" />
            <div className="Checklist-Section">
                <div style={{backgroundColor:"#FFD9D9"}} className="Checklist">Simplified Issue Reporting <div className="CheckImage"><img src={tickCircleRed} alt="" /></div> </div>
                <div style={{backgroundColor:"#F8FBA5"}} className="Checklist">Quick and Reliable Assistance<div className="CheckImage"><img src={tickCircleYellow} alt="" /></div> </div>
                <div style={{backgroundColor:"#F3D9FF"}} className="Checklist">Comprehensive Query Tracking<div className="CheckImage"><img src={tickCirclePurple} alt="" /></div> </div>
            </div>
        </div>

        <div className="Support-Section">
            <div className="Heading">How We Support You?</div>
            <div className="Support-Methods">
                <div className="Method">
                    <p className="Head">Ticket System</p>
                    <p className="Body">Easily submit your concerns using our ticket system. Provide details about your issue, and our team will respond promptly.</p>
                </div>
                <div className="Method">
                    <p className="Head">Email Support</p>
                    <p className="Body">Prefer email? Reach out to us directly at support@curalink.com for quick assistance.</p>
                </div>
                <div className="Method">
                    <p className="Head">Real TIme Updates</p>
                    <p className="Body">Track your ticket's progress and receive updates directly to your registered email or dashboard.</p>
                </div>
            </div>
            <button className="Support-Button" onClick={() => setShowTicketForm(true)}>Open Support Ticket Now <img src={ButtonIcon} alt="" /></button>
        </div>

        <div className="Status-Section">
            <div className="Heading">Your Tickets</div>
            <div className="Status-Container">
                <div className="Status-headings">
                    <div className="Issue-Head">Issue</div>
                    <div className="status-Head">Status</div>
                    <div className="Actions-Head">Actions</div>
                </div>
                {supportTickets.map((ticket, index) => (
                    <div className="Ticket" key={index}>
                        <div  className="Ticket-Issue">{ticket.issue}</div>
                        <div style={{color: ticket.status === "Open" ? "#FFD9D9" : ticket.status === "In Progress" ? "#A4A434" : "#F3D9FF"}} className="Ticket-Status">{ticket.status}</div>
                        <button><SecondaryButton text="View Details" textWrap="nowrap" padding="0.8em 4em" borderRadius="7.41px" width="100%"/></button>
                    </div>
                ))}
            </div>
        </div>
        <div className="FAQ-Section">
            <FAQs/>
        </div>
    </div>
  );
}
