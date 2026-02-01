import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Last Mile Now | Bridging the AI Gap',
    description: 'Democratizing AI for small businesses and everyday utility.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <nav className="glass sticky-top">
                    <div className="container nav-content">
                        <div className="logo">
                            <span className="gradient-text font-bold text-xl">LastMileNow</span>
                        </div>
                        <div className="nav-links">
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/initiatives">Initiatives</a>
                            <a href="/blog">Blog</a>
                        </div>
                    </div>
                </nav>
                <main>{children}</main>
                <footer className="glass">
                    <div className="container footer-content">
                        <p>&copy; {new Date().getFullYear()} Last Mile Now. All rights reserved.</p>
                        <div className="social-links">
                            <a href="https://github.com/LastMileNow">GitHub</a>
                            <a href="https://linkedin.com/company/lastmilenow">LinkedIn</a>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
