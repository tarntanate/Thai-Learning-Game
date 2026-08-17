import { grade1Questions } from '@/data/grade1'
import { grade2Questions } from '@/data/grade2'
import { grade3Questions } from '@/data/grade3'
import { grade4Questions } from '@/data/grade4'
import { grade5Questions } from '@/data/grade5'
import { socialGrade1Questions } from '@/data/social/grade1'
import type { Grade, Question, Subject } from '@/game/types'

const BANK: Record<Subject, Partial<Record<Grade, Question[]>>> = {
  thai: {
    1: grade1Questions,
    2: grade2Questions,
    3: grade3Questions,
    4: grade4Questions,
    5: grade5Questions,
  },
  social: {
    1: socialGrade1Questions,
  },
  math: {},
}

export function getQuestionBank(subject: Subject, grade: Grade): Question[] {
  return BANK[subject][grade] ?? []
}

export function getQuestionCount(subject: Subject, grade: Grade) {
  return getQuestionBank(subject, grade).length
}
