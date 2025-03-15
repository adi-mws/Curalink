import {React, useState} from 'react'
import {useForm} from 'react-hook-form'
import './AddQualification.css'
import CutIcon from '../../../../../assets/icons/cutIcon.png'
import PlusIcon from '../../../../../assets/icons/PlusIcon.png'

import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton'

export default function AddQualification({showAddQualificationForm="true", setShowAddQualificationForm}) {
  const [files, setFiles] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="AddQualification" style={{ transition: '.3s',  opacity: `${showAddQualificationForm ? 1 : 0}`, transform: `${showAddQualificationForm ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showAddQualificationForm ? '70%' : '0%'}`, height: `${showAddQualificationForm ? '70vh' : '0%'}`, top: '50%', left: '60% ' }}>
        <form action="">
          <p className="Heading">Add Qualification <img src={CutIcon} onClick={() => {setShowAddQualificationForm(false)}} alt="" /></p>
          <p className="Name">
              <label className='Name-label' htmlFor="">Qualification Name</label>
              <input {...register('Name', {required:true})}  className='Name-input' type="text" placeholder='Enter Qualification'/>
          </p>
          
            <div className="file-list">
                      {files.map((file, index) => (
                        <div key={index} className="attachment-file-item">
                          <span>{file.name}</span>
                          <button type="button" onClick={() => {
                            const newFiles = [...files];
                            newFiles.splice(index, 1);
                            setFiles(newFiles);
                          }}>
                            <img src={CutIcon} alt="remove file" />
                          </button>
                        </div>
                      ))}
                    </div>
          <label className='Add-New' htmlFor=""><img src={PlusIcon} alt="" />Add New</label>
          <input
            type="file"
            id="patient-support-ticket-attachment"
            className='custom-file-input'
            style={{ display: 'none' }}
            multiple
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files);
              setFiles([...files, ...selectedFiles]);
            }}
        />


          <p className="Description">Once you add the new qualification document it will be reviewed by our team. After verification you can also request for new services if this document aligns with the skill required for doing the service.</p>
          
          <PrimaryButton text = "Save Details" type = "submit" />
        </form>
    </div>
  )
} 
