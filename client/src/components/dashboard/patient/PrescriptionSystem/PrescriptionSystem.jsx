import React from "react";
import "./PrescriptionSystem.css";
import DashboardHeader from "../../../layout/DashboardHeader/DashboardHeader";
import TertiaryButton from "../../../shared/buttons/TertiaryButton/TertiaryButton";

const PrescriptionSystem = () => {
  const prescriptions = [
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
    {
      appointmentWith: "Dr. Aashish Kumar",
      category: "General Healthcare",
    },
  ];

  return (
    <div className="PrescriptionSystem">
      <DashboardHeader title={"Prescription System"}> </DashboardHeader>

      <div className="PrescriptionSystemContent">
        <div className="prescription-headers">
          <span>Appointment With</span>
          <span className="hideCategory">Category</span>
          <span>Actions</span>
        </div>
        {prescriptions.map((prescription, index) => (
          <div className="prescription-rows" key={index}>
            <span>{prescription.appointmentWith}</span>
            <span className="hideCategory">{prescription.category}</span>
            <TertiaryButton text="Full Details" textWrap="nowrap" padding="1em 0.5em"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrescriptionSystem;
