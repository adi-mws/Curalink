import React from 'react'
import { useForm } from 'react-hook-form'
import './UpdateInfoForm3.css'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import CutIcon from '../../../../../assets/icons/cutIcon.png'

const Data = {
  aboutYourself: 'I am a dedicated healthcare professional with over 10 years of experience...'
}

export default function UpdateInfoForm3({formData=Data, showUpdateInfoForm3, setShowUpdateInfoForm3}) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className='UpdateInfoForm3' style={{ transition: '.3s',  opacity: `${showUpdateInfoForm3 ? 1 : 0}`, transform: `${showUpdateInfoForm3 ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showUpdateInfoForm3 ? '70%' : '0%'}`, height: `${showUpdateInfoForm3 ? '75vh' : '0%'}`, top: '55%', left: '60%'}}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="heading">
          <h2>Update Information</h2>
          <img 
            src={CutIcon} 
            alt="close" 
            className="close-icon"
            onClick={() => {setShowUpdateInfoForm3(false )}}
          />
        </div>
        
        <div className="form-area">
          <div className="inputFields">
            <label>About Yourself</label>
            <textarea
              value={formData.aboutYourself}
              className={errors.aboutYourself ? "input-error" : ""}
              {...register("aboutYourself", {
                required: { value: true, message: "About yourself is required" },
              })}
              placeholder="Tell us about yourself"
            />
            {errors.aboutYourself && <p className="error">{errors.aboutYourself.message}</p>}
          </div>
        </div>
        <div className="Button-Container">
          <PrimaryButton onClick={() => {setShowUpdateInfoForm3(false )}} text="Save Details" width='100%' padding=".8em" borderRadius='5px' type='submit'/>
        </div>
      </form>
    </div>
  )
}
