import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import WhoWeServe from './components/WhoWeServe'
import Services from './components/Services'
import ForensicAudit from './components/ForensicAudit'
import NurseFAQ from './components/NurseFAQ'
import Reviews from './components/Reviews'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <WhoWeServe />
        <Services />
        <ForensicAudit />
        <NurseFAQ />
        <Reviews />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
