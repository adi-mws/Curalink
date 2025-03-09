
import React from 'react'
import './DoctorDetails.css'
import GallaryEdit from '../../../../assets/icons/gallery-edit.png'
import DashboardHeader from '../../../layout/DashboardHeader/DashboardHeader';
import PrimaryButton from '../../../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import editIcon from '../../../../assets/icons/edit-icon.png'
import doctorPfp from '../../../../assets/imgs/DoctorDashboardImage.png'

export default function DoctorDetails() {
  return (
    <div className='DoctorDetails'>
      <DashboardHeader title='Your Profile' />
      <div className="DoctorDetail-content">
        <div className="hero-section">
          <div className="details">
            <p className="name">Simran Singh <img src={editIcon} alt="" /></p>
            <div className="gender">Female</div>
            <div className="age">29 years old</div>
            <PrimaryButton text = 'View Public Profile'></PrimaryButton>
          </div>
          <div className="doctors-message">
            <div className="heading">Doctor's Message</div>
            <div className="Message">I am dedicated to providing personalized and compassionate care to my patients. With over 10 years of experience, my goal is to help you achieve the best possible health outcomes.</div>

          </div>
          <div className="profile-picture">
            <img src={doctorPfp} alt="" />
            <div className="edit-profile">
              <img src={GallaryEdit} alt="" />
              <p>Profile Picture</p>
            </div>
          </div>
        </div>

        <div className="personal-information">
          <div className="infos-heading">
            <p></p>
            <img src="" alt="" />
          </div>
          <div className="infos">
            <p>Contact No</p>
            <p>+91 93409823492</p>
          </div>
          <div className="infos">
            <p>Email Id</p>
            <p>simran@gmail.com</p>
          </div>
          <div className="infos">
            <p>Address</p>
            <p>Digha Ghat, Patna - 800001</p>
          </div>
        </div>

        <div className="Qualifications">
          <div className="Heading"></div>
          <div className="Qualification"></div>
        </div>

        <div className="Qualification-Documents">
          <div className="heading">
            <p>Qualification Documents</p>
            <img src={editIcon} alt="" />
          </div>
          <div className="document">
            <p></p>
            <p></p>
          </div>
          <div className="document">
            <p></p>
            <p></p>
          </div>
          <div className="document">
            <p></p>
            <p></p>
          </div>
          <div className="document">
            <p></p>
            <p></p>
          </div>
        </div>

        
      </div>
    </div>
  )
}
