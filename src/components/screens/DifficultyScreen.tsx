import { motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { DIFFICULTIES, GRADES, MAX_HEARTS, MAX_SURRENDER, QUESTIONS_PER_SESSION, SUBJECTS } from '@/game/constants'
import type { Difficulty, Grade, Subject } from '@/game/types'

interface DifficultyScreenProps {
  grade: Grade
  subject: Subject
  onSelect: (difficulty: Difficulty) => void
  onBack: () => void
}

export function DifficultyScreen({ grade, subject, onSelect, onBack }: DifficultyScreenProps) {
  const gradeMeta = GRADES.find((item) => item.grade === grade)
  const subjectMeta = SUBJECTS.find((item) => item.id === subject)

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <GlassCard className="text-center">
        <h1 className="text-gradient text-3xl font-bold">เลือกโหมดความยาก</h1>
        <p className="mt-2 text-sm text-slate-500">
          {subjectMeta?.emoji} {subjectMeta?.shortLabel} · {gradeMeta?.emoji} {gradeMeta?.label} · {QUESTIONS_PER_SESSION} ข้อ ·
          หัวใจ {MAX_HEARTS} ดวง
        </p>
      </GlassCard>

      <div className="grid gap-4 sm:grid-cols-2">
        {(['easy', 'hard'] as Difficulty[]).map((id, index) => {
          const meta = DIFFICULTIES[id]
          return (
            <motion.button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, type: 'spring', stiffness: 220, damping: 22 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              className="glass relative overflow-hidden rounded-[1.75rem] p-6 text-left"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-50`} />
              <div className="relative">
                <div className="mb-2 text-5xl">{meta.emoji}</div>
                <div className="font-display text-2xl font-bold text-slate-700">{meta.label}</div>
                <p className="mt-2 text-sm text-slate-600">{meta.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Tag>⏱️ {meta.seconds} วินาที/ข้อ</Tag>
                  <Tag>💡 คำใบ้ฟรี {meta.freeHints} ครั้ง</Tag>
                  <Tag>🏳️ ยอมแพ้ได้ {MAX_SURRENDER} ข้อ</Tag>
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      <GlassCard delay={0.15} className="p-5 text-sm text-slate-600">
        <p className="font-display mb-2 font-semibold text-slate-700">⚠️ กติกาสำคัญ</p>
        <ul className="list-inside list-disc space-y-1">
          <li>เมื่อเริ่มเล่นแล้ว ต้องเล่นให้จบ ออกกลางคันไม่ได้</li>
          <li>ตอบผิดหรือหมดเวลา จะเสียหัวใจ 1 ดวง ถ้าหัวใจหมดถือว่าแพ้ และไม่ได้รางวัล</li>
          <li>ตอบถูกครบทุกข้อ จะได้ไอเท็มสูงสุด 3 ชิ้น</li>
        </ul>
      </GlassCard>

      <div className="flex justify-center">
        <GlassButton variant="ghost" sfx="back" onClick={onBack}>
          ← เลือกระดับชั้นใหม่
        </GlassButton>
      </div>
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600 shadow-inner">
      {children}
    </span>
  )
}
