import { grade1Questions } from '@/data/grade1'
import { grade2Questions } from '@/data/grade2'
import { grade3Questions } from '@/data/grade3'
import type { Grade, Question } from '@/game/types'

const BANK: Partial<Record<Grade, Question[]>> = {
  1: grade1Questions,
  2: grade2Questions,
  3: grade3Questions,
}

export function getQuestionBank(grade: Grade): Question[] {
  return BANK[grade] ?? []
}

export function getQuestionCount(grade: Grade) {
  return getQuestionBank(grade).length
}
