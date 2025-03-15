import React from 'react'
import { useForm } from 'react-hook-form'
import './ExperienceForm.css'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import CutIcon from '../../../../../assets/icons/cutIcon.png'

const Data = {
    workplace: 'Massachusetts General Hospital',
    role: 'Senior Cardiologist',
    startDate: '2020-06-01',
    endDate: '2023-12-31'
}

export default function ExperienceForm({formData=Data,showExperienceForm, setShowExperienceForm}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
        <div className='ExperienceForm' style={{ transition: '.3s',  opacity: `${showExperienceForm ? 1 : 0}`, transform: `${showExperienceForm ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showExperienceForm ? '70%' : '0%'}`, height: `${showExperienceForm ? '90vh' : '0%'}`, top: '55%', left: '60% ' }}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="heading">
                    <h2>Experience Information</h2>
                    <img 
                        src={CutIcon} 
                        alt="close" 
                        className="close-icon"
                        onClick={() => {setShowExperienceForm(false)}}
                    />
                </div>
                
                <div className="form-area">
                    <div className="inputFields">
                        <label>Hospital/Platform Name</label>
                        <input
                            value={formData.workplace}
                            className={errors.workplace ? "input-error" : ""}
                            {...register("workplace", {
                                required: { value: true, message: "Workplace name is required" },
                            })}
                            type="text"
                            placeholder="Enter hospital or platform name"
                        />
                        {errors.workplace && <p className="error">{errors.workplace.message}</p>}
                    </div>
                    
                    <div className="inputFields">
                        <label>Occupation/Role</label>
                        <input
                            value={formData.role}
                            className={errors.role ? "input-error" : ""}
                            {...register("role", {
                                required: { value: true, message: "Role is required" }
                            })}
                            type="text"
                            placeholder="Enter your role"
                        />
                        {errors.role && <p className="error">{errors.role.message}</p>}
                    </div>

                    <div className="inputFields">
                        <label>Start Date</label>
                        <input
                            value={formData.startDate}
                            className={errors.startDate ? "input-error" : ""}
                            {...register("startDate", {
                                required: { value: true, message: "Start date is required" },
                            })}
                            type="date"
                        />
                        {errors.startDate && <p className="error">{errors.startDate.message}</p>}
                    </div>

                    <div className="inputFields">
                        <label>End Date</label>
                        <input
                            value={formData.endDate}
                            className={errors.endDate ? "input-error" : ""}
                            {...register("endDate", {
                                required: { value: true, message: "End date is required" },
                            })}
                            type="date"
                        />
                        {errors.endDate && <p className="error">{errors.endDate.message}</p>}
                    </div>
                </div>
                <div className="Button-Container">
                    <PrimaryButton text="Save Details" width='100%' padding=".8em" borderRadius='5px' type='submit'/>
                </div>
            </form>
        </div>
    )
}
