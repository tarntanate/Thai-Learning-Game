import { motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { GRADES } from '@/game/constants'
import { getQuestionCount } from '@/data'
import type { Grade } from '@/game/types'

interface GradeScreenProps {
  onSelect: (grade: Grade) => void
  onBack: () => void
}

export function GradeScreen({ onSelect, onBack }: GradeScreenProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <GlassCard className="text-center">
        <h1 className="text-gradient text-3xl font-bold">เลือกระดับชั้น</h1>
        <p className="mt-2 text-sm text-slate-500">หนูอยู่ชั้นไหน เลือกเลย!</p>
      </GlassCard>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GRADES.map((meta, index) => {
          const count = getQuestionCount(meta.grade)
          return (
            <motion.button
              key={meta.grade}
              type="button"
              disabled={!meta.enabled}
              onClick={() => onSelect(meta.grade)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, type: 'spring', stiffness: 220, damping: 22 }}
              whileHover={meta.enabled ? { scale: 1.04, y: -4 } : undefined}
              whileTap={meta.enabled ? { scale: 0.97 } : undefined}
              className={`glass relative overflow-hidden rounded-[1.75rem] p-5 text-left transition ${
                meta.enabled ? 'hover:shadow-xl' : 'cursor-not-allowed opacity-55 grayscale'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-45`} />
              <div className="relative flex items-center gap-3">
                <span className="text-4xl">{meta.emoji}</span>
                <div>
                  <div className="font-display text-2xl font-bold text-slate-700">{meta.shortLabel}</div>
                  <div className="text-xs text-slate-600">{meta.label}</div>
                </div>
              </div>
              <div className="relative mt-4">
                {meta.enabled ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-600">
                    ✅ พร้อมเล่น · {count} คำถาม
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500">
                    🔒 เร็ว ๆ นี้
                  </span>
                )}
              </div>
            </motion.button>
          )
        })}
      </div>

      <div className="flex justify-center">
        <GlassButton variant="ghost" sfx="back" onClick={onBack}>
          ← กลับหน้าแรก
        </GlassButton>
      </div>
    </div>
  )
}
