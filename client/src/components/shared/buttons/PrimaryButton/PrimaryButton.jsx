import './PrimaryButton.css';
import React from 'react'

export default function PrimaryButton({text, fontSize, onClick, width = "auto"}) {
  return (
    <button className='PrimaryButton' onClick={onClick} style={{fontSize: `${fontSize}`, width: `${width}`}}>{text}</button>
  )
}
