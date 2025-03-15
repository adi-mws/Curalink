import React from 'react'
import './ShowQualification.css'
import CutIcon from '../../../../../assets/icons/cutIcon.png'
import documentText from '../../../../../assets/icons/document-text.png'
import TrashIcon from '../../../../../assets/icons/trash.png'
import addSquare from '../../../../../assets/icons/PlusIcon.png'


export default function ShowQualification({showShowQualification, setShowShowQualification}) {
    const Qualifications=[
        "Timb University Specialist",
        "Timb University Specialist",
        "Timb University Specialist",
        "Timb University Specialist",
        "Timb University Specialist",
        "Timb University Specialist",
        "Timb University Specialist"
    ]

  return (
    <div className='ShowQualification' style={{ transition: '.3s',  opacity: `${showShowQualification ? 1 : 0}`, transform: `${showShowQualification ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showShowQualification ? '70%' : '0%'}`, height: `${showShowQualification ? '70vh' : '0%'}`, top: '50%', left: '60% ' }}>
        <div className="Heading">
            <p>Qualifications</p>
            <img  src={CutIcon} alt="" style={{cursor:"pointer"}} onClick={() => {setShowShowQualification(false)}} />
        </div>
        <div className="Qualifications">
            {Qualifications.map((Qualification,index) => (
                <div className="Qualification">
                    <p>{Qualification}</p>
                    <img src={documentText} alt="" />
                    <img onClick={() => {Qualifications.splice(index,1)}} src={TrashIcon} alt="" />
                </div>
            ))}
        </div>
        <label className='Add-New'>
            <img src={addSquare} alt="" />
            <p>Add New</p>
        </label>
        <input
          type="file"
          id="patient-support-ticket-attachment"
          style={{ display: 'none' }}
          multiple
          onChange={(e) => {
            const selectedFiles = Array.from(e.target.files);
            setFiles([...files, ...selectedFiles]);
          }}
        />
    </div>
  )
}
