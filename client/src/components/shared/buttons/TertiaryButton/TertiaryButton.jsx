import './TertiaryButton.css';
import React from 'react'

export default function TertiaryButton({text, fontSize, onClick, width = "auto", borderRadius="10px", padding = '.6em 3em', type = "button"}) {
  return (
    <button className='TertiaryButton' onClick={onClick} style={{fontSize: fontSize, width: width, borderRadius: borderRadius, padding: padding}} type={type}>{text}</button>
  )
}
