import React from 'react'
import './ShowServices.css'
import { useState } from 'react'
import CutIcon from '../../../../../assets/icons/cutIcon.png'
import RemoveIcon from '../../../../../assets/icons/cross-pentagon.png'
import AddBox from '../../../../../assets/icons/add-square.png'
import cutIcon from '../../../../../assets/icons/cutIcon.png'
import removeIcon from '../../../../../assets/icons/tag-cross.png'

const CurrentServices = ["general consultation", "dental check-up", "eye examination", "pediatric care", "dermatology"]

export default function ShowServices({Services = CurrentServices}) {
  const [services, setServices] = useState(Services)
  const handleRemoveService = (index) => {
    const newServices = [...services]
    newServices.splice(index, 1)
    setServices(newServices)
  }
  return (
    <div className='ShowServices'>
        <div className="heading">Services <img src={cutIcon} alt="" /></div>
        <div className="services-container">
            {services.map((service, index) => (
                <div className="service" key={index}>
                    <p className="service-name">{service}</p>
                    <button className="remove-service" onClick={() => handleRemoveService(index)}><img src={removeIcon} alt="" /></button>
                </div>
            ))}
        </div>
        <div className="button">
        <button className="AddButton">Add Service <img src={AddBox} alt="" /></button>
        </div>
    </div>
  )
}
