import { useEffect } from 'react'
import { motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { DIFFICULTIES, GRADES, ITEMS, MAX_HEARTS, RARITY_LABEL, SUBJECTS } from '@/game/constants'
import { rankFor } from '@/game/profile'
import type { RewardSummary, SessionResult } from '@/game/types'
import { playSfx } from '@/lib/sound'

interface ResultScreenProps {
  result: SessionResult
  reward: RewardSummary
  onPlayAgain: () => void
  onHome: () => void
}

export function ResultScreen({ result, reward, onPlayAgain, onHome }: ResultScreenProps) {
  const gradeMeta = GRADES.find((item) => item.grade === result.grade)
  const subjectMeta = SUBJECTS.find((item) => item.id === result.subject)
  const config = DIFFICULTIES[result.difficulty]
  const missed = result.wrong + result.surrendered
  const perfect = result.cleared && missed === 0
  const rank = rankFor(reward.newLevel)

  useEffect(() => {
    if (reward.levelsGained > 0) {
      const id = window.setTimeout(() => playSfx('levelup'), 700)
      return () => window.clearTimeout(id)
    }
  }, [reward.levelsGained])

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <GlassCard className="relative overflow-hidden text-center">
        {perfect && (
          <div className="animate-shine pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.85)_50%,transparent_65%)] bg-[length:200%_100%]" />
        )}

        <motion.div
          initial={{ scale: 0.4, rotate: -20, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
          className="text-7xl"
        >
          {result.cleared ? (perfect ? '🏆' : '🎊') : '💔'}
        </motion.div>

        <h1 className="thai-text-safe text-gradient mt-2 text-3xl font-bold">
          {result.cleared ? (perfect ? 'สุดยอดมาก! ตอบถูกทุกข้อ' : 'เล่นจบแล้ว เก่งมาก!') : 'หัวใจหมดแล้ว...'}
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          {subjectMeta?.emoji} {subjectMeta?.shortLabel} · {gradeMeta?.shortLabel} · {config.label}
          {!result.cleared && ' · ลองใหม่อีกครั้งนะ ครั้งหน้าต้องทำได้แน่นอน!'}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Score label="ตอบถูก" value={`${result.correct}/${result.total}`} tone="text-emerald-500" />
          <Score label="ตอบผิด" value={String(result.wrong)} tone="text-rose-500" />
          <Score label="ยอมแพ้" value={String(result.surrendered)} tone="text-indigo-500" />
          <Score label="หัวใจเหลือ" value={`${result.heartsLeft}/${MAX_HEARTS}`} tone="text-pink-500" />
        </div>
      </GlassCard>

      <GlassCard delay={0.08}>
        <h2 className="font-display mb-3 text-lg font-semibold text-slate-700">🎁 ของรางวัล</h2>

        {result.cleared ? (
          <>
            <div className="grid grid-cols-2 gap-3">
              <Reward emoji="⚡" label="ค่าประสบการณ์" value={`+${reward.xp} XP`} />
              <Reward emoji="⭐" label="ดาวสะสม" value={`+${reward.stars}`} />
            </div>

            {reward.levelsGained > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 220, damping: 16 }}
                className="mt-3 rounded-2xl bg-gradient-to-r from-amber-200/90 to-yellow-100/90 px-4 py-3 text-center"
              >
                <div className="font-display text-lg font-bold text-amber-700">
                  🎉 เลื่อนเลเวล! Lv.{reward.newLevel}
                </div>
                <div className="text-xs text-amber-600">
                  ยศใหม่ : {rank.emoji} {rank.title}
                </div>
              </motion.div>
            )}

            <div className="mt-4">
              <div className="mb-2 text-sm font-semibold text-slate-600">ไอเท็มที่ได้รับ</div>
              <div className="flex flex-wrap gap-3">
                {reward.items.map((id, itemIndex) => {
                  const meta = ITEMS[id]
                  return (
                    <motion.div
                      key={`${id}-${itemIndex}`}
                      initial={{ opacity: 0, y: 24, rotate: -12 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{ delay: 0.2 + itemIndex * 0.18, type: 'spring', stiffness: 240, damping: 15 }}
                      onAnimationStart={() => playSfx('reward')}
                      className={`flex min-w-[8rem] flex-1 flex-col items-center gap-1 rounded-2xl bg-gradient-to-br ${meta.accent} px-3 py-4 shadow-inner`}
                    >
                      <span className="text-3xl">{meta.emoji}</span>
                      <span className="font-display text-sm font-bold text-slate-700">{meta.name}</span>
                      <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                        {RARITY_LABEL[meta.rarity]}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </>
        ) : (
          <p className="rounded-2xl bg-white/60 px-4 py-6 text-center text-sm text-slate-500">
            เมื่อหัวใจหมด จะไม่ได้รับค่าประสบการณ์และของรางวัลนะ
            <br />
            ลองใช้ตัวช่วยหรือคำใบ้ในรอบถัดไปดูสิ!
          </p>
        )}
      </GlassCard>

      <div className="grid gap-3 sm:grid-cols-2">
        <GlassButton size="lg" sfx="start" onClick={onPlayAgain}>
          🔁 เล่นอีกรอบ
        </GlassButton>
        <GlassButton size="lg" variant="secondary" sfx="back" onClick={onHome}>
          🏠 กลับหน้าแรก
        </GlassButton>
      </div>
    </div>
  )
}

function Score({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="rounded-2xl bg-white/65 px-3 py-3 shadow-inner">
      <div className={`font-display text-2xl font-bold tabular-nums ${tone}`}>{value}</div>
      <div className="text-[11px] text-slate-500">{label}</div>
    </div>
  )
}

function Reward({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/65 px-4 py-3 shadow-inner">
      <span className="text-2xl">{emoji}</span>
      <div>
        <div className="font-display text-lg font-bold text-violet-500">{value}</div>
        <div className="text-[11px] text-slate-500">{label}</div>
      </div>
    </div>
  )
}
