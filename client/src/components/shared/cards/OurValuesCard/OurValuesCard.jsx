import React from 'react'
import './OurValuesCard.css';
export default function OurValuesCard({image, description, background}) {
  return (
    <div className='OurValuesCard' style={{background: background}}>
        <img src={image} alt="" />
        <p>{description}</p>
    </div>
  )
}
