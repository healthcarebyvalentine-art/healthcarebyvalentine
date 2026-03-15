import React from 'react'
import { CREDENTIALS } from '../constants'

export default function Credentials() {
  return (
    <section style={{ borderTop: '1px solid rgba(212,175,55,0.1)', padding: '52px clamp(20px,4vw,64px)', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 28 }}>
        {CREDENTIALS.map((c) => (
          <div key={c.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 26, marginBottom: 8 }}>{c.icon}</div>
            <div style={{ color: '#D4AF37', fontSize: 8, letterSpacing: 3.5, fontWeight: 600, fontFamily: 'DM Mono, monospace' }}>{c.label}</div>
            <div style={{ color: 'rgba(249,247,242,0.3)', fontSize: 8, marginTop: 4, fontFamily: 'DM Mono, monospace' }}>{c.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
