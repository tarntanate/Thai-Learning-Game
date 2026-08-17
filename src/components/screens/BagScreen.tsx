import { motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { ITEMS, ITEM_ORDER, RARITY_LABEL } from '@/game/constants'
import { rankFor, xpToNextLevel } from '@/game/profile'
import type { PlayerProfile } from '@/game/types'

interface BagScreenProps {
  profile: PlayerProfile
  onBack: () => void
  onReset: () => void
}

export function BagScreen({ profile, onBack, onReset }: BagScreenProps) {
  const rank = rankFor(profile.level)
  const need = xpToNextLevel(profile.level)
  const accuracy =
    profile.stats.totalCorrect + profile.stats.totalWrong > 0
      ? Math.round((profile.stats.totalCorrect / (profile.stats.totalCorrect + profile.stats.totalWrong)) * 100)
      : 0

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <GlassCard className="text-center">
        <div className="text-5xl">{rank.emoji}</div>
        <h1 className="thai-text-safe text-gradient mt-1 text-3xl font-bold">กระเป๋าของ {profile.name}</h1>
        <p className="mt-1 text-sm text-slate-500">
          {rank.title} · Lv.{profile.level} · {profile.xp}/{need} XP
        </p>
      </GlassCard>

      <GlassCard delay={0.05}>
        <h2 className="font-display mb-3 text-lg font-semibold text-slate-700">🎒 ไอเท็มพิเศษ</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {ITEM_ORDER.map((id, index) => {
            const meta = ITEMS[id]
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={`flex items-center gap-3 rounded-2xl bg-gradient-to-br ${meta.accent} px-4 py-3 shadow-inner`}
              >
                <span className="text-3xl">{meta.emoji}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-slate-700">{meta.name}</span>
                    <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                      {RARITY_LABEL[meta.rarity]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">{meta.description}</p>
                </div>
                <span className="font-display grid size-10 shrink-0 place-items-center rounded-full bg-white/85 text-sm font-bold text-slate-700 tabular-nums">
                  ×{profile.items[id]}
                </span>
              </motion.div>
            )
          })}
        </div>
      </GlassCard>

      <GlassCard delay={0.1}>
        <h2 className="font-display mb-3 text-lg font-semibold text-slate-700">📊 สถิติของฉัน</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat label="เล่นทั้งหมด" value={profile.stats.gamesPlayed} suffix="รอบ" />
          <Stat label="เล่นจบสำเร็จ" value={profile.stats.gamesCleared} suffix="รอบ" />
          <Stat label="ตอบถูกสะสม" value={profile.stats.totalCorrect} suffix="ข้อ" />
          <Stat label="ความแม่นยำ" value={accuracy} suffix="%" />
          <Stat label="ตอบถูกต่อเนื่องสูงสุด" value={profile.stats.bestStreak} suffix="ข้อ" />
          <Stat label="ทำคะแนนเต็ม" value={profile.stats.perfectRuns} suffix="ครั้ง" />
        </div>
      </GlassCard>

      <GlassCard delay={0.15} className="text-center">
        <div className="text-4xl">🛸</div>
        <h2 className="font-display mt-1 text-lg font-semibold text-slate-700">ยานอวกาศของฉัน</h2>
        <p className="mt-1 text-sm text-slate-500">
          สะสมดาวไว้ตกแต่งยานอวกาศ — ตอนนี้มี <strong className="text-amber-500">⭐ {profile.stars}</strong> ดวง
        </p>
        <span className="mt-3 inline-block rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold text-slate-500">
          🔒 เปิดให้เล่นเร็ว ๆ นี้
        </span>
      </GlassCard>

      <div className="flex flex-wrap justify-center gap-3">
        <GlassButton variant="secondary" sfx="back" onClick={onBack}>
          ← กลับหน้าแรก
        </GlassButton>
        <GlassButton
          variant="ghost"
          onClick={() => {
            if (window.confirm('ต้องการล้างข้อมูลผู้เล่นทั้งหมดและเริ่มใหม่ใช่ไหม?')) onReset()
          }}
        >
          🧹 เริ่มต้นใหม่ทั้งหมด
        </GlassButton>
      </div>
    </div>
  )
}

function Stat({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  return (
    <div className="rounded-2xl bg-white/65 px-3 py-3 text-center shadow-inner">
      <div className="font-display text-2xl font-bold text-violet-500 tabular-nums">{value}</div>
      <div className="text-[11px] text-slate-500">
        {label} ({suffix})
      </div>
    </div>
  )
}
