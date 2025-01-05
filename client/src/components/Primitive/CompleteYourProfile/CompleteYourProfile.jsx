import React from 'react'
import "./CompleteYourProfile.css"

const CompleteYourProfile = () => {
  return (
    <div className='CompleteYourProfile'>
      <div className="container">
        <h2>Complete Your Profile</h2>
        <div className="progress">
            <div className="fill"></div>
        </div>
        <p>Step 3/4 Completed</p>
        <button>Complete Now</button>
      </div>  
    </div>
  )
}

export default CompleteYourProfile;