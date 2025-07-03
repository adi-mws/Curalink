import React, { useState, useEffect } from 'react';
import './AdminServices.css';
import '../admin.css';
import cutIcon from '../../../../assets/icons/cutIcon.png';
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/trash.png';
import searchIcon from '../../../../assets/icons/search-normal.png';
import truncateTextByLetter from '../../../../utils/textFormatter';
import AdminServicesForm from '../forms/AdminServicesForm/AdminServicesForm';

export default function AdminServices() {
  const service_items = [
    { name: "24/7 Support", description: "Round-the-clock support for all users.", averageTime: 30, image: "/images/support.png" },
    { name: "Video Consultations", description: "High-quality video calls with doctors.", averageTime: 20, image: "/images/video.png" },
    { name: "Prescription Management", description: "Easy upload and track prescriptions.", averageTime: 15, image: "/images/prescription.png" }
  ];

  const [allServices, setAllServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState({});
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setAllServices(service_items);
  }, []);

  const filteredServices = allServices.filter(service => service.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleFormClose = (val) => {
    setShowForm(val);
    if (!val) {
      setEditMode(false);
      setEditData({});
    }
  };

  return (
    <div className='AdminServices admin-page'>
      <div className="services-header admin-page-header">
        <p className="header-title">Services</p>
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder='Search Services'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='search-submit-button'>
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
        <div className="header-controls">
          <button onClick={() => setShowForm(true)}>New Service</button>
        </div>
      </div>

      <div className="services-body admin-page-body">
        {filteredServices.length === 0 ? (
          <p>No Services Found</p>
        ) : (
          filteredServices.map((service, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedService(service);
                setShowDetailsPopup(true);
              }}
              className="service-item"
            >
              <p className="service-name">{service?.name}</p>
              <div className="service-control admin-control">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditMode(true);
                    setEditData(service);
                    setShowForm(true);
                  }}
                >
                  <img src={editIcon} alt="edit-icon" />
                </button>
                <button onClick={(e) => e.stopPropagation()}>
                  <img src={deleteIcon} alt="delete-icon" />
                </button>
              </div>
            </div>
          ))
        )}

        <div
          className="service-details admin-page-item-details"
          style={{ display: showDetailsPopup ? 'flex' : 'none' }}
        >
          <div className="head">
            <p className="title">Service Details</p>
            <div className="service-control control">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditData(selectedService);
                  setEditMode(true);
                  setShowForm(true);
                }}
              >
                <img src={editIcon} alt="edit-icon" />
              </button>
              <button>
                <img src={deleteIcon} alt="delete-icon" />
              </button>
              <button className='closebtn' onClick={() => setShowDetailsPopup(false)}>
                <img src={cutIcon} alt="close-btn" />
              </button>
            </div>
          </div>

          <div className="body">
            <div className="body-head">
              <p className="service-name">{selectedService.name}</p>
              <p className="service-time">{selectedService.averageTime} mins</p>
            </div>
            {selectedService.image && (
              <img className="service-image" src={selectedService.image} alt="service-img" />
            )}
            <p className="service-description">{selectedService.description}</p>
          </div>
        </div>
      </div>

      <AdminServicesForm
        showForm={showForm}
        setShowForm={handleFormClose}
        editData={editData}
        editMode={editMode}
      />
    </div>
  );
}