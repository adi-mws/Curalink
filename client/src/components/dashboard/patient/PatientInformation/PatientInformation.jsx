import React from "react";
import "./PatientInformation.css";
import PatientImage from "../../../../assets/imgs/PatientImage.png";
import Edit from "../../../../assets/icons/edit.png";
import SecondaryButton from "../../../shared/buttons/PrimaryHollowButton/PrimaryHollowButton";
import DashboardHeader from "../../../layout/DashboardHeader/DashboardHeader";

const PatientInformation = () => {
  return (
    <div className="PatientInformation">

      {/* <DashboardHeader title={"Patient Information"} /> */}

      <div className="information">
        <div className="heading">
          <p>Your Profile</p>
          <button>
            <img src={Edit} alt="Edit button" />
          </button>
        </div>
        <div className="profileDetails">
          <div className="profile box-1" style={{ gridArea: "box-1" }}>
            <img src={PatientImage} alt="patientImage" />
            <p>Change Photo</p>
          </div>
          <div className="box box-2" style={{ gridArea: "box-2" }}>
            <h3>Name</h3>
            <p>Aditya Raj</p>
          </div>
          <div className="box box-3" style={{ gridArea: "box-3" }}>
            <h3>Gender</h3>
            <p>Male</p>
          </div>
          <div className="box box-4" style={{ gridArea: "box-4" }}>
            <h3>DOB</h3>
            <p>13-04-2001</p>
          </div>
          <div className="box box-5" style={{ gridArea: "box-5" }}>
            <h3>Address</h3>
            <p>Digha Ghat, Patna - 800011</p>
          </div>
          <div className="box box-6" style={{ gridArea: "box-6" }}>
            <h3>Contact</h3>
            <p>6205225563</p>
          </div>
        </div>
        <div className="accountAction">
          <p style={{ fontSize: "20px", paddingBlock: "20px" }}>
            Account Actions
          </p>
          <div className="text">
            <div>
              <p>Delete Account</p>
              <p>
                If you no longer wish to use our platform, you can request
                account deletion. This will permanently remove all your data,
                including appointments and prescriptions.
              </p>
            </div>
            <SecondaryButton text="Deactivate Account" className="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInformation;
