import {React, useState} from 'react'
import { useForm } from 'react-hook-form'
import './EducationForm.css'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import CutIcon from '../../../../../assets/icons/cutIcon.png'

const Data = {
    institution: 'Harvard Medical School',
    degree: 'Doctor of Medicine',
    startDate: '2016-09-01',
    completionDate: '2020-05-31'
}

export default function EducationForm({formData=Data, showEducationForm, setShowEducationForm}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
        <div className='EducationForm' style={{ transition: '.3s',  opacity: `${showEducationForm ? 1 : 0}`, transform: `${showEducationForm ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showEducationForm ? '70%' : '0%'}`, height: `${showEducationForm ? '90vh' : '0%'}`, top: '55%', left: '60% ' }}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="heading">
                    <h2>Education Information</h2>
                    <img 
                        src={CutIcon} 
                        alt="close" 
                        className="close-icon"
                        onClick={() => {setShowEducationForm(false)}}
                    />
                </div>
                
                <div className="form-area">
                    <div className="inputFields">
                        <label>Institution</label>
                        <input
                            value={formData.institution}
                            className={errors.institution ? "input-error" : ""}
                            {...register("institution", {
                                required: { value: true, message: "Institution name is required" },
                            })}
                            type="text"
                            placeholder="Enter institution name"
                        />
                        {errors.institution && <p className="error">{errors.institution.message}</p>}
                    </div>
                    
                    <div className="inputFields">
                        <label>Degree</label>
                        <input
                            value={formData.degree}
                            className={errors.degree ? "input-error" : ""}
                            {...register("degree", {
                                required: { value: true, message: "Degree is required" }
                            })}
                            type="text"
                            placeholder="Enter your degree"
                        />
                        {errors.degree && <p className="error">{errors.degree.message}</p>}
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
                        <label>Completion Date</label>
                        <input
                            value={formData.completionDate}
                            className={errors.completionDate ? "input-error" : ""}
                            {...register("completionDate", {
                                required: { value: true, message: "Completion date is required" },
                            })}
                            type="date"
                        />
                        {errors.completionDate && <p className="error">{errors.completionDate.message}</p>}
                    </div>
                </div>
                <div className="Button-Container">
                    <PrimaryButton onClick={() => {setShowEducationForm(false)}} text="Save Details" width='100%' padding=".8em" borderRadius='5px' type='submit'/>
                </div>
            </form>
        </div>
    )
}
