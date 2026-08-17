import { motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { getQuestionCount } from '@/data'
import { GRADES, SUBJECTS } from '@/game/constants'
import type { Subject } from '@/game/types'

interface SubjectScreenProps {
  onSelect: (subject: Subject) => void
  onBack: () => void
}

export function SubjectScreen({ onSelect, onBack }: SubjectScreenProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <GlassCard className="text-center">
        <h1 className="text-gradient text-3xl font-bold">เลือกวิชา</h1>
        <p className="mt-2 text-sm text-slate-500">วันนี้อยากออกผจญภัยในวิชาไหนดี?</p>
      </GlassCard>

      <div className="grid gap-4 sm:grid-cols-3">
        {SUBJECTS.map((meta, index) => {
          const count = GRADES.reduce((sum, grade) => sum + getQuestionCount(meta.id, grade.grade), 0)
          const enabled = count > 0

          return (
            <motion.button
              key={meta.id}
              type="button"
              disabled={!enabled}
              onClick={() => onSelect(meta.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07, type: 'spring', stiffness: 220, damping: 22 }}
              whileHover={enabled ? { scale: 1.04, y: -4 } : undefined}
              whileTap={enabled ? { scale: 0.97 } : undefined}
              className={`glass relative overflow-hidden rounded-[1.75rem] p-5 text-left transition ${
                enabled ? 'hover:shadow-xl' : 'cursor-not-allowed opacity-55 grayscale'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-45`} />
              <div className="relative">
                <span className="text-5xl">{meta.emoji}</span>
                <div className="font-display mt-3 text-xl font-bold text-slate-700">{meta.shortLabel}</div>
                <p className="mt-1 min-h-10 text-xs text-slate-600">{meta.description}</p>
                <div className="mt-4">
                  {enabled ? (
                    <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-600">
                      ✅ {count} คำถาม
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500">
                      🔒 เร็ว ๆ นี้
                    </span>
                  )}
                </div>
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
