import { motion, useReducedMotion, type Transition } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function HeroSection() {
  const reduced = useReducedMotion()

  const fadeUp = (delay: number): object =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE, delay } as Transition,
        }

  return (
    <section
      aria-label="Title"
      className="flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '100svh', paddingTop: '96px', paddingBottom: '96px' }}
    >
      <motion.p
        {...fadeUp(0.1)}
        className="mb-6 text-xs tracking-[0.22em] uppercase"
        style={{ fontFamily: 'var(--font-ui)', color: 'var(--text-muted)' }}
      >
        English Project
      </motion.p>

      <motion.h1
        {...fadeUp(0.25)}
        className="mb-8"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(3.5rem, 10vw, 8rem)',
          lineHeight: 0.95,
          letterSpacing: '-0.01em',
          color: 'var(--text-primary)',
          margin: 0,
          padding: 0,
        }}
      >
        The<br />Holocaust
      </motion.h1>

      {/* Thin oxblood rule */}
      <motion.span
        {...fadeUp(0.4)}
        aria-hidden="true"
        style={{
          display: 'block',
          width: '48px',
          height: '1px',
          backgroundColor: 'var(--accent)',
          marginBottom: '32px',
        }}
      />

      <motion.p
        {...fadeUp(0.5)}
        className="text-sm"
        style={{
          fontFamily: 'var(--font-ui)',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
        }}
      >
        Aayaan Sultan &nbsp;·&nbsp; Nairit Adak &nbsp;·&nbsp; Oushnik Pradhan&nbsp;·&nbsp; Abhradeep Roy
      </motion.p>
    </section>
  )
}
