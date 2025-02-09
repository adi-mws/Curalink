import {React, useState} from 'react'
import './PrimaryHollowButton.css'

export default function PrimaryHollowButton({text,textWrap = "wrap", fontSize, onClick, width = "auto", borderRadius="10px", padding = '1.2em 3em', type = "button"}) {
  const [isSelected, select] = useState(false)
  return <button className={isSelected ?'PrimaryHollowButton selected' : 'PrimaryHollowButton'} style={{fontSize: fontSize,textWrap:textWrap, width: width, borderRadius: borderRadius, padding: padding}} type={type} onClick={() => {select(!isSelected);onClick}}>{text}</button>
}
