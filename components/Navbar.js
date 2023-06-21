import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className="navbar">
            <Link href="/" className='nav-link'>Home</Link>
            <Link href="/edu" className='nav-link'>Education</Link>
            <Link href="/experience" className='nav-link'>Experience</Link>
        </header>
    )
}