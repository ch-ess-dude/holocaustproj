import { useRef } from 'react'
import { motion, useInView, useReducedMotion, type Transition } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const reduced = useReducedMotion()

  if (reduced) {
    return <div ref={ref} className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: EASE, delay } as Transition}
    >
      {children}
    </motion.div>
  )
}
