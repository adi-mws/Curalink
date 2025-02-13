import './SecondaryButton.css';
import React from 'react'

export default function SecondaryButton({text, textWrap, fontSize, onClick, width = "auto", borderRadius="10px", padding = '.6em 3em', type = "button"}) {
  return (
    <button className='SecondaryButton' onClick={onClick} style={{fontSize: fontSize,textWrap:{textWrap}, width: width, borderRadius: borderRadius, padding: padding}} type={type}>{text}</button>
  )
}
