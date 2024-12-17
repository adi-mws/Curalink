import React, { useEffect, useRef, useState } from 'react'
import './Header.css'

export default function Header({}) {
    const [data, setData] = useState(false);
    useEffect(() => {
        console.log("hello ")
        header.current.style.background = "red";

    }, [data])
    const header = useRef(null);
    return (
        <div className='Header' ref={header}>
            This is my header for {data}
            <h1>This is test</h1>
        </div>
    )
}
