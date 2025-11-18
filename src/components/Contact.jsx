import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(600px_200px_at_20%_100%,rgba(236,72,153,.25),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-xl"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build something beautiful</h2>
              <p className="mt-4 text-slate-300">Tell us about your project and we’ll get back within 24 hours.</p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Web apps</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Brand sites</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Design systems</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">Prototyping</div>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-slate-200 text-sm mb-1">Name</label>
                <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-slate-2 00 text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-slate-200 text-sm mb-1">Project details</label>
                <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="What are you building?" />
              </div>
              <button className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-sky-500 to-emerald-400 text-white px-6 py-3 shadow-lg shadow-fuchsia-500/20 w-full md:w-auto">
                Send message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
