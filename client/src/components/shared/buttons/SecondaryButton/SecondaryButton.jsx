import './SecondaryButton.css';
import React from 'react'

export default function SecondaryButton({text, fontSize, onClick, width="auto"}) {
  return (
    <button className='SecondaryButton' onClick={onClick} style={{fontSize: `${fontSize}`, width: `${width}`}}>{text}</button>
  )
}
