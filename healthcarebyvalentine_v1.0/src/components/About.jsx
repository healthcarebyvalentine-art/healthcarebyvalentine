import React from 'react'

const BULLETS = ['Solo Fiduciary', 'FBI Fingerprinted', 'NY State Licensed', '20 Yrs Experience', 'No Medical Exam', '§ 2119 Compliant']

const QUOTES = [
  `"Money isn't everything. But it pays for everything."`,
  `"Better to have it and not need it, than to need it and not have it."`,
  `"I help get you the most benefits when you need it the most."`,
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="two-col">
          {/* LEFT */}
          <div>
            <span className="label">WHO I AM</span>
            <h2 className="h2">I'm Rev. Valentine<br />Saint Martin.</h2>
            <div className="divider" />
            <p className="body-text" style={{ marginBottom: 18 }}>
              I've spent 20 years mastering the intersection of healthcare administration, insurance carrier logic, and fiduciary responsibility. I built my practice on one principle: the people who protect this city deserve someone protecting them.
            </p>
            <p className="body-text" style={{ marginBottom: 18 }}>
              I am a <span style={{ color: '#D4AF37', fontWeight: 600 }}>Solo Fiduciary</span> — FBI fingerprinted, NY licensed. I personally analyze your situation, personally identify your vulnerabilities, and personally architect your permanent wealth structure. I don't hand you off. I don't delegate. Every client gets me.
            </p>
            <p className="body-text" style={{ marginBottom: 32 }}>
              My forensic back-end analysis goes deeper than any standard policy review. I know how carriers think, where they hide exclusions, and exactly which gaps will cause a denial at the worst possible moment. I plug those gaps — permanently.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
              {BULLETS.map((b) => (
                <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: '#D4AF37', fontSize: 10 }}>✦</span>
                  <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(249,247,242,0.75)', fontFamily: 'DM Mono, monospace' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Brand quotes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {QUOTES.map((q, i) => (
              <div key={i} className="glass-card" style={{
                padding: '22px 26px',
                background: i === 1 ? 'rgba(212,175,55,0.09)' : 'rgba(212,175,55,0.03)',
                border: `1px solid rgba(212,175,55,${i === 1 ? '0.4' : '0.15'})`,
                boxShadow: i === 1 ? 'var(--glow)' : 'none',
                marginLeft: i === 1 ? 24 : 0,
              }}>
                <div style={{ color: '#D4AF37', fontSize: 28, fontFamily: 'Cormorant Garamond, serif', lineHeight: 0.7, marginBottom: 10 }}>"</div>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontStyle: 'italic', lineHeight: 1.65, color: '#F9F7F2' }}>
                  {q.slice(1)}
                </p>
                <div style={{ color: '#D4AF37', fontSize: 8, letterSpacing: 3, marginTop: 12, fontWeight: 500, fontFamily: 'DM Mono, monospace' }}>
                  — REV. VALENTINE SAINT MARTIN
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
