import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import { useSideBar } from '../components/contexts/SidebarContext.jsx';
export default function MainLayout() {
  const { width } = useWindowSize();
  return (
    <>
      <Header />
      {/* {showMenubar ? <Sidebar /> : <></>} */}
      <Outlet />
      <Footer />
    </>
  )
}
