import { useRef } from 'react'
import Hero from './components/Hero'
import WhatIs from './components/WhatIs'
import Modes from './components/Modes'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import FomoCta from './components/FomoCta'

function App() {
  const ctaRef = useRef(null)

  const handleCTAClick = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black text-white font-[Manrope]">
      <Hero onCTAClick={handleCTAClick} />
      <WhatIs />
      <Modes />
      <HowItWorks />
      <SocialProof />

      <div ref={ctaRef}>
        <FomoCta onCTAClick={() => alert('Thanks! We will notify you for Early Access.')} />
      </div>

      <footer className="bg-black border-t border-white/10 py-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} FistMode. Discipline over motivation.
      </footer>
    </div>
  )
}

export default App
