import axios from "axios";
import "./AdminFaqForm.css";
import { useState, useEffect } from "react";

const AdminFaqForm = ({ showForm, setShowForm, editData, editMode, setAllFaqs }) => {
  const [question, setQuestion] = useState("");
  const [audience, setAudience] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (editMode && editData) {
      setQuestion(editData.question || "");
      setAudience(editData.target_audience || "");
      setAnswer(editData.answer || "");
    }
  }, [editData, editMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { question, target_audience: audience, answer };
   try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/faqs`, formData);
    if (response.status == 201) {
      alert('Faqs created successfully')
      console.log(response.data)
    setAllFaqs(prev => [...prev, response.data.newFaq])

    }
   }
   catch(error) {
    console.error(error);
   }
    setShowForm(false);
  };

  return (
    <div className="AdminFaqForm" onClick={() => setShowForm(false)} style={{ display: showForm ? "flex" : "none" }}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>{editMode ? "Edit FAQ" : "New FAQ"}</h2>
          <button className="close-button" onClick={() => setShowForm(false)}>
            <img src="/icons/cut.svg" alt="close-icon" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="question">Question</label>
          <input type="text" id="question" placeholder="Enter Question" value={question} onChange={(e) => setQuestion(e.target.value)} />

          <label htmlFor="audience">Target Audience</label>
          <select id="audience" value={audience} onChange={(e) => setAudience(e.target.value)}>
            <option value="">Select Audience</option>
            <option value="all">All</option>
            <option value="patients">Patients</option>
            <option value="doctors">Doctors</option>
          </select>

          <label htmlFor="answer">Answer</label>
          <textarea id="answer" placeholder="Enter Answer" value={answer} onChange={(e) => setAnswer(e.target.value)}></textarea>

          <button type="submit" className="submit-button">{editMode ? "Update FAQ" : "Add FAQ"}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminFaqForm;
