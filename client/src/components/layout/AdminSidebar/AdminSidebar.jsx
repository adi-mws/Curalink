import React, { useEffect } from "react";
import "./AdminSidebar.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const sidebarData = [
  {
    section: 'Overview',
    path: '/admin/dashboard', 
    items: []
  },
  {
    section: 'Essentials',
    items: [
      { label: 'Analytics', badge: 2 },
      {label: 'Annoucements', badge: 2, path: '/admin/dashboard/annoucements'},
      { label: 'News Content' },
      { label: 'FAQs Content', path:'/admin/dashboard/faqs' },
      { label: 'Contacts', badge: 2, path:'/admin/dashboard/contacts' },
    
    ]
  },
  {
    section: 'Support',
    items: [
      { label: 'Patient Support', badge: 2 },
      { label: 'Doctor Support', badge: 2 }
    ]
  },
  {
    section: 'Doctors',
    items: [
      { label: 'Doctors' }
    ]
  }
]

function AdminSidebar() {


  useEffect(() => {
    // api call 
    
  }, [])

  const location = useLocation()
  const [active, setActive] = useState('Analytics')

  return (
    <div className="admin-sidebar">

      <div className="section-logo">
        <img src="/imgs/logo/logo.png" alt="" className="logo" />
      </div>

      {sidebarData.map(section => (
        <div key={section.section}>
          <Link to={section.path} className="section-title">
            {section.section} <span className="dot gray"></span>
          </Link>
          <div className="section-items">
            {section.items?.map(item => (
                <Link
                    to={item.path}
                    key={item.label}
                    className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
                >
                    <span>{item.label}</span>
                    {item.badge && <span className="badge">{item.badge}</span>}
                </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
};

export default AdminSidebar;
