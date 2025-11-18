import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/20 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            Hand‑crafted software, playful 3D, real business impact
          </div>

          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
            We build delightful products for bold brands
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
            PixilBloom is a boutique studio blending code, art, and motion. We design and ship polished web apps with immersive 3D and buttery animations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-400 text-white px-6 py-3 shadow-lg shadow-fuchsia-500/20">
              Start your project
            </a>
            <a href="#work" className="rounded-2xl border border-white/15 text-white/90 px-6 py-3 hover:bg-white/10 transition">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
