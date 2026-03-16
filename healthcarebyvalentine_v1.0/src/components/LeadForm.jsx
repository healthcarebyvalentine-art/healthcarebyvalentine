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

  const toggle = (product) => {
    setSelected((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product]
    )
  }

  return (
    <form action="https://formspree.io/f/mwvrrzrj" method="POST">
      <input type="hidden" name="source" value="healthcare-by-valentine" />
      <input type="hidden" name="interested_in" value={selected.join(', ')} />

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
              {selected.includes(product) && (
                <span style={{ color: '#D4AF37', fontSize: 10, lineHeight: 1 }}>✓</span>
              )}
            </div>
            {product}
          </label>
        ))}
      </div>

      <label className="f-label">Anything I Should Know?</label>
      <input className="f-input" name="notes" placeholder="Current coverage, health conditions, questions..." />

      <button
        type="submit"
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: 4, padding: '16px 0', fontSize: 10 }}
      >
        ✝ GET MY FREE FORENSIC AUDIT
      </button>

      <p style={{ color: 'rgba(249,247,242,0.28)', fontSize: 8.5, textAlign: 'center', marginTop: 10, fontFamily: 'DM Mono, monospace', letterSpacing: 1 }}>
        NO OBLIGATION · I NEVER SELL YOUR DATA · NY § 2119
      </p>

    </form>
  )
}
