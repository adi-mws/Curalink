import React from 'react'
import './ShowServices.css'
import { useState } from 'react'
import CutIcon from '../../../../../assets/icons/cutIcon.png'
import RemoveIcon from '../../../../../assets/icons/cross-pentagon.png'
import AddBox from '../../../../../assets/icons/AddBox.png'

const Services = ["general consultation", "dental check-up", "eye examination", "pediatric care", "dermatology"]

export default function ShowServices() {
  return (
    <div className='ShowServices'>
        <div className="heading">Services</div>
        <div className="services-container">
            {Services.map((service, index) => (
                <div className="service" key={index}>
                    <div className="service-name">{service}</div>
                    <img src={RemoveIcon} alt="remove" />
                </div>
            ))}
        </div>
        <button className="AddButton">Add Service <img src={AddBox} alt="" /></button>
    </div>
  )
}
