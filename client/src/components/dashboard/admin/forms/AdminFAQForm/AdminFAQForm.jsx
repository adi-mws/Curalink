import "./AdminFAQForm.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./AdminFAQForm.css"; // Reuse refactored CSS

const FaqForm = ({showForm, setShowForm}) => {
  const [question, setQuestion] = useState("");
  const [audience, setAudience] = useState("Patient");
  const [answer, setAnswer] = useState("");
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { question, audience, answer };
    console.log("FAQ Submitted:", formData);
    // Add actual submission logic here
  };

  return (
    <div
      className="AdminFAQForm"
      onClick={() => {
        setShowForm(false);
      }}
      style={{ display: showForm ? "flex" : "none" }}
    >
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <div className="form-header">
          <h2>FAQ</h2>
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
          <label htmlFor="question">Question</label>
          <input
            type="text"
            id="question"
            placeholder="Enter Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <label htmlFor="audience">Target Audience</label>
          <select
            id="audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          >
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Individual">Everyone</option>
          </select>

          <label htmlFor="answer">Answer</label>
          <textarea
            id="answer"
            placeholder="Enter Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

          <button type="submit" className="submit-button">
            Send Notification
          </button>
        </form>
      </div>
    </div>
  );
};

export default FaqForm;
