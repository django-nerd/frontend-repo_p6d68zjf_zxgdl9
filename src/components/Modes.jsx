import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const modes = [
  {
    name: 'Military Mode',
    desc: 'Cold focus. Zero excuses. Execute the mission.',
  },
  {
    name: 'Beast Mode',
    desc: 'Unleash power. Go harder than motivation.',
  },
  {
    name: 'Unbreakable Mode',
    desc: 'Mental armor. Pressure becomes progress.',
  },
]

const avatars = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `Coach ${i + 1}`,
}))

export default function Modes() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          The Three Modes
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {modes.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * idx, duration: 0.6 }}
              className="relative rounded-xl overflow-hidden bg-gradient-to-b from-white/10 to-white/0 ring-1 ring-white/10 p-6"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-red-400 mb-2">{m.name}</div>
              <div className="text-xl font-bold">{m.desc}</div>
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-red-600/20 blur-xl" />
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm uppercase tracking-[0.25em] text-gray-400">Coaches</div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-4 min-w-max">
              {avatars.map((a) => (
                <div key={a.id} className="shrink-0 w-36">
                  <div className="relative aspect-square rounded-xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-br from-red-600 to-orange-500" />
                  <div className="mt-2 text-sm text-gray-200">{a.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
