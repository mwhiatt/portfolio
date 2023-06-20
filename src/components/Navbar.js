import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/edu" className='nav-link'>Education</Link>
            <Link to="/exp" className='nav-link'>Experience</Link>
        </header>
    )
}