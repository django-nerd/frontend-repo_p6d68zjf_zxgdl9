import { motion } from 'framer-motion'

export default function FomoCta({ onCTAClick }) {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[900px] rounded-full bg-red-600/20 blur-[140px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-extrabold"
        >
          Early Access is limited. Secure your spot now.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 flex items-center justify-center"
        >
          <button
            onClick={onCTAClick}
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-md font-bold uppercase tracking-wide text-sm bg-red-600 hover:bg-red-500 transition-colors"
          >
            <span>Unlock Early Access</span>
            <span className="ml-3 h-[2px] w-6 bg-white/70 group-hover:w-8 transition-all" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
