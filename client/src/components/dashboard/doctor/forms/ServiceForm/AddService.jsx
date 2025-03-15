import React from 'react'
import { useForm } from 'react-hook-form'
import './AddService.css'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import CutIcon from '../../../../../assets/icons/cutIcon.png'

const Services = [
  'General Consultation',
  'Dental Check-up',
  'Eye Examination',
  'Pediatric Care',
  'Dermatology'
]

export default function AddService({ formData = { service: '' }, showAddServiceForm, setShowAddServiceForm }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className='AddService' style={{ transition: '.3s',  opacity: `${showAddServiceForm ? 1 : 0}`, transform: `${showAddServiceForm ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showAddServiceForm ? '70%' : '0%'}`, height: `${showAddServiceForm ? '90vh' : '0%'}`, top: '55%', left: '60% ' }}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="heading">
          <h2>Add Service</h2>
          <img 
            src={CutIcon} 
            alt="close" 
            className="close-icon"
            onClick={() => {setShowAddServiceForm(false)}}
          />
        </div>
        
        <div className="form-area">
          <div className="inputFields">
            <label>Select Service</label>
            <select
              value={formData.service}
              className={errors.service ? "input-error" : ""}
              {...register("service", {
                required: { value: true, message: "Service selection is required" }
              })}
            >
              <option value="">Select a service</option>
              {Services.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && <p className="error">{errors.service.message}</p>}
          </div>
          <p className="info-text">
            Your request of new service will be sent successfully. After the verification of your qualifications eligible for this service, you will get the authority to get patients in this category.
          </p>
        </div>

        <div className="Button-Container">
          <PrimaryButton text="Add Service" width='100%' padding=".8em" borderRadius='5px' type='submit'/>
        </div>
      </form>
    </div>
  )
}
