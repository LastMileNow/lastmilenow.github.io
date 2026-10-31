import Link from 'next/link'
import { GraduationCap, PenTool, Shield, MessageSquare } from 'lucide-react'

const initiativeSlugs = [
    {
        slug: 'literacy',
        title: 'AI Driving School',
        icon: GraduationCap,
        description: 'Teaching small business owners and seniors to use generative AI for everyday tasks.',
    },
    {
        slug: 'implementation',
        title: 'AI Implementation',
        icon: PenTool,
        description: 'Helping owners understand what it takes to connect AI tools to the software they already use.',
    },
    {
        slug: 'trust',
        title: 'Trust & Security',
        icon: Shield,
        description: 'Practical habits for choosing and using AI tools safely and privately.',
    },
    {
        slug: 'advocacy',
        title: 'Our Perspective',
        icon: MessageSquare,
        description: 'Where we stand on data dignity, open standards, privacy, and AI’s impact on workers.',
    },
]

export default function InitiativesPage() {
    return (
        <div className="container" style={{ padding: '8rem 2rem' }}>
            <header className="page-header">
                <h1 className="page-title">Our Initiatives</h1>
                <p className="page-subtitle">Mission-driven projects solving the Last Mile problem.</p>
            </header>

            <div className="bento-grid bento-grid-2" style={{ marginTop: '4rem' }}>
                {initiativeSlugs.map((init) => (
                    <Link href={`/${init.slug}`} key={init.slug} className="card">
                        <init.icon className="icon" color="var(--accent)" />
                        <h3>{init.title}</h3>
                        <p>{init.description}</p>
                        <span style={{ color: 'var(--accent)', fontWeight: 600, marginTop: '1rem', display: 'block' }}>View Details →</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
