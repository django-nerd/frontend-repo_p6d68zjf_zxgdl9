import { motion } from 'framer-motion'

export default function WhatIs() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,rgba(248,113,113,0.25),transparent_60%)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          What is FistMode?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-lg text-gray-200 max-w-3xl"
        >
          Sharp, disciplined, aggressive motivation. FistMode is a mental discipline coaching tool powered by audio-based coaches. Choose your mode, lock-in with a coach, and push through the work. Less hype—more execution.
        </motion.p>
      </div>
    </section>
  )
}
