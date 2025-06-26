import React from 'react'
import AdminSidebar from '../components/layout/AdminSidebar/AdminSidebar'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/layout/AdminHeader/AdminHeader'
export default function AdminDashboardLayout() {
    return (
        <div className='AdminDashboardLayout'>
            <AdminSidebar />
            <div className="outlet-wrapper">
                <AdminHeader />
                <Outlet />
            </div>

        </div>
    )
}
