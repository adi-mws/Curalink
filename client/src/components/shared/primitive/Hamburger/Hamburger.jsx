import './Hamburger.css';
import React, { forwardRef, useState } from 'react';

const Hamburger = forwardRef(({ onClick, isCross=false }, ref) => {
  return (
    <div ref={ref} className={`Hamburger ${isCross ? 'hamburger-cross' : ''}`} onClick={onClick}  >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export default Hamburger;