import React, { useState } from 'react'
import { NURSE_FAQS } from '../constants'

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0)
  return (
    <div style={{ background: 'rgba(135,206,235,0.025)', border: '1px solid rgba(135,206,235,0.12)', borderLeft: '2px solid #87CEEB', borderRadius: 4, marginBottom: 14, overflow: 'hidden' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: '20px 26px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, textAlign: 'left' }}
      >
        <span style={{ color: '#87CEEB', fontFamily: 'Cormorant Garamond, serif', fontSize: 17, fontStyle: 'italic', lineHeight: 1.35 }}>
          {faq.q}
        </span>
        <span style={{ color: '#D4AF37', fontSize: 20, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', display: 'block', lineHeight: 1 }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 26px 22px' }}>
          <p style={{ color: 'rgba(249,247,242,0.7)', fontSize: 14, lineHeight: 1.9 }}>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function NurseFAQ() {
  return (
    <section className="section">
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px,4vw,64px)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="label" style={{ color: '#87CEEB', textAlign: 'center' }}>⚕ MY ANSWER TO HEALTHCARE PROFESSIONALS</span>
          <h2 className="h2">Questions I Hear<br />Every Day</h2>
        </div>
        {NURSE_FAQS.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </section>
  )
}
