import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import useWindowSize from '../contexts/useWindowSize'
import Sidebar from '../components/layout/Sidebar/Sidebar'
import { useAlert } from '../contexts/AlertContext'
export default function MainLayout() {
  const { showNotification } = useAlert();
  useEffect(() => {
    showNotification('hellow', 'success');
  }, [])
  return (
    <>
      <Header />
      {/* {showMenubar ? <Sidebar /> : <></>} */}
      <Outlet />
      <Footer />
    </>
  )
}
