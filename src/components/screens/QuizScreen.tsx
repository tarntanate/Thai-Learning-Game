import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { Hearts } from '@/components/ui/Hearts'
import { TimerRing } from '@/components/ui/TimerRing'
import {
  CATEGORY_LABEL,
  DIFFICULTIES,
  ITEMS,
  ITEM_ORDER,
  MAX_HEARTS,
  MAX_SURRENDER,
  QUESTIONS_PER_SESSION,
} from '@/game/constants'
import { buildDeck, toRuntimeQuestion } from '@/game/deck'
import type { Difficulty, Grade, ItemId, Question, RuntimeQuestion, SessionResult } from '@/game/types'
import { playSfx } from '@/lib/sound'
import { pickOne, shuffle } from '@/lib/random'
import { cn } from '@/lib/utils'

const CHOICE_LABELS = ['ก', 'ข', 'ค', 'ง', 'จ', 'ฉ']

type Phase = 'playing' | 'feedback'
type Outcome = 'correct' | 'wrong' | 'timeout' | 'surrender'

interface QuizScreenProps {
  grade: Grade
  difficulty: Difficulty
  seenIds: string[]
  inventory: Record<ItemId, number>
  onUseItem: (id: ItemId) => boolean
  onFinish: (result: SessionResult) => void
}

export function QuizScreen({ grade, difficulty, seenIds, inventory, onUseItem, onFinish }: QuizScreenProps) {
  const config = DIFFICULTIES[difficulty]

  const [deck] = useState(() => buildDeck(grade, seenIds))
  const [questions, setQuestions] = useState<RuntimeQuestion[]>(deck.questions)
  const [spares, setSpares] = useState<Question[]>(deck.spares)

  const [index, setIndex] = useState(0)
  const [hearts, setHearts] = useState(MAX_HEARTS)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong] = useState(0)
  const [surrendered, setSurrendered] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [freeHints, setFreeHints] = useState(config.freeHints)

  const [phase, setPhase] = useState<Phase>('playing')
  const [outcome, setOutcome] = useState<Outcome | null>(null)
  const [selected, setSelected] = useState<number | null>(null)
  const [eliminated, setEliminated] = useState<number[]>([])
  const [revealed, setRevealed] = useState(false)
  const [hintOpen, setHintOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(config.seconds)
  const [maxTime, setMaxTime] = useState(config.seconds)
  const [gameOver, setGameOver] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  const question = questions[index]
  const isLast = index >= questions.length - 1
  const lastTickRef = useRef(Math.ceil(config.seconds))

  const resetQuestionState = useCallback(
    (seconds: number) => {
      setSelected(null)
      setEliminated([])
      setRevealed(false)
      setHintOpen(false)
      setOutcome(null)
      setPhase('playing')
      setTimeLeft(seconds)
      setMaxTime(seconds)
      lastTickRef.current = Math.ceil(seconds)
    },
    [],
  )

  const resolve = useCallback(
    (choice: number | null, mode: 'answer' | 'timeout' | 'surrender') => {
      if (phase !== 'playing') return

      const isCorrect = mode === 'answer' && choice === question.answer
      setSelected(choice)
      setRevealed(true)
      setPhase('feedback')

      if (isCorrect) {
        setOutcome('correct')
        setCorrect((value) => value + 1)
        setStreak((value) => {
          const next = value + 1
          setBestStreak((best) => Math.max(best, next))
          return next
        })
        playSfx('correct')
        return
      }

      setStreak(0)

      if (mode === 'surrender') {
        setOutcome('surrender')
        setSurrendered((value) => value + 1)
        playSfx('wrong')
        return
      }

      setOutcome(mode === 'timeout' ? 'timeout' : 'wrong')
      setWrong((value) => value + 1)
      setHearts((value) => {
        const next = Math.max(0, value - 1)
        if (next === 0) setGameOver(true)
        return next
      })
      playSfx('wrong')
    },
    [phase, question],
  )

  // นาฬิกาจับเวลาต่อข้อ
  useEffect(() => {
    if (phase !== 'playing') return
    const id = window.setInterval(() => {
      setTimeLeft((prev) => Math.max(0, Math.round((prev - 0.1) * 10) / 10))
    }, 100)
    return () => window.clearInterval(id)
  }, [phase])

  useEffect(() => {
    if (phase !== 'playing') return
    const seconds = Math.ceil(timeLeft)
    if (seconds !== lastTickRef.current) {
      lastTickRef.current = seconds
      if (seconds > 0 && seconds <= 5) playSfx('tick')
    }
    if (timeLeft <= 0) resolve(null, 'timeout')
  }, [timeLeft, phase, resolve])

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 1800)
    return () => window.clearTimeout(id)
  }, [toast])

  const finish = (cleared: boolean) => {
    playSfx(cleared ? 'win' : 'lose')
    onFinish({
      grade,
      difficulty,
      total: QUESTIONS_PER_SESSION,
      correct,
      wrong,
      surrendered,
      heartsLeft: hearts,
      bestStreak,
      cleared,
      servedIds: questions.slice(0, index + 1).map((item) => item.id),
    })
  }

  const goNext = () => {
    if (gameOver) {
      finish(false)
      return
    }
    if (isLast) {
      finish(true)
      return
    }
    setIndex((value) => value + 1)
    resetQuestionState(config.seconds)
  }

  const revealHint = () => {
    if (phase !== 'playing' || hintOpen || freeHints <= 0) return
    setFreeHints((value) => value - 1)
    setHintOpen(true)
    playSfx('hint')
  }

  const surrender = () => {
    if (phase !== 'playing' || surrendered >= MAX_SURRENDER) return
    resolve(null, 'surrender')
  }

  const activateItem = (id: ItemId) => {
    if (phase !== 'playing') return

    if (id === 'wand' && eliminated.length > 0) {
      setToast('ข้อนี้ใช้คฑาพ่อมดไปแล้ว')
      return
    }
    if (id === 'cat' && spares.length === 0) {
      setToast('ไม่มีคำถามสำรองเหลือแล้ว')
      return
    }
    if (id === 'teacher' && revealed) {
      setToast('ข้อนี้เฉลยแล้ว')
      return
    }
    if (!onUseItem(id)) {
      setToast(`ไม่มี${ITEMS[id].name}เหลือแล้ว`)
      return
    }

    playSfx('item')

    switch (id) {
      case 'clock': {
        setTimeLeft((value) => value + 10)
        setMaxTime((value) => Math.max(value, Math.ceil(timeLeft) + 10))
        setToast('⏰ เพิ่มเวลา 10 วินาที!')
        break
      }
      case 'wand': {
        const wrongIndexes = question.choices.map((_, i) => i).filter((i) => i !== question.answer)
        setEliminated(shuffle(wrongIndexes).slice(0, Math.max(0, question.choices.length - 2)))
        setToast('🪄 ตัดตัวเลือกผิดออกแล้ว!')
        break
      }
      case 'cat': {
        const replacement = pickOne(spares)
        setSpares((list) => list.filter((item) => item.id !== replacement.id))
        setQuestions((list) => list.map((item, i) => (i === index ? toRuntimeQuestion(replacement) : item)))
        resetQuestionState(config.seconds)
        setToast('🐈 เปลี่ยนคำถามใหม่แล้ว!')
        break
      }
      case 'teacher': {
        setRevealed(true)
        setToast('👩‍🏫 คุณครูเฉลยให้แล้ว เลือกคำตอบได้เลย')
        break
      }
    }
  }

  const feedbackTone =
    outcome === 'correct'
      ? { title: '🎉 ถูกต้อง เก่งมาก!', className: 'from-emerald-200/90 to-teal-100/90 text-emerald-700' }
      : outcome === 'timeout'
        ? { title: '⏰ หมดเวลา!', className: 'from-amber-200/90 to-orange-100/90 text-amber-700' }
        : outcome === 'surrender'
          ? { title: '🏳️ ยอมแพ้ข้อนี้', className: 'from-sky-200/90 to-indigo-100/90 text-indigo-700' }
          : { title: '😢 ยังไม่ถูกนะ', className: 'from-rose-200/90 to-pink-100/90 text-rose-700' }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <GlassCard animate={false} className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <TimerRing remaining={timeLeft} total={maxTime} />
            <div>
              <div className="font-display text-lg font-bold text-slate-700">
                ข้อ {index + 1}/{questions.length}
              </div>
              <div className="text-xs text-slate-500">
                {config.emoji} {config.label} · คะแนน {correct}
                {streak >= 3 && <span className="ml-1 font-semibold text-orange-500">🔥 ต่อเนื่อง {streak}</span>}
              </div>
            </div>
          </div>
          <Hearts current={hearts} max={MAX_HEARTS} className="max-w-[13rem] justify-end" />
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/70">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-400 to-sky-400"
            initial={false}
            animate={{ width: `${((index + (phase === 'feedback' ? 1 : 0)) / questions.length) * 100}%` }}
            transition={{ type: 'spring', stiffness: 140, damping: 22 }}
          />
        </div>
      </GlassCard>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${question.id}-${index}`}
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 240, damping: 26 }}
          className="flex flex-col gap-4"
        >
          <GlassCard animate={false} className="text-center">
            <span className="inline-block rounded-full bg-gradient-to-r from-violet-200 to-pink-200 px-4 py-1 text-xs font-semibold text-slate-600">
              {CATEGORY_LABEL[question.category]}
            </span>
            <h2 className="font-display mt-4 text-2xl leading-relaxed font-bold text-slate-700 sm:text-3xl">
              {question.prompt}
            </h2>

            <AnimatePresence>
              {hintOpen && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 overflow-hidden rounded-2xl bg-amber-100/80 px-4 py-3 text-sm text-amber-700"
                >
                  💡 คำใบ้ : {question.hint}
                </motion.p>
              )}
            </AnimatePresence>
          </GlassCard>

          <div className="grid gap-3 sm:grid-cols-2">
            {question.choices.map((choice, choiceIndex) => {
              const isAnswer = choiceIndex === question.answer
              const isSelected = selected === choiceIndex
              const isEliminated = eliminated.includes(choiceIndex)
              const showAnswer = (phase === 'feedback' || revealed) && isAnswer
              const showWrong = phase === 'feedback' && isSelected && !isAnswer

              return (
                <motion.button
                  key={choice}
                  type="button"
                  disabled={phase !== 'playing' || isEliminated}
                  onClick={() => resolve(choiceIndex, 'answer')}
                  whileHover={phase === 'playing' && !isEliminated ? { scale: 1.02, y: -3 } : undefined}
                  whileTap={phase === 'playing' && !isEliminated ? { scale: 0.97 } : undefined}
                  animate={showWrong ? { x: [0, -8, 8, -5, 5, 0] } : { x: 0 }}
                  transition={{ duration: 0.4 }}
                  className={cn(
                    'glass flex items-center gap-3 rounded-[1.5rem] px-5 py-4 text-left text-lg font-medium text-slate-700 transition',
                    isEliminated && 'pointer-events-none opacity-25 grayscale',
                    showAnswer && 'border-emerald-300/90 bg-emerald-100/80 text-emerald-700 ring-2 ring-emerald-300',
                    showWrong && 'border-rose-300/90 bg-rose-100/80 text-rose-700 ring-2 ring-rose-300',
                    phase === 'playing' && !isEliminated && 'hover:bg-white/80',
                  )}
                >
                  <span className="font-display grid size-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-white/90 to-white/60 text-base font-bold text-fuchsia-500 shadow-inner">
                    {CHOICE_LABELS[choiceIndex]}
                  </span>
                  <span className="flex-1">{choice}</span>
                  {showAnswer && <span className="text-xl">✅</span>}
                  {showWrong && <span className="text-xl">❌</span>}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {phase === 'feedback' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={cn('rounded-[1.75rem] border border-white/70 bg-gradient-to-br p-5 backdrop-blur-xl', feedbackTone.className)}
          >
            <div className="font-display text-xl font-bold">{feedbackTone.title}</div>
            <p className="mt-1 text-sm">
              คำตอบที่ถูกต้องคือ <strong>{question.choices[question.answer]}</strong>
            </p>
            <p className="mt-1 text-sm opacity-90">{question.explain}</p>

            <GlassButton
              size="lg"
              variant={gameOver ? 'danger' : 'primary'}
              className="mt-4 w-full"
              onClick={goNext}
              autoFocus
            >
              {gameOver ? '💔 หัวใจหมดแล้ว — ดูผลการเล่น' : isLast ? '🏁 ดูผลการเล่น' : 'ข้อต่อไป →'}
            </GlassButton>
          </motion.div>
        )}
      </AnimatePresence>

      <GlassCard animate={false} className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-display text-sm font-semibold text-slate-600">🎒 ตัวช่วย</span>
          <span className="text-xs text-slate-500">แตะไอเท็มเพื่อใช้งาน</span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {ITEM_ORDER.map((id) => {
            const meta = ITEMS[id]
            const count = inventory[id] ?? 0
            const disabled = phase !== 'playing' || count <= 0
            return (
              <motion.button
                key={id}
                type="button"
                title={`${meta.name} — ${meta.description}`}
                disabled={disabled}
                onClick={() => activateItem(id)}
                whileHover={disabled ? undefined : { scale: 1.06, y: -3 }}
                whileTap={disabled ? undefined : { scale: 0.94 }}
                className={cn(
                  `relative flex flex-col items-center gap-1 rounded-2xl bg-gradient-to-br ${meta.accent} px-2 py-3 shadow-inner transition`,
                  disabled && 'opacity-40 grayscale',
                )}
              >
                <span className="text-2xl">{meta.emoji}</span>
                <span className="text-[11px] font-semibold text-slate-600">{meta.name}</span>
                <span className="absolute -top-1.5 -right-1.5 grid min-w-6 place-items-center rounded-full bg-white px-1.5 py-0.5 text-[11px] font-bold text-slate-600 shadow tabular-nums">
                  {count}
                </span>
              </motion.button>
            )
          })}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <GlassButton
            variant="secondary"
            size="sm"
            sfx={false}
            disabled={phase !== 'playing' || freeHints <= 0 || hintOpen}
            onClick={revealHint}
          >
            💡 คำใบ้ฟรี ({freeHints})
          </GlassButton>
          <GlassButton
            variant="ghost"
            size="sm"
            sfx={false}
            disabled={phase !== 'playing' || surrendered >= MAX_SURRENDER}
            onClick={surrender}
          >
            🏳️ ยอมแพ้ข้อนี้ ({MAX_SURRENDER - surrendered})
          </GlassButton>
        </div>

        <p className="mt-3 text-center text-[11px] text-slate-400">
          เริ่มเล่นแล้วต้องเล่นให้จบนะ · ตอบผิดหรือหมดเวลาจะเสียหัวใจ 1 ดวง
        </p>
      </GlassCard>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.9 }}
            className="glass fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
