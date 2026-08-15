import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  /** ให้การ์ดมีอนิเมชันตอนปรากฏ */
  animate?: boolean
  delay?: number
}

export function GlassCard({ children, className, animate = true, delay = 0 }: GlassCardProps) {
  if (!animate) {
    return <div className={cn('glass rounded-[2rem] p-6', className)}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 24, delay }}
      className={cn('glass rounded-[2rem] p-6', className)}
    >
      {children}
    </motion.div>
  )
}
