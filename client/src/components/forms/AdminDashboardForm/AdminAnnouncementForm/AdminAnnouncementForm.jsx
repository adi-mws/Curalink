import React, { useState } from "react";
import "./AdminAnnouncementForm.css";
import { Link, useLocation } from "react-router-dom";

const AdminAnnouncementForm = ({ showForm, setShowForm }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFeature, setIsFeature] = useState(false);
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, isFeature };
    console.log("Notification Sent:", data);
  };
  return (
    <div
      className="AdminAnnouncementForm"
      onClick={() => {
        setShowForm(false);
      }}
      style={{ display: showForm ? "flex" : "none" }}
    >
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>Announcement</h2>
          <button
            className="close-button"
            onClick={() => {
              setShowForm(false);
            }}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description</label>
          <textarea
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="checkbox-container">
            <input
              type="checkbox"
              checked={isFeature}
              onChange={() => setIsFeature(!isFeature)}
              id="feature"
            />
            <label htmlFor="feature">
              This announcement is related to feature.
            </label>
          </div>

          <button type="submit" className="submit-button">
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAnnouncementForm;
