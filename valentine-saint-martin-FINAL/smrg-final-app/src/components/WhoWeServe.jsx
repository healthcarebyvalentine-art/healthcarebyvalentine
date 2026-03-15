import React from 'react'
import { VERTICALS } from '../constants'
import { scrollTo } from '../utils/scroll'

export default function WhoWeServe() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="label" style={{ textAlign: 'center' }}>THE PEOPLE I SERVE</span>
          <h2 className="h2">The Heartbeat<br />of New York</h2>
          <p style={{ color: 'rgba(249,247,242,0.45)', marginTop: 16, fontSize: 15, maxWidth: 480, margin: '16px auto 0', lineHeight: 1.75 }}>
            I built my practice for the people who keep this city running. If you work in one of these verticals, I have a forensic structure designed specifically for you.
          </p>
        </div>
        <div className="three-col">
          {VERTICALS.map((v) => (
            <div key={v.label} className="glass-card" style={{ padding: '38px 28px', textAlign: 'center' }}>
              <div style={{ fontSize: 46, marginBottom: 16 }}>{v.icon}</div>
              <div style={{ color: '#D4AF37', fontSize: 8.5, letterSpacing: 3.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 14 }}>{v.label}</div>
              <p style={{ color: 'rgba(249,247,242,0.6)', fontSize: 14, lineHeight: 1.85 }}>{v.desc}</p>
              <button className="btn-micro" onClick={() => scrollTo('contact')}>WORK WITH ME →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
