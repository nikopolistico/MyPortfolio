import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Fade + slide up when entering the viewport, once.
 * Stagger grid children with `index` (70ms apart, capped so late cards don't lag).
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user"> in main.tsx.
 */
export function Reveal({
  children,
  index = 0,
  className,
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: Math.min(index, 8) * 0.07 }}
    >
      {children}
    </motion.div>
  )
}
