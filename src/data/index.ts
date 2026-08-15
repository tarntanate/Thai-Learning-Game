import { grade1Questions } from '@/data/grade1'
import type { Grade, Question } from '@/game/types'

const BANK: Partial<Record<Grade, Question[]>> = {
  1: grade1Questions,
}

export function getQuestionBank(grade: Grade): Question[] {
  return BANK[grade] ?? []
}

export function getQuestionCount(grade: Grade) {
  return getQuestionBank(grade).length
}
