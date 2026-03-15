import React, { useState } from 'react'
import { useScrolled } from '../hooks/useScrolled'
import { scrollTo } from '../utils/scroll'

const NAV_LINKS = [
  ['ABOUT',    'about'],
  ['SERVICES', 'services'],
  ['MY METHOD','audit'],
  ['PROOF',    'proof'],
  ['CONTACT',  'contact'],
]

export default function Navbar() {
  const scrolled = useScrolled(80)
  const [mobOpen, setMobOpen] = useState(false)

  return (
    <>
      <div className="gold-bar" />

      <nav style={{
        position: 'fixed', top: 3, left: 0, right: 0, zIndex: 999,
        padding: '0 clamp(20px,4vw,64px)', height: 66,
        background: scrolled ? 'rgba(5,5,5,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.1)' : 'none',
        transition: 'all 0.35s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* LOGO */}
        <button
          onClick={() => scrollTo('hero')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, padding: 0 }}
        >
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            border: '1.5px solid #D4AF37',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(212,175,55,0.06)',
            animation: 'pulseRing 3s infinite',
          }}>
            <span style={{ color: '#D4AF37', fontSize: 18, fontWeight: 700, fontFamily: 'Cormorant Garamond, serif' }}>V</span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#D4AF37', fontSize: 9.5, letterSpacing: 3.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', lineHeight: 1.3 }}>
              VALENTINE SAINT MARTIN
            </div>
            <div style={{ color: 'rgba(249,247,242,0.3)', fontSize: 7, letterSpacing: 2.5, fontFamily: 'DM Mono, monospace', marginTop: 2 }}>
              FORENSIC FIDUCIARY · NYC
            </div>
          </div>
        </button>

        {/* DESKTOP */}
        <div className="hide-mob" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {NAV_LINKS.map(([label, id]) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <button
            className="btn-primary"
            onClick={() => scrollTo('contact')}
            style={{ padding: '9px 22px', fontSize: '8.5px' }}
          >
            FREE AUDIT
          </button>
        </div>

        {/* MOBILE TOGGLE — hidden on desktop, shown on mobile via CSS */}
        <button
          onClick={() => setMobOpen(!mobOpen)}
          className="show-mob"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D4AF37', fontSize: 26, lineHeight: 1, display: 'none' }}
          aria-label="Menu"
        >
          {mobOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobOpen && (
        <div style={{
          position: 'fixed', top: 69, left: 0, right: 0, zIndex: 998,
          background: 'rgba(5,5,5,0.98)',
          borderBottom: '1px solid rgba(212,175,55,0.1)',
          padding: '28px 32px',
          display: 'flex', flexDirection: 'column', gap: 22,
          backdropFilter: 'blur(20px)',
        }}>
          {NAV_LINKS.map(([label, id]) => (
            <button
              key={id} className="nav-link"
              style={{ textAlign: 'left', fontSize: 11 }}
              onClick={() => { scrollTo(id); setMobOpen(false) }}
            >
              {label}
            </button>
          ))}
          <button
            className="btn-primary"
            onClick={() => { scrollTo('contact'); setMobOpen(false) }}
            style={{ justifyContent: 'center' }}
          >
            ⚖ FREE AUDIT
          </button>
        </div>
      )}
    </>
  )
}
