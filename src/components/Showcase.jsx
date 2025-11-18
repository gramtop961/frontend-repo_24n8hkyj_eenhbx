import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Orbit Commerce',
    desc: 'A 3D-native storefront with interactive product exploration.',
    tags: ['React', 'Spline', 'Stripe'],
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Pulse Analytics',
    desc: 'Realtime dashboards with smooth transitions and live data.',
    tags: ['FastAPI', 'WebSockets', 'Framer Motion'],
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Verve Studio',
    desc: 'A creative portfolio with spatial navigation and parallax.',
    tags: ['Next.js', 'WebGL', 'Design System'],
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'
  },
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Selected work
        </motion.h2>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img src={p.img} alt="" className="h-56 w-full object-cover object-center transition duration-700 group-hover:scale-105" />
              <div className="p-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200">
                  {p.tags.join(' • ')}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-slate-300 text-sm">{p.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-sky-500/10 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
