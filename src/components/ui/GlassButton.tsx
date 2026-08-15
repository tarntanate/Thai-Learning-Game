import { motion, type HTMLMotionProps } from 'motion/react'
import { playSfx } from '@/lib/sound'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'gold'
type Size = 'sm' | 'md' | 'lg'

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-pink-400 via-fuchsia-400 to-violet-400 text-white shadow-[0_12px_30px_-10px_rgba(217,70,239,0.8)] border-white/50',
  secondary:
    'bg-white/70 text-slate-700 border-white/80 shadow-[0_10px_26px_-14px_rgba(100,116,139,0.9)] hover:bg-white/90',
  ghost: 'bg-white/35 text-slate-600 border-white/60 hover:bg-white/60',
  danger:
    'bg-gradient-to-br from-rose-400 to-orange-300 text-white border-white/50 shadow-[0_12px_30px_-12px_rgba(244,63,94,0.8)]',
  gold: 'bg-gradient-to-br from-amber-300 via-yellow-300 to-orange-300 text-amber-900 border-white/60 shadow-[0_12px_30px_-12px_rgba(245,158,11,0.85)]',
}

const SIZES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-2xl',
  md: 'px-6 py-3 text-base rounded-[1.25rem]',
  lg: 'px-8 py-4 text-lg rounded-[1.5rem]',
}

interface GlassButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: Variant
  size?: Size
  /** เสียงที่เล่นเมื่อกด (ปิดได้ด้วย false) */
  sfx?: 'click' | 'back' | 'start' | false
}

export function GlassButton({
  variant = 'primary',
  size = 'md',
  sfx = 'click',
  className,
  onClick,
  disabled,
  ...props
}: GlassButtonProps) {
  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.04, y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      disabled={disabled}
      onClick={(event) => {
        if (sfx) playSfx(sfx)
        onClick?.(event)
      }}
      className={cn(
        'font-display border font-semibold backdrop-blur-md transition-colors',
        'focus-visible:ring-2 focus-visible:ring-fuchsia-300 focus-visible:ring-offset-2 focus-visible:outline-none',
        'disabled:opacity-45 disabled:shadow-none',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  )
}
