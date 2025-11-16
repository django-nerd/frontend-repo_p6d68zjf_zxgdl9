import { motion } from 'framer-motion'
import { Headphones, Brain, Trophy, User, PlayCircle } from 'lucide-react'

const steps = [
  { title: 'Choose your mode', icon: Brain, desc: 'Set your intensity. Lock focus.' },
  { title: 'Pick your coach', icon: User, desc: 'Select a voice that hits your mindset.' },
  { title: 'Start audio coaching', icon: Headphones, desc: 'Press play and execute.' },
  { title: 'Build discipline', icon: PlayCircle, desc: 'Stack sessions. Kill excuses.' },
  { title: 'Earn progress badges (optional)', icon: Trophy, desc: 'Collect proof of work.' },
]

export default function HowItWorks() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-red-600/20 blur-[120px]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
        >
          How It Works
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * idx, duration: 0.6 }}
              className="rounded-xl p-6 bg-white/5 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-orange-500">
                  <s.icon size={20} />
                </div>
                <div className="font-bold">{s.title}</div>
              </div>
              <p className="mt-3 text-sm text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
