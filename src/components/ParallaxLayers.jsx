import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxLayers() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, -60])
  const y2 = useTransform(scrollY, [0, 800], [0, -120])
  const y3 = useTransform(scrollY, [0, 800], [0, -200])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft color washes that parallax at different speeds */}
      <motion.div style={{ y: y1 }} className="absolute -top-1/3 -left-1/3 h-[120vmax] w-[120vmax] rounded-full opacity-30 blur-3xl bg-gradient-to-br from-sky-500/30 via-fuchsia-400/20 to-emerald-400/20" />
      <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-1/4 h-[90vmax] w-[90vmax] rounded-full opacity-25 blur-3xl bg-gradient-to-tr from-fuchsia-500/25 via-sky-400/15 to-purple-500/20" />
      <motion.div style={{ y: y3 }} className="absolute -bottom-1/3 left-1/4 h-[80vmax] w-[80vmax] rounded-full opacity-20 blur-3xl bg-gradient-to-tl from-emerald-400/20 via-sky-400/10 to-fuchsia-400/20" />
    </div>
  )
}
