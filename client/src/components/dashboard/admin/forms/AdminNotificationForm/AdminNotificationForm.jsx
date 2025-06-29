import React, { useState, useEffect } from "react";

const AdminNotificationForm = ({ showForm, setShowForm, editMode = false, editData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("all_doctors");
  const [individualEmail, setIndividualEmail] = useState("");

  useEffect(() => {
    if (editMode && editData) {
      setTitle(editData.title || "");
      setDescription(editData.description || "");
      setTargetAudience(editData.recipient || "all_doctors");
      setIndividualEmail((editData.recipient === 'patient_individual' || editData.recipient === 'doctor_individual') ? (editData.email || "") : "");
    } else {
      setTitle("");
      setDescription("");
      setTargetAudience("all_doctors");
      setIndividualEmail("");
    }
  }, [editMode, editData, showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      recipient: targetAudience,
      email: (targetAudience === 'patient_individual' || targetAudience === 'doctor_individual') ? individualEmail : ''
    };
    console.log(data);
    setShowForm(false);
  };

  return (
    <div className="AdminNotificationForm" style={{ display: showForm ? 'flex' : 'none' }}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>{editMode ? "Edit Notification" : "Post Notification"}</h2>
          <button onClick={() => setShowForm(false)}><img src='/icons/cut.svg' /></button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Target Audience</label>
          <select value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)}>
            <option value="all_doctors">All Doctors</option>
            <option value="all_patients">All Patients</option>
            <option value="patient_individual">Patient Individual</option>
            <option value="doctor_individual">Doctor Individual</option>
          </select>

          {(targetAudience === 'patient_individual' || targetAudience === 'doctor_individual') && (
            <>
              <label>Email</label>
              <input type="email" placeholder='Enter email' value={individualEmail} onChange={(e) => setIndividualEmail(e.target.value)} />
            </>
          )}

          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description"></textarea>

          <button type="submit">{editMode ? "Edit Notification" : "Post Notification"}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminNotificationForm;
