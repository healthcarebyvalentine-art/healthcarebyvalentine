import React, { useState } from 'react'
import { GOOGLE_SCRIPT_URL, BOROUGHS, PROFESSIONS } from '../constants'

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    profession: '', borough: '', facility: '', referral: '',
  })
  const [status, setStatus] = useState(null) // null | validate | sending | success | error

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.email || !form.phone || !form.profession || !form.borough) {
      setStatus('validate')
      return
    }
    setStatus('sending')
    try {
      const params = new URLSearchParams({ ...form, timestamp: new Date().toISOString() })
      await fetch(`${GOOGLE_SCRIPT_URL}?${params}`, { method: 'GET', mode: 'no-cors' })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 16px' }}>
      <div style={{ fontSize: 52, marginBottom: 14 }}>✅</div>
      <h3 style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif', fontSize: 26, marginBottom: 10, fontWeight: 700 }}>
        Dossier Received.
      </h3>
      <p style={{ color: 'rgba(249,247,242,0.72)', fontSize: 14, lineHeight: 1.8 }}>
        I will reach out to you personally within 24 hours.<br />
        Your forensic audit begins now.
      </p>
    </div>
  )

  return (
    <div>
      <label className="f-label">Full Name *</label>
      <input className="f-input" placeholder="Your Full Name" value={form.name} onChange={set('name')} />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label className="f-label">Email Address *</label>
          <input className="f-input" style={{ marginBottom: 0 }} type="email" placeholder="email@domain.com" value={form.email} onChange={set('email')} />
        </div>
        <div>
          <label className="f-label">Phone Number *</label>
          <input className="f-input" style={{ marginBottom: 0 }} type="tel" placeholder="(718) 000-0000" value={form.phone} onChange={set('phone')} />
        </div>
      </div>
      <div style={{ marginBottom: 12 }} />

      <label className="f-label">Profession / Industry *</label>
      <select className="f-input" value={form.profession} onChange={set('profession')}>
        <option value="">Select Your Profession</option>
        {PROFESSIONS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>

      <label className="f-label">Borough *</label>
      <select className="f-input" value={form.borough} onChange={set('borough')}>
        <option value="">Select Your Borough</option>
        {BOROUGHS.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>

      <label className="f-label">Facility / Business Name</label>
      <input className="f-input" placeholder="Hospital, Clinic, Business Name..." value={form.facility} onChange={set('facility')} />

      <label className="f-label">How Did You Find Me?</label>
      <input className="f-input" placeholder="Referral, Google, Social Media..." value={form.referral} onChange={set('referral')} />

      {status === 'validate' && (
        <p style={{ color: '#ff6b6b', fontSize: 11, fontFamily: 'DM Mono, monospace', marginBottom: 10 }}>
          ⚠ Please complete all required fields (*)
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ff6b6b', fontSize: 11, fontFamily: 'DM Mono, monospace', marginBottom: 10 }}>
          ⚠ Submission error — please use the contact form below to reach me directly.
        </p>
      )}

      <button
        className="btn-primary"
        onClick={submit}
        disabled={status === 'sending'}
        style={{ width: '100%', justifyContent: 'center', marginTop: 4, padding: '16px 0', fontSize: 10 }}
      >
        {status === 'sending' ? 'TRANSMITTING YOUR DOSSIER...' : '⚖ CLAIM YOUR FREE FORENSIC AUDIT'}
      </button>

      <p style={{ color: 'rgba(249,247,242,0.28)', fontSize: 8.5, textAlign: 'center', marginTop: 10, fontFamily: 'DM Mono, monospace', letterSpacing: 1 }}>
        FIDUCIARY-PROTECTED · NY § 2119 · I NEVER SELL YOUR DATA
      </p>
    </div>
  )
}
