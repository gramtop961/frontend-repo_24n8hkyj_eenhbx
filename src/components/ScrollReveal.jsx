import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, y = 20 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.25, once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.6, delay } })
  }, [isInView, controls, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={controls}>
      {children}
    </motion.div>
  )
}
