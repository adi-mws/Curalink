import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import logo from '../../../assets/logo/logo.png';

export default function Sidebar({ }) {
    const [data, setData] = useState(false);
    useEffect(() => {
        console.log("Hello!")
        header.current.style.background = "white";
    }, [data])
    const header = useRef(null);
    return (
        <div className="logo"><img src={logo} alt="" /></div>
    )
}