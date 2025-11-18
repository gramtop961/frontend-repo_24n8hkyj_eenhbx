import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#features', label: 'Solutions' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <motion.nav
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-[0_8px_40px_rgba(59,130,246,0.15)]"
        >
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-purple-500 opacity-70" />
              <div className="relative bg-slate-900 ring-1 ring-white/10 rounded-lg w-9 h-9 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-sky-300" />
              </div>
            </div>
            <span className="font-semibold tracking-tight text-white text-lg">PixilBloom</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white px-4 py-2 shadow-lg shadow-sky-500/20">
              Start a project
            </a>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="mx-4 mt-3 md:hidden"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/90">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block rounded-xl bg-gradient-to-r from-sky-500 to-fuchsia-500 text-white px-4 py-2 text-center">
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
