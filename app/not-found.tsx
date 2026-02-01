import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="container" style={{ padding: '10rem 2rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '6rem', marginBottom: '2rem' }} className="gradient-text">404</h1>
            <h2 style={{ marginBottom: '2rem' }}>Oops! Page not found.</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.2rem', opacity: 0.7 }}>
                The link might be broken, or the page may have been moved.
            </p>
            <Link href="/" className="btn btn-primary">
                Back to Home
            </Link>
        </div>
    )
}
