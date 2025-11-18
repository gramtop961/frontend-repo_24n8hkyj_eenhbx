import { motion } from 'framer-motion'
import { Sparkles, Code2, Rocket, Layers, Zap, Shapes } from 'lucide-react'

const items = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Artful interfaces',
    desc: 'Bespoke design systems, pixel-perfect layouts, and refined typography.'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: '3D & motion',
    desc: 'Spline scenes, WebGL accents, and cinematic micro-interactions.'
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Serious engineering',
    desc: 'Robust APIs, secure auth, and scalable data layers by default.'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Performance focused',
    desc: 'First-class Core Web Vitals and buttery-smooth framer-motion.'
  },
  {
    icon: <Shapes className="w-6 h-6" />,
    title: 'Brand expression',
    desc: 'Custom visuals and interactions that feel uniquely yours.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Launch ready',
    desc: 'From idea to production with CI/CD and observability built in.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(99,102,241,.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          What we do
        </motion.h2>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition shadow-[0_8px_40px_rgba(59,130,246,0.15)]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-sky-500 to-emerald-400 text-white flex items-center justify-center mb-4">
                {it.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
