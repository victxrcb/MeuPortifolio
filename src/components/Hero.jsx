import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

const PHRASES = ['Full Stack Developer', 'Estudante de SI', 'Arquiteto de Soluções', 'Problem Solver']

function useTypewriter(phrases, speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    let timeout
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setPhraseIdx(i => (i + 1) % phrases.length)
    } else {
      timeout = setTimeout(() => {
        setText(prev => deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1))
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIdx, phrases, speed, pause])

  return text
}

export default function Hero() {
  const canvasRef = useRef(null)
  const typed = useTypewriter(PHRASES)
  const mouseRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = e => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMouse)

    // Crimson ash particles with slow upward drift
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -(Math.random() * 0.35 + 0.05),
      alpha: Math.random() * 0.35 + 0.05,
      flicker: Math.random() * Math.PI * 2,
      flickerSpeed: Math.random() * 0.03 + 0.01,
      // mix between crimson and deep purple
      hue: Math.random() < 0.7 ? 'crimson' : 'purple',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouseRef.current

      particles.forEach(p => {
        p.flicker += p.flickerSpeed
        p.x += p.vx
        p.vy += (Math.random() - 0.5) * 0.01
        p.vy = Math.max(-0.6, Math.min(-0.02, p.vy))
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }

        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const glow = dist < 180 ? (1 - dist / 180) * 0.7 : 0
        const flicker = (Math.sin(p.flicker) * 0.15 + 0.85)
        const a = (p.alpha + glow) * flicker

        const color = p.hue === 'crimson'
          ? `rgba(192,40,61,${a})`
          : `rgba(91,33,182,${a * 0.7})`

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = color
        if (glow > 0.2) {
          ctx.shadowColor = p.hue === 'crimson' ? '#c0283d' : '#6d28d9'
          ctx.shadowBlur = 6
        } else {
          ctx.shadowBlur = 0
        }
        ctx.fill()
        ctx.shadowBlur = 0
      })

      // Faint connecting lines between close crimson particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(155,27,48,${(1 - d / 100) * 0.07})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div className={styles.content}>
        <span className={styles.badge}>
          <span className={styles.dot} />
          Disponível para projetos
        </span>

        <h1 className={styles.name}>
          Olá, sou <span className={styles.accent}>Victor</span>
        </h1>

        <div className={styles.ornament}>
          <span className={styles.ornamentIcon}>✦ ✦ ✦</span>
        </div>

        <div className={styles.typerow}>
          <span>{typed}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.desc}>
          Construo aplicações web, interfaces e APIs com arquitetura sólida.<br />
          Estudante de Sistemas de Informação apaixonado por tecnologia.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary} onClick={e => {
            e.preventDefault()
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Ver projetos
          </a>
          <a href="#contact" className={styles.btnGhost} onClick={e => {
            e.preventDefault()
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Contato
          </a>
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </div>
    </section>
  )
}
