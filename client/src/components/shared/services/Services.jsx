import React from 'react'
import './Services.css'
import DummyImage from '../../../assets/imgs/Services-Dummy-Image.png'
import DurationIcon from '../../../assets/icons/Services-Duration-Icon.png'
import PrimaryButton from '../../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'

const DummyService = {
    image:DummyImage,
    service:"General Healthcare",
    description:"Your go-to solution for routine check-ups and preventive care",
    duration:"10 mins"
}

export default function Services({Service = DummyService}) {
  return (
    <div className="Services">
      <img className="ServiceImage" src={Service.image} alt="" />
      <p className="ServiceName">{Service.service}</p>
      <p className="ServiceDescription">{Service.description}</p>
      <div className="Duration-Button">
        <div className="Duration"><img src={DurationIcon} alt="" /><p>{Service.duration}</p></div>
        <PrimaryButton text="Read More"/>
      </div>
    </div>
  )
}
