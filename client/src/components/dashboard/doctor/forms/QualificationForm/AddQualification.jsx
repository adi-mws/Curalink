import React from 'react'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton'

export default function AddQualification() {
  return (
    <div className="AddQualification">
        <p className="Heading">Add Qualification</p>
        <p className="Name">
            <label className='Name-label' htmlFor="">Qualification Name</label>
            <input className='Name-input' type="text" placeholder='Enter Qualification'/>
        </p>

        <input type="file" name="Qualification"/>

        <p className="Description">Once you add the new qualification document it will be reviewed by our team. After verification you can also request for new services if this document aligns with the skill required for doing the service.</p>
        
        <PrimaryButton text = "Save Details" type = "submit" />
    </div>
  )
}
