import React from 'react'
import { BOROUGHS, PROFESSIONS } from '../constants'

export default function LeadForm() {
  return (
    <form action="https://formspree.io/f/mwvrrzrj" method="POST">
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
