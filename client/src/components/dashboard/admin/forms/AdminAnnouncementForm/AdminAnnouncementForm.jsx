import React, { useState, useEffect } from "react";
import "./AdminAnnouncementForm.css";
import { useLocation } from "react-router-dom";

const AdminAnnouncementForm = ({ showForm, setShowForm, editMode = false, editData }) => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isFeature, setIsFeature] = useState(false);

  useEffect(() => {
    if (editMode && editData) {
      setTitle(editData.title || "");
      setDescription(editData.content || "");
      setIsFeature(editData.feature || false);
    } else {
      setTitle("");
      setDescription("");
      setIsFeature(false);
    }
  }, [editMode, editData, showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { title, description, isFeature };
    console.log("Notification Sent:", data);
    // Optionally: call backend API or parent handler
    setShowForm(false); // optionally close form
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
          <h2>{editMode ? "Edit Announcement" : "New Announcement"}</h2>
          <button
            className="close-button"
            onClick={() => {
              setShowForm(false);
            }}
          >
            <img src="/icons/cut.svg" alt="close-icon" />
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
            {editMode ? "Update Announcement" : "Send Notification"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAnnouncementForm;
