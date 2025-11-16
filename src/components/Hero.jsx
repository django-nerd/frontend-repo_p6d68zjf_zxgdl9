import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block uppercase tracking-[0.35em] text-[11px] sm:text-xs text-red-400/90 bg-red-400/10 border border-red-500/30 px-3 py-1 rounded-full"
          >
            FistMode Early Access
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="block">Activate Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400">Inner Beast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-6 text-base sm:text-lg text-gray-200/90 max-w-xl"
          >
            Join the early-access movement and be among the first to unlock the FistMode coaching experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onCTAClick}
              className="group relative inline-flex items-center justify-center px-7 py-3 rounded-md font-semibold uppercase tracking-wide text-sm bg-red-600 hover:bg-red-500 transition-colors"
            >
              <span>Get Early Access</span>
              <span className="ml-3 h-[2px] w-6 bg-white/70 group-hover:w-8 transition-all" />
            </button>

            <span className="text-xs text-gray-400">Limited slots • Priority invites</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 backdrop-blur bg-white/5">
            <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/40 via-orange-500/30 to-yellow-400/30 blur-2xl opacity-40 pointer-events-none" />
            <div className="relative aspect-[9/6] w-full max-w-xl mx-auto flex items-center justify-center">
              <DeviceMockup />
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400 text-center">Sneak peek: FistMode UI (concept)</div>
        </motion.div>
      </div>
    </section>
  )
}

function DeviceMockup() {
  return (
    <div className="relative w-[92%] sm:w-[85%] md:w-[80%] aspect-[9/19] rounded-[32px] bg-neutral-900 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
      <div className="absolute inset-0 rounded-[32px] p-3 bg-gradient-to-br from-white/5 to-white/0">
        <div className="h-full w-full rounded-[24px] overflow-hidden bg-black">
          <div className="h-8 w-full bg-neutral-950 flex items-center justify-center text-[10px] tracking-widest uppercase text-neutral-400">FISTMODE</div>
          <div className="px-4 py-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-widest text-red-400">Beast Mode</div>
              <div className="text-[10px] text-neutral-400">45 min</div>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-red-600 to-orange-500" />
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              {['Military','Beast','Unbreakable'].map((m) => (
                <div key={m} className="rounded-md bg-white/5 ring-1 ring-white/10 px-2 py-3 text-center">
                  <div className="uppercase tracking-wide text-[9px] text-neutral-400">Mode</div>
                  <div className="font-semibold text-white">{m}</div>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
              <div className="text-[10px] uppercase tracking-widest text-neutral-400">Coach</div>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-red-600 to-orange-500" />
                <div className="text-xs">Rogue Commander</div>
                <div className="ml-auto text-[10px] text-neutral-400">Audio ON</div>
              </div>
            </div>
            <button className="mt-3 w-full rounded-md bg-red-600 hover:bg-red-500 text-white text-xs uppercase tracking-wide py-3">Start Session</button>
          </div>
        </div>
      </div>
    </div>
  )
}
