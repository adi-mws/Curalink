import React from 'react'
import './AppointmentDetails.css'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader.jsx'
import PrimaryButton from '../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import DocImags from '../../../../assets/icons/Document.svg'

export default function AppointmentDetails() {
  const details = [
    { label: 'Appointment Time', value: '9:30 PM - 9:40 PM' },
    { label: 'Prescription Duration', value: 'None' },
    { label: 'Follow Up', value: 'None' },
  ];

  const section2Data = [
    { label: 'Tests', value: 'Blood Test, Skin Allergy Test' },
    { label: 'Follow Up Requirement', value: 'Yes' },
    { label: 'Treatment', value: 'Mild acne, prescribed cream and advised hydration' },
    { label: 'Follow Up Date', value: '08-01-2025' },
  ];

  const attachments = ['Attachment 1', 'Attachment 2', 'Attachment 3'];

  const reports = [
    { test: 'Blood Test', file: 'blood-test-report.pdf' },
    { test: 'Blood Test', file: 'blood-test-report.pdf' },
  ];

  const medications = [
    'AcneMed gel',
    'AcneMed gel',
    'AcneMed gel',
    'AcneMed gel',
  ];

  return (
    <>
      <DashboardHeader title="Appointment Details | Ankit Singh" />
      <div className='AppointmentDetails'>
        <div className="section-1">
          <div className="headLine">
            <p>Dr. Harsh Mehta</p>
            <p style={{ color: "var(--primary-color)" }}>04-01-2024</p>
            <p style={{ color: "green" }}>Active Prescription</p>
            <p style={{ fontWeight: "500" }}> Dermatology</p>
          </div>
          <div className="Details">
            {details.map((item, i) => (
              <div className='DetailsSegments' key={i}>
                <p>{item.label}</p>
                <p style={{ color: "var(--primary-color)" }}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className="StartAppointment">
            <p style={{ color: "var(--primary-color)" }}>Time Left (9:00) Start Appointment</p>
            <PrimaryButton text="Start Appointment" />
          </div>
        </div>

        <div className="section-2">
          {section2Data.map((item, i) => (
            <div className="div" key={i}>
              <p>{item.label}</p>
              <p style={{ color: "var(--gray-text)" }}>{item.value}</p>
            </div>
          ))}
        </div>

        <div className="section-3">
          <p style={{ fontWeight: "700" }}>Problem Information  (By Patient)</p>
          <p style={{ fontWeight: "500" }}>Attachment</p>
          <p style={{ width: "70%" }}>I am experiencing mild acne and irritation on the face for the past 2 weeks.</p>
          <div className='Attachments'>
            {attachments.map((label, i) => (
              <div className='Attachment' key={i}>
                <p>{label}</p>
                <button><img src={DocImags} alt={label} /></button>
              </div>
            ))}
          </div>
        </div>

        <div className="section-4">
          <div className="section-4Heading">
            <p style={{ fontWeight: "bold" }}>Prescriptions</p>
          </div>
          <div>
            <p style={{ fontWeight: "500" }}>Test Reports   (Try to upload in PDF format)</p>
            {reports.map((r, i) => (
              <div key={i}>
                <p>{r.test}</p>
                <p>{r.file}</p>
                <img src={DocImags} alt={r.test} />
              </div>
            ))}
          </div>

          <div>
            <div className='DiagAndTreat'>
              <p>Diagnosis</p>
              <p style={{ color: "var(--gray-text)" }}>Mild acne and irritation on the face for the past 2 weeks</p>
            </div>
            <div className='DiagAndTreat'>
              <p>Treatment</p>
              <p style={{ color: "var(--gray-text)" }}>Mild acne and irritation on the face for the past 2 weeks</p>
            </div>
          </div>
        </div>

        <div className="section-5">
          <div className="section-5Heading">Medication</div>
          {medications.map((med, i) => (
            <div className='MedicationDetail' key={i}>
              <p style={{ color: "var(--primary-color)" }}>{med}</p>
              <p>Dosage:  1 time in a day</p>
              <p style={{ color: "var(--gray-text)" }}>Duration:14 Days</p>
              <p style={{ color: "var(--gray-text)" }}>Wash your face gently before applying</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
