import React from 'react'
import { PRODUCTS } from '../constants'
import { scrollTo } from '../utils/scroll'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label" style={{ textAlign: 'center' }}>WHAT I OFFER</span>
          <h2 className="h2">My Product Arsenal</h2>
          <p style={{ color: 'rgba(249,247,242,0.42)', marginTop: 14, fontSize: 11, maxWidth: 480, margin: '14px auto 0', fontFamily: 'DM Mono, monospace', lineHeight: 1.8, letterSpacing: 0.5 }}>
            ON-JOB & OFF-JOB COVERAGE · NO MEDICAL EXAM · PERMANENT STRUCTURES — NOT RENTALS
          </p>
        </div>
        <div className="three-col">
          {PRODUCTS.map((p) => (
            <div key={p.category} className="glass-card" style={{ padding: '36px 28px', borderTop: '2px solid #D4AF37' }}>
              <div style={{ fontSize: 38, marginBottom: 14 }}>{p.icon}</div>
              <div style={{ color: '#D4AF37', fontSize: 8.5, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 20 }}>{p.category}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
                {p.items.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, color: 'rgba(249,247,242,0.75)', fontSize: 13.5 }}>
                    <span style={{ color: '#D4AF37', fontSize: 8 }}>◆</span>{item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => scrollTo('contact')}
                style={{ width: '100%', background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.25)', color: '#D4AF37', borderRadius: 4, padding: '11px 0', fontSize: 9, letterSpacing: 2.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', cursor: 'pointer', transition: 'background 0.18s' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(212,175,55,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(212,175,55,0.06)'}
              >
                I'LL AUDIT THIS COVERAGE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
