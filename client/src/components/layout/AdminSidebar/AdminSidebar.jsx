import React from "react";
import "./AdminSidebar.css";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {

    const categories = [
        {
            name: 'Overview',
            list: {

            },
            link: '/admin/dashboard'
        },
        {
            name: 'Essentials',
            list: {
                analytics: '/admin/dashboard/analytics',
                analytics: '/admin/dashboard/analytics',
                analytics: '/admin/dashboard/analytics',
            }
        }
    ]
    const location = useLocation();
    const camelToSpaceBaseCapital = (text) => {
        // newsContent => News Content

        return '0'
    }

    return (
        <div className="AdminSidebar">
            <div className="logo-wrapper">
                <img src="" alt="" className="logo" />
            </div>
            {categories.map((item, index) => (

                <div className="category" key={index}>
                    <div className="head">
                        <Link to={item.link} className="title">{item.name}</Link>
                        <span className="indicator"></span>
                    </div>
                    <ul className="category-list">
                        {item.list && Object.keys(item.list).map((item_key, index) => (
                            <li key={index} className="list-item"><Link to={item.list[item_key]} className={`${location.pathname.includes(item.list[item_key])? 'active' : ''}`}>{camelToSpaceBaseCapital(item_key)}</Link></li>
                        ))

                        }

                    </ul> : <></>
                </div>
            ))}

        </div>)
};

export default AdminSidebar;
