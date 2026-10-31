'use client'

import { useState } from 'react'

export default function MobileNav() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                type="button"
                className="nav-toggle"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                aria-controls="nav-links"
                onClick={() => setOpen(!open)}
            >
                <span className="nav-toggle-bar" />
                <span className="nav-toggle-bar" />
                <span className="nav-toggle-bar" />
            </button>
            <div
                id="nav-links"
                className={open ? 'nav-links nav-links-open' : 'nav-links'}
                onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) setOpen(false)
                }}
            >
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/initiatives">Initiatives</a>
                <a href="/blog">Blog</a>
            </div>
        </>
    )
}
