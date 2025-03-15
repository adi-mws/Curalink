import React from 'react'
import { useForm } from 'react-hook-form'
import './UpdateInfoForm1.css'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import CutIcon from '../../../../../assets/icons/cutIcon.png'

const Data = 
    {
        name: 'Emily',
        gender: 'female',
        dob: '2000-01-21'
    }


export default function UpdateInfoForm1({formData=Data, showUpdateInfoForm1, setShowUpdateInfoForm1}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
        <div className='UpdateInfoForm1' style={{ transition: '.3s',  opacity: `${showUpdateInfoForm1 ? 1 : 0}`, transform: `${showUpdateInfoForm1 ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showUpdateInfoForm1 ? '70%' : '0%'}`, height: `${showUpdateInfoForm1 ? '90vh' : '0%'}`, top: '55%', left: '60% ' }}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="heading">
                    <h2>Update Information</h2>
                    <img 
                        src={CutIcon} 
                        alt="close" 
                        className="close-icon"
                        onClick={() => {setShowUpdateInfoForm1(false)}}
                    />
                </div>
                
                <div className="form-area">
                <div className="inputFields">
                    <label>Full Name</label>
                    <input
                        value={formData.name}
                        className={errors.fullName ? "input-error" : ""}
                        {...register("fullName", {
                            required: { value: true, message: "Full name is required" },
                        })}
                        type="text"
                        placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="error">{errors.fullName.message}</p>}
                </div>
                
                <div className="inputFields">
                    <label>Gender</label>
                    <select
                        value={formData.gender}
                        className={errors.gender ? "input-error input-select" : "input-select"}
                        {...register("gender", {
                            required: { value: true, message: "Gender is required" }
                        })}
                    >
                        <option value="" disabled selected>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    {errors.gender && <p className="error">{errors.gender.message}</p>}
                </div>

                <div className="inputFields">
                    <label>Date of Birth</label>
                    <input
                        value={formData.dob}
                        className={errors.dob ? "input-error" : ""}
                        {...register("dob", {
                            required: { value: true, message: "Date of birth is required" },
                        })}
                        type="date"
                    />
                    {errors.dob && <p className="error">{errors.dob.message}</p>}
                </div>
            </div>
            <div className="Button-Container">
                <PrimaryButton onClick={() => {setShowUpdateInfoForm1(false)}} text="Save Details" width='100%' padding=".8em" borderRadius='5px' type='submit'/>
            </div>
            </form>
        </div>
    )
}
