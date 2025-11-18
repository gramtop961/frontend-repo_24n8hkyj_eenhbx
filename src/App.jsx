import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Contact from './components/Contact'
import ParallaxLayers from './components/ParallaxLayers'
import CursorParticles from './components/CursorParticles'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500/30">
      {/* Ambient parallax color fields */}
      <ParallaxLayers />
      {/* Soft nebula background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 [background:radial-gradient(1200px_600px_at_10%_10%,rgba(56,189,248,0.10),transparent),radial-gradient(1000px_500px_at_90%_20%,rgba(217,70,239,0.08),transparent),radial-gradient(900px_400px_at_50%_100%,rgba(34,197,94,0.08),transparent)]" />
      {/* Cursor-follow particles */}
      <CursorParticles />

      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <Features />
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <Showcase />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>

      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} PixilBloom. All rights reserved.</p>
          <div className="text-sm text-slate-400">Crafted with care — animations, 3D, and lots of love.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
