import './Hamburger.css';
import React, { forwardRef, useState } from 'react';
import { useSideBar } from '../../../../components/contexts/SidebarContext.jsx';
const Hamburger = forwardRef((props, ref) => {
  const {setShowSidebar, showSidebar} = useSideBar();
  return (
    <div ref={ref} className={`Hamburger ${showSidebar ? 'hamburger-cross' : ''}`} onClick={() => {setShowSidebar(!showSidebar)}}  >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
});

export default Hamburger;