import React, { useState, useEffect } from "react";
import './AdminServicesForm.css';

const AdminServiceForm = ({ showForm, setShowForm, editMode = false, editData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (editMode && editData) {
      setName(editData.name || "");
      setDescription(editData.description || "");
      setImageFile(null); // Avoid pre-filling the file input for security
    } else {
      setName("");
      setDescription("");
      setImageFile(null);
    }
  }, [editMode, editData, showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      image: imageFile ? URL.createObjectURL(imageFile) : editData?.image || "",
    };
    console.log(editMode ? "Editing Service:" : "Creating Service:", data);
    setShowForm(false);
  };



  return (
    <div
      className="AdminServicesForm"
      style={{ display: showForm ? 'flex' : 'none' }}
      onClick={() => setShowForm(false)}
    >
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>{editMode ? "Edit Service" : "New Service"}</h2>
          <button onClick={() => setShowForm(false)}>
            <img src="/icons/cut.svg" alt="close-icon" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter service name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Description</label>
          <textarea
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <div className="file-upload-wrapper">
            <label htmlFor="imageUpload">Upload Image</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />
            {imageFile && <p className="file-name">{imageFile.name}</p>}
          </div>

          <button type="submit">{editMode ? "Update Service" : "Add Service"}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminServiceForm;
