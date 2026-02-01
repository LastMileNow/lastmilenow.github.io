import { getPageData } from '@/lib/pages'
import Link from 'next/link'
import { Rocket, GraduationCap, PenTool, Database, Shield, MessageSquare } from 'lucide-react'

const initiativeSlugs = [
    { slug: 'literacy', title: 'AI Driving School', icon: GraduationCap },
    { slug: 'implementation', title: 'The AI Plumber', icon: PenTool },
    { slug: 'products', title: 'Micro-SaaS Lab', icon: Rocket },
    { slug: 'trust', title: 'Trust & Security', icon: Shield },
    { slug: 'advocacy', title: 'Advocacy', icon: MessageSquare }
]

export default function InitiativesPage() {
    return (
        <div className="container" style={{ padding: '8rem 2rem' }}>
            <header className="page-header">
                <h1 className="page-title">Our Initiatives</h1>
                <p className="page-subtitle">Mission-driven projects solving the Last Mile problem.</p>
            </header>

            <div className="bento-grid" style={{ marginTop: '4rem' }}>
                {initiativeSlugs.map((init) => (
                    <Link href={`/${init.slug}`} key={init.slug} className="card">
                        <init.icon className="icon" color="var(--accent)" />
                        <h3>{init.title}</h3>
                        {/* We could fetch excerpts here if we wanted */}
                        <p>Click to learn more about our work in {init.title.toLowerCase()}.</p>
                        <span style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '1rem', display: 'block' }}>View Details →</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
