import { useEffect, useMemo, useRef, useState } from 'react'

// Lightweight cursor-follow particle trail using requestAnimationFrame
export default function CursorParticles({ count = 20, color = 'rgba(56,189,248,0.8)' }) {
  const canvasRef = useRef(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const particles = useMemo(() => Array.from({ length: count }, () => ({
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    life: Math.random() * 60 + 40,
    size: Math.random() * 2 + 1.5,
  })), [count])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    onResize()

    const onMove = (e) => {
      setPointer({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove)

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // Spawn a particle near the pointer
      particles.forEach((p, i) => {
        const dx = pointer.x - p.x
        const dy = pointer.y - p.y
        const dist = Math.max(1, Math.hypot(dx, dy))
        const force = 0.08
        p.vx += (dx / dist) * force
        p.vy += (dy / dist) * force
        p.vx *= 0.9
        p.vy *= 0.9
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.5

        // Draw particle
        const alpha = Math.max(0, p.life / 100)
        ctx.beginPath()
        ctx.fillStyle = color.replace('0.8', alpha.toFixed(2))
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Link lines between nearby particles for ambient feel
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const d = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (d < 80) {
            ctx.strokeStyle = `rgba(99,102,241,${(1 - d / 80) * 0.25})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }

        if (p.life <= 0) {
          p.x = pointer.x + (Math.random() - 0.5) * 10
          p.y = pointer.y + (Math.random() - 0.5) * 10
          p.vx = p.vy = 0
          p.life = Math.random() * 60 + 40
        }
      })

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [particles, color, pointer.x, pointer.y])

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10" />
  )
}
