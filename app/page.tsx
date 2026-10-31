import Link from 'next/link'
import { ArrowRight, Code, Shield, BookOpen, Heart, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title fade-in">
            Bridging the <span className="gradient-text">Last Mile</span> of AI
          </h1>
          <p className="hero-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
            Transforming powerful models into everyday utility for small businesses and individuals.
          </p>
          <div className="hero-cta fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/initiatives" className="btn btn-primary">
              Explore Initiatives <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="btn" style={{ background: 'var(--neutral-100)' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Arm Overview */}
      <section className="container sections-grid">
        <div className="card">
          <Heart className="icon" color="var(--accent)" />
          <h3>Teaching AI</h3>
          <p>Education, Access, and Trust for small businesses and seniors.</p>
          <ul className="list">
            <li>AI Driving School for SMBs</li>
            <li>Senior Citizen Companionship</li>
            <li>Open Source Public Goods</li>
          </ul>
        </div>
        <div className="card">
          <BookOpen className="icon" color="var(--accent-secondary)" />
          <h3>Need Hands-On Help?</h3>
          <p>
            Organizations that want paid, hands-on implementation can work with{' '}
            <a href="https://aspirework.com" style={{ color: 'var(--accent)', fontWeight: 600 }}>AspireWork</a>.
          </p>
        </div>
      </section>

      {/* Strategic Angles */}
      <section className="bg-alt">
        <div className="container">
          <h2 className="section-title">Common Strategic Angles</h2>
          <div className="bento-grid">
            <div className="bento-item card">
              <Code className="icon" />
              <h4>The Connector</h4>
              <p>Helping people understand how legacy SMB software can work with modern LLMs.</p>
            </div>
            <div className="bento-item card">
              <Zap className="icon" />
              <h4>The Translator</h4>
              <p>Explaining AI without "tech speak," using human concepts.</p>
            </div>
            <div className="bento-item card">
              <Shield className="icon" />
              <h4>The Guardian</h4>
              <p>Teaching habits that help SMBs avoid accidentally leaking trade secrets.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
