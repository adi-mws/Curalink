import React from 'react'
import { useForm } from 'react-hook-form'
import './UpdateInfoForm2.css'
import PrimaryButton from '../../../../shared/buttons/PrimaryButton/PrimaryButton.jsx'
import CutIcon from '../../../../../assets/icons/cutIcon.png'

const Data = {
  contactNumber: '1234567890',
  email: 'emily@example.com',
  address: '123 Main St, City, Country'
}

export default function UpdateInfoForm2({formData=Data, showUpdateInfoForm2, setShowUpdateInfoForm2}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    return (
        <div className='UpdateInfoForm2' style={{ transition: '.3s',  opacity: `${showUpdateInfoForm2 ? 1 : 0}`, transform: `${showUpdateInfoForm2 ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)'}`, width: `${showUpdateInfoForm2 ? '70%' : '0%'}`, height: `${showUpdateInfoForm2 ? '90%' : '0%'}`, top: '50%', left: '60% ' }}>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div className="heading">
                    <h2>Update Contact Information</h2>
                    <img 
                        src={CutIcon} 
                        alt="close" 
                        className="close-icon"
                        onClick={() => {setShowUpdateInfoForm2(false)}}
                    />
                </div>
                
                <div className="form-area">
                    <div className="inputFields">
                        <label>Contact Number</label>
                        <input
                            value={formData.contactNumber}
                            className={errors.contactNumber ? "input-error" : ""}
                            {...register("contactNumber", {
                                required: { value: true, message: "Contact number is required" },
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: "Please enter a valid 10-digit number"
                                }
                            })}
                            type="tel"
                            placeholder="Enter your contact number"
                        />
                        {errors.contactNumber && <p className="error">{errors.contactNumber.message}</p>}
                    </div>
                    
                    <div className="inputFields">
                        <label>Email Address</label>
                        <input
                            value={formData.email}
                            className={errors.email ? "input-error" : ""}
                            {...register("email", {
                                required: { value: true, message: "Email is required" },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please enter a valid email address"
                                }
                            })}
                            type="email"
                            placeholder="Enter your email address"
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>

                    <div className="inputFields">
                        <label>Address</label>
                        <textarea
                            value={formData.address}
                            className={errors.address ? "input-error" : ""}
                            {...register("address", {
                                required: { value: true, message: "Address is required" },
                            })}
                            placeholder="Enter your full address"
                        />
                        {errors.address && <p className="error">{errors.address.message}</p>}
                    </div>
                </div>
                <div className="Button-Container">
                    <PrimaryButton onClick={() => {setShowUpdateInfoForm2(false)}} text="Save Details" width='100%' padding=".8em" borderRadius='5px' type='submit'/>
                </div>
            </form>
        </div>
    )
}
