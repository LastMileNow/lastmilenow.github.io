import { ArrowRight, Code, Shield, Rocket, Heart, Zap } from 'lucide-react'

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
            <button className="btn btn-primary">
              Explore Initiatives <ArrowRight size={20} />
            </button>
            <button className="btn" style={{ background: 'var(--neutral-100)' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Arm Overview */}
      <section className="container sections-grid">
        <div className="card">
          <Heart className="icon" color="var(--accent)" />
          <h3>Non-Profit Arm</h3>
          <p>The Mission Engine: Democratization, Education, Access, and Trust.</p>
          <ul className="list">
            <li>AI Driving School for SMBs</li>
            <li>Senior Citizen Companionship</li>
            <li>Open Source Public Goods</li>
          </ul>
        </div>
        <div className="card">
          <Rocket className="icon" color="var(--accent-secondary)" />
          <h3>For-Profit Arm</h3>
          <p>The Sustainability Engine: Implementation, Customization, and Scale.</p>
          <ul className="list">
            <li>Modern implementation Services</li>
            <li>Niche Micro-SaaS Products</li>
            <li>Enterprise-Grade Support</li>
          </ul>
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
              <p>Building the API glue between legacy SMB software and modern LLMs.</p>
            </div>
            <div className="bento-item card">
              <Zap className="icon" />
              <h4>The Translator</h4>
              <p>UX interfaces that strip away "tech speak" and replace it with human concepts.</p>
            </div>
            <div className="bento-item card">
              <Shield className="icon" />
              <h4>The Guardian</h4>
              <p>Tools designed to prevent SMBs from accidentally leaking trade secrets.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
