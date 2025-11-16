import { motion } from 'framer-motion'

export default function SocialProof() {
  return (
    <section className="relative bg-black text-white py-20 sm:py-28">
      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-gray-400">Social Proof</div>
            <h3 className="mt-2 text-3xl font-extrabold">Already followed by 2500+ TikTok users.</h3>
            <p className="mt-4 text-gray-300 max-w-md">Real momentum. Real community. FistMode is already building a movement—join early and lead from the front.</p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
              <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/30 via-orange-500/20 to-yellow-400/20 blur-2xl opacity-40 pointer-events-none" />
              <div className="relative">
                <div className="aspect-video w-full bg-black flex items-center justify-center">
                  <TikTokPreview />
                </div>
              </div>
            </div>
            <div className="mt-3 text-xs text-gray-400">Preview: TikTok-style clip</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TikTokPreview() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[220px] sm:w-[260px] md:w-[320px] aspect-[9/16] rounded-[20px] overflow-hidden bg-neutral-900 ring-1 ring-white/10">
        <div className="absolute top-2 left-2 text-[10px] uppercase tracking-widest text-white/80 bg-white/10 px-2 py-1 rounded">FistMode</div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="text-white text-xs">
            <div className="font-semibold">@fistmode</div>
            <div className="text-white/80">Aggressive discipline wins</div>
          </div>
          <div className="text-white/90 text-right text-[10px]">
            <div>2.5k followers</div>
            <div>71k views</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white font-bold">▶</div>
        </div>
      </div>
    </div>
  )
}
