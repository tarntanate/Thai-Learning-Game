import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AuroraBackground } from '@/components/ui/AuroraBackground'
import { HomeScreen } from '@/components/screens/HomeScreen'
import { GradeScreen } from '@/components/screens/GradeScreen'
import { DifficultyScreen } from '@/components/screens/DifficultyScreen'
import { QuizScreen } from '@/components/screens/QuizScreen'
import { ResultScreen } from '@/components/screens/ResultScreen'
import { BagScreen } from '@/components/screens/BagScreen'
import { HowToScreen } from '@/components/screens/HowToScreen'
import { useProfile } from '@/hooks/useProfile'
import type { Difficulty, Grade, RewardSummary, SessionResult } from '@/game/types'

type Screen = 'home' | 'grade' | 'difficulty' | 'quiz' | 'result' | 'bag' | 'howto'

export default function App() {
  const { profile, consumeItem, finishSession, renamePlayer, resetProfile, seenIdsFor } = useProfile()

  const [screen, setScreen] = useState<Screen>('home')
  const [grade, setGrade] = useState<Grade>(1)
  const [difficulty, setDifficulty] = useState<Difficulty>('easy')
  /** เปลี่ยนค่าเพื่อบังคับให้ QuizScreen เริ่มรอบใหม่ */
  const [runId, setRunId] = useState(0)
  const [summary, setSummary] = useState<{ result: SessionResult; reward: RewardSummary } | null>(null)

  const startRun = (nextDifficulty: Difficulty) => {
    setDifficulty(nextDifficulty)
    setRunId((value) => value + 1)
    setScreen('quiz')
  }

  const handleFinish = (result: SessionResult) => {
    setSummary({ result, reward: finishSession(result) })
    setScreen('result')
  }

  return (
    <div className="min-h-dvh px-4 py-6 sm:px-6 sm:py-10">
      <AuroraBackground />

      <AnimatePresence mode="wait">
        <motion.div
          key={screen === 'quiz' ? `quiz-${runId}` : screen}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {screen === 'home' && (
            <HomeScreen
              profile={profile}
              onPlay={() => setScreen('grade')}
              onOpenBag={() => setScreen('bag')}
              onOpenHowTo={() => setScreen('howto')}
              onRename={renamePlayer}
            />
          )}

          {screen === 'grade' && (
            <GradeScreen
              onSelect={(value) => {
                setGrade(value)
                setScreen('difficulty')
              }}
              onBack={() => setScreen('home')}
            />
          )}

          {screen === 'difficulty' && (
            <DifficultyScreen grade={grade} onSelect={startRun} onBack={() => setScreen('grade')} />
          )}

          {screen === 'quiz' && (
            <QuizScreen
              key={runId}
              grade={grade}
              difficulty={difficulty}
              seenIds={seenIdsFor(grade)}
              inventory={profile.items}
              onUseItem={consumeItem}
              onFinish={handleFinish}
            />
          )}

          {screen === 'result' && summary && (
            <ResultScreen
              result={summary.result}
              reward={summary.reward}
              onPlayAgain={() => startRun(summary.result.difficulty)}
              onHome={() => setScreen('home')}
            />
          )}

          {screen === 'bag' && (
            <BagScreen
              profile={profile}
              onBack={() => setScreen('home')}
              onReset={() => {
                resetProfile()
                setScreen('home')
              }}
            />
          )}

          {screen === 'howto' && <HowToScreen onBack={() => setScreen('home')} />}
        </motion.div>
      </AnimatePresence>

      <footer className="mt-10 text-center text-xs text-slate-400">
        ภาษาไทยผจญภัย · แบบฝึกหัดภาษาไทยระดับประถมศึกษา · ข้อมูลผู้เล่นถูกบันทึกไว้ในเครื่องของคุณ
      </footer>
    </div>
  )
}
