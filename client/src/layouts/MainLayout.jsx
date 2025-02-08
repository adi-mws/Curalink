import React from 'react'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { Outlet } from 'react-router-dom'


export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
