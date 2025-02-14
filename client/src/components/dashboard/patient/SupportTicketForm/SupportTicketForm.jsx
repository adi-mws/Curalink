import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./SupportTicketForm.css";
import cutIcon from "../../../../assets/icons/cutIcon.png";
import PlusIcon from "../../../../assets/icons/PlusIcon.png";
import PrimaryButton from "../../../shared/buttons/PrimaryButton/PrimaryButton.jsx";

const SupportTicketForm = ({ showTicketForm, setShowTicketForm }) => {
  const [files, setFiles] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = {};
    Object.entries(data).forEach(([key, value]) => {
      formData[key] = value;
    });
    formData.attachments = files;
    console.log("Form Data:", formData);
    reset();
    setFiles([]);
  };

  return (
    <div className="SupportTicketForm" style={{ transition: '.3s',  opacity: `${showTicketForm ? 1 : 0}`, transform: `${showTicketForm ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showTicketForm ? '95vw' : '0%'}`, height: `${showTicketForm ? '90vh' : '0%'}`, top: '45%', left: '50%' }}>    
      <div className="form-heading">
        <p className="support-ticket-form-heading">Describe Your Problem</p>
        <button>
          <img src={cutIcon} alt="cutIcon" onClick={() => setShowTicketForm(false)} />
        </button>
      </div>

      <form className="support-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group-container">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter Name" {...register("name", { required: true })} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter Email" {...register("email", { required: true })} />
          </div>
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="text" placeholder="Enter Phone" {...register("phone", { required: true })} />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Enter Message" {...register("message", { required: true })}></textarea>
        </div>

        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="attachment-file-item">
              <span>{file.name}</span>
              <button type="button" onClick={() => {
                const newFiles = [...files];
                newFiles.splice(index, 1);
                setFiles(newFiles);
              }}>
                <img src={cutIcon} alt="remove file" />
              </button>
            </div>
          ))}
        </div>

        <label htmlFor="patient-support-ticket-attachment" className="patient-support-ticket-attachment-label">
          <img src={PlusIcon} alt="PlusIcon" />
          <p>Add Attachments Related to your Problem</p>
        </label>
        <input
          type="file"
          id="patient-support-ticket-attachment"
          style={{ display: 'none' }}
          multiple
          onChange={(e) => {
            const selectedFiles = Array.from(e.target.files);
            setFiles([...files, ...selectedFiles]);
          }}
        />

        <div className="submit-part">
          <p className="form-note">
            We generally reply to the tickets in a proper order so we would
            request you to have patience with your problem. For more quick
            support, don't forget to add attachments related to your problem.
          </p>
          <PrimaryButton text="Submit Issue and Open Ticket" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SupportTicketForm;