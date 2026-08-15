import { cn } from '@/lib/utils'

interface TimerRingProps {
  remaining: number
  total: number
  className?: string
}

const RADIUS = 34
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export function TimerRing({ remaining, total, className }: TimerRingProps) {
  const ratio = total > 0 ? Math.max(0, Math.min(1, remaining / total)) : 0
  const seconds = Math.max(0, Math.ceil(remaining))
  const danger = seconds <= 5
  const warn = !danger && seconds <= 10

  return (
    <div className={cn('relative grid size-20 place-items-center', className)}>
      <svg viewBox="0 0 80 80" className="size-20 -rotate-90">
        <circle cx="40" cy="40" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="8" />
        <circle
          cx="40"
          cy="40"
          r={RADIUS}
          fill="none"
          stroke="url(#timerGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - ratio)}
          style={{ transition: 'stroke-dashoffset 120ms linear' }}
        />
        <defs>
          <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={danger ? '#fb7185' : warn ? '#fbbf24' : '#38bdf8'} />
            <stop offset="100%" stopColor={danger ? '#f43f5e' : warn ? '#f59e0b' : '#a78bfa'} />
          </linearGradient>
        </defs>
      </svg>
      <div
        className={cn(
          'font-display absolute inset-0 grid place-items-center text-xl font-bold tabular-nums',
          danger ? 'animate-bob text-rose-500' : warn ? 'text-amber-500' : 'text-slate-600',
        )}
      >
        {seconds}
      </div>
    </div>
  )
}
