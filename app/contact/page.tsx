import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Get in touch</h1>
                <p className="page-subtitle">Questions about Last Mile Now? Send us a note.</p>
            </header>
            <ContactForm />
        </div>
    )
}
