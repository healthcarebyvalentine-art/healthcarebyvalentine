import React from 'react'
import LeadForm from './LeadForm'

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(180deg,#050505,rgba(212,175,55,0.055),#050505)' }}>
      <div className="container">
        <div className="two-col" style={{ alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            <span className="label">REACH ME DIRECTLY</span>
            <h2 className="h2">
              Your Legacy Starts<br />
              With <span style={{ color: '#D4AF37' }}>One Message.</span>
            </h2>
            <div className="divider" />

            <p className="body-text" style={{ marginBottom: 32 }}>
              I personally respond to every inquiry. Fill out the dossier and I will reach out to you within 24 hours to begin your forensic audit. No call centers. No assistants. Just me — applying 20 years of mastery to your specific situation.
            </p>

            {/* Value props */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
              {[
                { icon: '⚖', title: 'I Conduct Every Audit Personally', desc: 'You will never be handed off to an agent or assistant. Your case gets my direct attention from start to finish.' },
                { icon: '🔏', title: 'Your Data Is Protected', desc: 'As your fiduciary, I am legally obligated to protect your information. I never sell, share, or expose your data.' },
                { icon: '📋', title: 'No Obligation, No Pressure', desc: 'My free forensic audit is exactly that — free. You get my full analysis and I let you decide what to do next.' },
              ].map((item) => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid rgba(212,175,55,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, background: 'rgba(212,175,55,0.04)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#D4AF37', fontSize: 9, letterSpacing: 2.5, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 5 }}>{item.title}</div>
                    <p style={{ color: 'rgba(249,247,242,0.55)', fontSize: 13, lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal badge */}
            <div style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.16)', borderRadius: 4, padding: '18px 22px' }}>
              <div style={{ color: '#D4AF37', fontSize: 8, letterSpacing: 3, fontWeight: 600, fontFamily: 'DM Mono, monospace', marginBottom: 8 }}>⚖ NY INSURANCE LAW § 2119</div>
              <p style={{ color: 'rgba(249,247,242,0.5)', fontSize: 12, lineHeight: 1.75 }}>
                All my consulting engagements are governed by written fee agreements under New York Insurance Law § 2119. I operate under fiduciary duty — your interests come first, always.
              </p>
            </div>
          </div>

          {/* RIGHT — FORM ONLY, no email/phone */}
          <div style={{ background: 'rgba(212,175,55,0.04)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: 4, padding: '38px 32px', boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 28px rgba(212,175,55,0.5), 0 0 70px rgba(212,175,55,0.14)' }}>
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <span className="label" style={{ textAlign: 'center' }}>ELITE DOSSIER INTAKE</span>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 700, lineHeight: 1.2, color: '#F9F7F2' }}>
                Free Forensic Audit —<br /><span style={{ color: '#D4AF37' }}>Conducted by Me, Personally.</span>
              </h3>
            </div>
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  )
}
