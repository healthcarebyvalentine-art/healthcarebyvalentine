import React from 'react'
import { AUDIT_STEPS } from '../constants'
import { scrollTo } from '../utils/scroll'

export default function ForensicAudit() {
  return (
    <section id="audit" className="section" style={{ background: 'linear-gradient(135deg,rgba(212,175,55,0.07),rgba(5,5,5,0.98))', borderTop: '1px solid rgba(212,175,55,0.12)', borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="label" style={{ textAlign: 'center' }}>HOW I WORK</span>
        <h2 className="h2" style={{ marginBottom: 20 }}>My Forensic Method</h2>
        <p style={{ color: 'rgba(249,247,242,0.55)', fontSize: 15, lineHeight: 1.85, maxWidth: 640, margin: '0 auto 60px' }}>
          I personally perform a forensic back-end analysis of carrier logic — identifying every hole, gap, and hidden exclusion in your current coverage that could trigger a denial exactly when you need it most. Then I fix it.
        </p>

        <div className="four-col" style={{ marginBottom: 56 }}>
          {AUDIT_STEPS.map((s) => (
            <div key={s.n} style={{ padding: '0 8px', textAlign: 'center' }}>
              <div style={{ color: '#D4AF37', fontFamily: 'Cormorant Garamond, serif', fontSize: 58, fontWeight: 700, opacity: 0.2, lineHeight: 1, marginBottom: 10 }}>{s.n}</div>
              <div style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 10 }}>{s.t}</div>
              <p style={{ color: 'rgba(249,247,242,0.5)', fontSize: 13, lineHeight: 1.75 }}>{s.d}</p>
            </div>
          ))}
        </div>

        <button className="btn-primary" onClick={() => scrollTo('contact')}>
          LET ME START YOUR AUDIT
        </button>
      </div>
    </section>
  )
}
