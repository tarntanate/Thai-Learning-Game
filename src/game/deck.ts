import { getQuestionBank } from '@/data'
import { QUESTIONS_PER_SESSION } from '@/game/constants'
import type { Grade, Question, RuntimeQuestion } from '@/game/types'
import { shuffle } from '@/lib/random'

export function toRuntimeQuestion(question: Question): RuntimeQuestion {
  const correct = question.choices[question.answer]
  const choices = shuffle(question.choices)
  return { ...question, choices, answer: choices.indexOf(correct) }
}

export interface SessionDeck {
  questions: RuntimeQuestion[]
  /** คำถามสำรองสำหรับไอเท็ม "แมวส้ม" */
  spares: Question[]
}

/**
 * สุ่มคำถามสำหรับหนึ่งรอบการเล่น โดยเลี่ยงคำถามที่เคยเจอแล้ว
 * ถ้าคำถามที่ยังไม่เคยเจอเหลือไม่พอ จะรีเซ็ตคลังให้เล่นใหม่ทั้งหมด
 */
export function buildDeck(grade: Grade, seenIds: readonly string[]): SessionDeck {
  const bank = getQuestionBank(grade)
  const seen = new Set(seenIds)
  let unseen = bank.filter((q) => !seen.has(q.id))

  if (unseen.length < QUESTIONS_PER_SESSION) unseen = bank.slice()

  const pool = shuffle(unseen)
  const picked = pool.slice(0, QUESTIONS_PER_SESSION)
  const spares = pool.slice(QUESTIONS_PER_SESSION)

  return {
    questions: picked.map(toRuntimeQuestion),
    spares,
  }
}
