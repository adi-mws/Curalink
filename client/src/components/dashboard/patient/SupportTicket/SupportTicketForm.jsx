import React, { useState } from "react";
import "./SupportTicketForm.css";
import cutIcon from "../../../../assets/icons/cutIcon.png";
import SecondaryButton from "../../../shared/buttons/SecondaryButton/SecondaryButton.jsx";
import PlusIcon from "../../../../assets/icons/PlusIcon.png";
import PrimaryButton from "../../../shared/buttons/PrimaryButton/PrimaryButton.jsx";

const SupportTicketForm = ({showTicketForm, setShowTicketForm}) => {

  return (
    <div className="SupportTicketForm" style={{display: `${showTicketForm ? 'block' : 'none'}`}}>
      <div className="form-heading">
        <h3>Describe Your Problem</h3>
        <button>
          <img src={cutIcon} alt="cutIcon" onClick={() => setShowTicketForm(false)} />
        </button>
      </div>

      <form className="support-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter Name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="text" placeholder="Enter Phone" />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Enter Message"></textarea>
        </div>

        <SecondaryButton text="Add Attachments Related to your Problem" padding=".8em 2em" image={PlusIcon} />

        <div className="submit-part">
          <p className="form-note">
            We generally reply to the tickets in a proper order so we would
            request you to have patience with your problem. For more quick
            support, don’t forget to add attachments related to your problem.
          </p>
          <PrimaryButton text="Submit Issue" />
        </div>
      </form>
    </div>
  );
};

export default SupportTicketForm;
