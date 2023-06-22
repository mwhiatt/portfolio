import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="navbar">
            <Link href="/" className='nav-link'>Home</Link>
            <Link href="/edu" className='nav-link'>Education</Link>
            <Link href="/experience" className='nav-link'>Experience</Link>
            <a className='nav-link' href="https://github.com/mwhiatt">GitHub</a>
            <a className='nav-link' href="https://www.linkedin.com/in/matt-hiatt/">LinkedIn</a>
        </header>
    )
}