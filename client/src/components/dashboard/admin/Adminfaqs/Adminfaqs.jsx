import React, { useState, useEffect } from 'react';
import './AdminFaqs.css';
import '../admin.css';
import cutIcon from '../../../../assets/icons/cutIcon.png';
import editIcon from '../../../../assets/icons/edit.png';
import deleteIcon from '../../../../assets/icons/trash.png';
import searchIcon from '../../../../assets/icons/search-normal.png';
import truncateTextByLetter from '../../../../utils/textFormatter';
import AdminFaqForm from '../forms/AdminFaqForm/AdminFaqForm';

export default function AdminFaqs() {
  const faq_items = [
    { question: "What is the refund policy?", answer: "Refunds are processed within 5-7 business days.", target_audience: "all" },
    { question: "How do I book an appointment?", answer: "You can book through our app or website.", target_audience: "patients" },
    { question: "Are video consultations secure?", answer: "Yes, all consultations are encrypted.", target_audience: "doctors" }
  ];

  const [allFaqs, setAllFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFaq, setSelectedFaq] = useState({});
  const [editData, setEditData] = useState({});
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setAllFaqs(faq_items);
  }, []);

  const filteredFaqs = allFaqs.filter(q => q.question.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleFormClose = (val) => {
    setShowForm(val);
    if (!val) {
      setEditMode(false);
      setEditData({});
    }
  };

  return (
    <div className='AdminFaqs admin-page'>
      <div className="faqs-header admin-page-header">
        <p className="header-title">FAQs</p>
        <div className="search-bar-wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder='Search FAQs'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='search-submit-button'>
            <img src={searchIcon} alt="search-icon" />
          </button>
        </div>
        <div className="header-controls">
          <button onClick={() => setShowForm(true)}>New FAQ</button>
        </div>
      </div>

      <div className="faqs-body admin-page-body">
        {filteredFaqs.length === 0 ? (
          <p>No FAQs Found</p>
        ) : (
          filteredFaqs.map((q, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedFaq(q);
                setShowDetailsPopup(true);
              }}
              className="faq-item"
            >
              <p className="faq-question">{truncateTextByLetter(q.question, 25)}</p>
              <div className="faq-control admin-control">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditMode(true);
                    setEditData(q);
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
          className="faq-details admin-page-item-details"
          style={{ display: showDetailsPopup ? 'flex' : 'none' }}
        >
          <div className="head">
            <p className="title">FAQ Details</p>
            <div className="faq-control control">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setEditData(selectedFaq);
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
              <p className="faq-question-name">{selectedFaq.question}</p>
            </div>
            <p className="faq-answer">{selectedFaq.answer}</p>
            <p className="faq-tag-wrapper">Target Audience: {selectedFaq.target_audience}</p>
          </div>
        </div>
      </div>

      <AdminFaqForm
        showForm={showForm}
        setShowForm={handleFormClose}
        editData={editData}
        editMode={editMode}
      />
    </div>
  );
}
