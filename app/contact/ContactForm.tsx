'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

// Formspree endpoint for the LMN "Get in touch" form (form ID: xpppyqeg)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xpppyqeg'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
    const [status, setStatus] = useState<Status>('idle')

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        setStatus('sending')
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' },
            })
            if (response.ok) {
                form.reset()
                setStatus('success')
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <form
            className="card contact-form"
            action={FORMSPREE_ENDPOINT}
            method="POST"
            onSubmit={handleSubmit}
        >
            <div className="form-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="form-field">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows={6} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send'}
            </button>
            <div role="status" aria-live="polite">
                {status === 'success' && (
                    <p className="form-message">Thanks — your message was sent.</p>
                )}
                {status === 'error' && (
                    <p className="form-message form-error">
                        Sorry, something went wrong. Please try again.
                    </p>
                )}
            </div>
        </form>
    )
}
