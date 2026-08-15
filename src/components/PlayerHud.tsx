import { motion } from 'motion/react'
import { rankFor, xpToNextLevel } from '@/game/profile'
import type { PlayerProfile } from '@/game/types'
import { useSound } from '@/hooks/useSound'
import { cn } from '@/lib/utils'

interface PlayerHudProps {
  profile: PlayerProfile
  className?: string
}

export function PlayerHud({ profile, className }: PlayerHudProps) {
  const { muted, toggleMuted, play } = useSound()
  const rank = rankFor(profile.level)
  const need = xpToNextLevel(profile.level)
  const progress = Math.min(100, Math.round((profile.xp / need) * 100))

  return (
    <div className={cn('glass flex flex-wrap items-center gap-3 rounded-[1.75rem] px-4 py-3 sm:gap-5', className)}>
      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-pink-200 to-violet-200 text-2xl shadow-inner">
        {rank.emoji}
      </div>

      <div className="min-w-[9rem] flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-display truncate font-semibold text-slate-700">{profile.name}</span>
          <span className="rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-fuchsia-500">
            {rank.title}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-display text-xs font-bold text-violet-500">Lv.{profile.level}</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/70">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-fuchsia-400 to-pink-400"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
            />
          </div>
          <span className="text-[11px] font-semibold text-slate-500 tabular-nums">
            {profile.xp}/{need}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 px-3 py-1.5 text-sm font-semibold text-amber-600 shadow-inner">
          <span className="animate-twinkle">⭐</span>
          <span className="tabular-nums">{profile.stars}</span>
        </div>
        <button
          type="button"
          aria-label={muted ? 'เปิดเสียง' : 'ปิดเสียง'}
          title={muted ? 'เปิดเสียง' : 'ปิดเสียง'}
          onClick={() => {
            toggleMuted()
            if (muted) play('click')
          }}
          className="grid size-10 place-items-center rounded-full bg-white/70 text-lg shadow-inner transition hover:bg-white"
        >
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  )
}
