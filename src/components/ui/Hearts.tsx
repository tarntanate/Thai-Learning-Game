import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface HeartsProps {
  current: number
  max: number
  className?: string
}

export function Hearts({ current, max, className }: HeartsProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-1', className)} aria-label={`หัวใจ ${current} จาก ${max}`}>
      {Array.from({ length: max }, (_, index) => {
        const alive = index < current
        return (
          <motion.span
            key={index}
            initial={false}
            animate={alive ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.35 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className={cn('text-lg leading-none sm:text-xl', !alive && 'grayscale')}
          >
            {alive ? '❤️' : '🤍'}
          </motion.span>
        )
      })}
    </div>
  )
}
