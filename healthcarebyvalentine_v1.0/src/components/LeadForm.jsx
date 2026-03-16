import React, { useState } from 'react'
import { BOROUGHS, PROFESSIONS } from '../constants'

const PRODUCTS = [
  'Accident Protection',
  'Sickness Protection',
  'Short-Term Disability',
  'Long-Term Disability',
  'Life Insurance',
  'Critical Illness',
  'Cancer Coverage',
]

export default function LeadForm() {
  const [selected, setSelected] = useState([])
  const [status, setStatus] = useState(null)

  const toggle = (product) => {
    setSelected((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.target)
    formData.set('interested_in', selected.join(', ') || 'None selected')

    try {
      const res = await fetch('https://formspree.io/f/mwvrrzrj', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 16px' }}>
      <div style={{ fontSize: 52, marginBottom: 14 }}>🕊</div>
      <h3 style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif', fontSize: 26, marginBottom: 10, fontWeight: 700 }}>
        I Received Your Information.
      </h3>
      <p style={{ color: 'rgba(249,247,242,0.72)', fontSize: 15, lineHeight: 1.9 }}>
        I will personally reach out to you within 24 hours.<br />
        Thank you for trusting me with something this important.
      </p>
      <p style={{ color: 'rgba(249,247,242,0.35)', fontSize: 11, marginTop: 16, fontFamily: 'DM Mono, monospace' }}>
        — Rev. Valentine Saint Martin
      </p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="source" value="healthcare-by-valentine" />

      <label className="f-label">Your Full Name *</label>
      <input className="f-input" name="name" placeholder="First and Last Name" required />

      <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label className="f-label">Phone Number *</label>
          <input className="f-input" style={{ marginBottom: 0 }} name="phone" type="tel" placeholder="(718) 000-0000" required />
        </div>
        <div>
          <label className="f-label">Email Address</label>
          <input className="f-input" style={{ marginBottom: 0 }} name="email" type="email" placeholder="Optional" />
        </div>
      </div>
      <div style={{ marginBottom: 12 }} />

      <label className="f-label">Your Profession *</label>
      <select className="f-input" name="profession" required>
        <option value="">Select Profession</option>
        {PROFESSIONS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>

      <label className="f-label">Borough *</label>
      <select className="f-input" name="borough" required>
        <option value="">Select Borough</option>
        {BOROUGHS.map((b) => <option key={b} value={b}>{b}</option>)}
      </select>

      <label className="f-label">Coverage Is For</label>
      <select className="f-input" name="forSelf" defaultValue="Myself">
        <option value="Myself">Myself</option>
        <option value="My Business">My Business</option>
        <option value="My Employees">My Employees</option>
        <option value="My Family">My Family</option>
      </select>

      {/* PRODUCT CHECKLIST */}
      <label className="f-label" style={{ marginBottom: 8 }}>
        I Am Interested In (Select All That Apply)
      </label>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 8,
        marginBottom: 14,
        background: 'rgba(212,175,55,0.03)',
        border: '1px solid rgba(212,175,55,0.15)',
        borderRadius: 4,
        padding: '14px 16px',
      }}>
        {PRODUCTS.map((product) => (
          <label
            key={product}
            onClick={() => toggle(product)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              cursor: 'pointer',
              color: selected.includes(product) ? '#D4AF37' : 'rgba(249,247,242,0.55)',
              fontSize: 11,
              fontFamily: 'DM Mono, monospace',
              letterSpacing: 0.5,
              transition: 'color 0.2s',
              userSelect: 'none',
            }}
          >
            <div style={{
              width: 16,
              height: 16,
              borderRadius: 2,
              border: `1px solid ${selected.includes(product) ? '#D4AF37' : 'rgba(212,175,55,0.3)'}`,
              background: selected.includes(product) ? 'rgba(212,175,55,0.15)' : 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'all 0.2s',
            }}>
              {selected.in
