import React, { useEffect, useState } from 'react'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import Sidebar from '../components/layout/Sidebar/Sidebar'
export default function MainLayout() {
  const { width } = useWindowSize();
  const [showMenubar, setShowMenubar] = useState(false);

  useEffect(() => {
    if (width <= 576) {
      setShowMenubar(true);
    } else setShowMenubar(false);
  }, [width]);
  return (
    <>
      <Header />
      {/* {showMenubar ? <Sidebar /> : <></>} */}
      <Outlet />
      <Footer />
    </>
  )
}
