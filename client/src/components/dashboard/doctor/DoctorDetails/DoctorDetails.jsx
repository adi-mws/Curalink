
import {React, useState} from 'react'
import './DoctorDetails.css'
import GallaryEdit from '../../../../assets/icons/gallery-edit.png'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader';
import PrimaryButton from '../../../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import editIcon from '../../../../assets/icons/edit-icon.png'
import doctorPfp from '../../../../assets/imgs/DoctorDashboardImage.png'
import documentIcon from '../../../../assets/icons/document-text.png'
import addSquare from '../../../../assets/icons/add-square.png'
import UpdateInfoForm1 from '../forms/UpdateInfoForm/UpdateInfoForm1.jsx';
import UpdateInfoForm2 from '../forms/UpdateInfoForm/UpdateInfoForm2.jsx';
import UpdateInfoForm3 from '../forms/UpdateInfoForm/UpdateInfoForm3.jsx';
import EducationForm from '../forms/EducationForm/EducationForm.jsx';
import ExperienceForm from '../forms/ExperienceForm/ExperienceForm.jsx';
import AddQualification from '../forms/QualificationForm/AddQualification.jsx';
import ShowServices from '../forms/ServiceForm/ShowServices.jsx';
import AddService from '../forms/ServiceForm/AddService.jsx';
import ShowQualification from '../forms/QualificationForm/ShowQualification.jsx';

export default function DoctorDetails() {
  const doctorCategories = [
    "Cardiologist",  
    "Dermatologist",  
    "Neurologist",  
    "Pediatrician",  
    "Orthopedic Surgeon",  
    "Psychiatrist",  
    "Oncologist"
];

  const [showUpdateInfoForm1, setShowUpdateInfoForm1] = useState(false);
  const [showUpdateInfoForm2, setShowUpdateInfoForm2] = useState(false);
  const [showUpdateInfoForm3, setShowUpdateInfoForm3] = useState(false);
  const [showAddServiceForm, setShowAddServiceForm] = useState(false);
  const [showShowServiceForm, setShowShowServiceForm] = useState(false);
  const [showAddQualificationForm, setShowAddQualificationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showShowQualification, setShowShowQualification] = useState(false);


  return (
    <div className='DoctorDetails'>
      <DashboardHeader title='Your Profile' />
      <div className="DoctorDetail-content">
    <UpdateInfoForm1 showUpdateInfoForm1={showUpdateInfoForm1} setShowUpdateInfoForm1={setShowUpdateInfoForm1}/>
    <UpdateInfoForm2 showUpdateInfoForm2={showUpdateInfoForm2} setShowUpdateInfoForm2={setShowUpdateInfoForm2}/>
    <UpdateInfoForm3 showUpdateInfoForm3={showUpdateInfoForm3} setShowUpdateInfoForm3={setShowUpdateInfoForm3}/>
    <AddQualification showAddQualificationForm={showAddQualificationForm} setShowAddQualificationForm={setShowAddQualificationForm}/>
    <EducationForm showEducationForm={showEducationForm} setShowEducationForm={setShowEducationForm}/>
    <AddService showAddServiceForm={showAddServiceForm} setShowAddServiceForm={setShowAddServiceForm}/>
    <ShowServices showShowServiceForm={showShowServiceForm} setShowShowServiceForm={setShowShowServiceForm}/>
    <ExperienceForm showExperienceForm={showExperienceForm} setShowExperienceForm={setShowExperienceForm}/>
    <ShowQualification showShowQualification={showShowQualification} setShowShowQualification={setShowShowQualification} />
        <div className="hero-section">
          <div className="details">
            <p className="name">Simran Singh <img style={{cursor:"pointer"}} onClick={() => {setShowUpdateInfoForm1(!showUpdateInfoForm1)}} src={editIcon} alt="" /></p>
            <div className="gender">Female</div>
            <div className="age">29 years old</div>
            <PrimaryButton text = 'View Profile' width='14rem'></PrimaryButton>
          </div>
          <div className="doctors-message">
            <div className="heading">Doctor's Message <img style={{cursor:"pointer"}} onClick={() => {setShowUpdateInfoForm3(true)}} src={editIcon} alt="" /></div>
            <div className="Message">I am dedicated to providing personalized and compassionate care to my patients. With over 10 years of experience, my goal is to help you achieve the best possible health outcomes.</div>

          </div>
          <div className="profile-picture">
            <img className='pfp' src={doctorPfp} alt="" />
            <button className="edit-profile">
              <img src={GallaryEdit} alt="" />
              <p>Profile Picture</p>
            </button>
          </div>
        </div>

        <div className="personal-information">
          <div className="infos-heading">
            <p>Personal information</p>
            <img style={{cursor:"pointer"}} onClick={() => {setShowUpdateInfoForm2(!showUpdateInfoForm2)}} src={editIcon} alt="" />
          </div>
          <div className="infos">
            <p>Contact No</p>
            <p className='value'>+91 93409823492</p>
          </div>
          <div className="infos">
            <p>Email Id</p>
            <p className='value'>simran@gmail.com</p>
          </div>
          <div className="infos">
            <p>Address</p>
            <p className='value'>Digha Ghat, Patna - 800001</p>
          </div>
        </div>

        <div className="Qualification-Documents">
          <div className="heading">
            <p>Qualification Documents</p>
            <img style={{cursor:"pointer"}} onClick={()=>{setShowShowQualification(true)}}  src={editIcon} alt="" />
          </div>
          <div className="document">
            <p>Cardiologist Certification</p>
            <img src={documentIcon} alt="" />
          </div>
          <div className="document">
            <p>Timb University Specilist</p>
            <img src={documentIcon} alt="" />
          </div>
          <div className="document">
            <p>MS Certification</p>
            <img src={documentIcon} alt="" />
          </div>
          <div className="document">
            <p>MBBS Certification</p>
            <img src={documentIcon} alt="" />
          </div>
          <button onClick={() => {setShowAddQualificationForm(true)}} className='Add-New'><img src={addSquare} alt=""  /> Add New</button>
        </div>

        <div className="services-section">
          <div className="Heading">
            <p className="head-text">Services</p>
            <img style={{cursor:"pointer"}} src={editIcon} onClick={() => {setShowShowServiceForm(true)}} alt="" />
          </div>

          {doctorCategories.map((category) => (
            <p className="category">{category}</p>
          ))}
          <button onClick={()=>{setShowAddServiceForm(true)}} className='Add-New'><img src={addSquare} alt="" /> Add New</button>          
        </div>

        <div className="Education-section">
          <div className="Heading">Education</div>
          <div className="Education">
            <div className="college">AIMS Delhi</div>
            <div className="degree">Bachelor of medicine, Bachelor of Surgery</div>
            <div className="duration">2005 - 2011</div>
          </div>

          <button onClick={() => {setShowEducationForm(true)}} className="Add-More">
            <img src={addSquare} alt="" />
          </button>
        </div>

        <div className="Experience-section">
          <p className="Heading">Experiences</p>
          <div className="Education">
              <div className="college">AIMS Delhi</div>
              <div className="degree">Bachelor of medicine, Bachelor of Surgery</div>
              <div className="duration">2005 - 2011</div>
            </div>

          <div style={{cursor:"pointer"}} className="Add-More" onClick={() => {setShowExperienceForm(true)}}>
            <img src={addSquare} alt="" />
          </div>
        </div>

        <div className="License">
          <img src={editIcon} alt="" />
          <div className="licence-detail">
            <p className="Head">Issuing Authority</p>
            <p className="body">Medical council or india</p>
          </div>
          <div className="licence-detail">
            <p className="Head">Licence Number</p>
            <p className="body">12345678</p>
          </div>
          <div className="licence-detail">
            <p className="Head">Licence Validity</p>
            <p className="body">21-12-2027</p>
          </div>
        </div>
      </div>
    </div>
  )
}
