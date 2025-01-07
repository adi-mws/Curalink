import './PrimaryButton.css';
import React from 'react'

export default function PrimaryButton({text, fontSize, onClick, width = "auto", borderRadius="10px", padding = '.6em 3em', type = "button"}) {
  return (
    <button className='PrimaryButton' onClick={onClick} style={{fontSize: fontSize, width: width, borderRadius: borderRadius, padding: padding}} type={type}>{text}</button>
  )
}
