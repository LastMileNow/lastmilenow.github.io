'use client'

import { useEffect, useRef, useState } from 'react'

export default function MobileNav() {
    const [open, setOpen] = useState(false)
    const toggleRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (!open) return
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false)
                toggleRef.current?.focus()
            }
        }
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [open])

    return (
        <>
            <button
                ref={toggleRef}
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
                <a href="/contact">Contact</a>
            </div>
        </>
    )
}
