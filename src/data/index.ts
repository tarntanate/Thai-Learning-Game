import { grade1Questions } from '@/data/grade1'
import { grade2Questions } from '@/data/grade2'
import { grade3Questions } from '@/data/grade3'
import { grade4Questions } from '@/data/grade4'
import { grade5Questions } from '@/data/grade5'
import { socialGrade1Questions } from '@/data/social/grade1'
import { socialGrade2Questions } from '@/data/social/grade2'
import { socialGrade3Questions } from '@/data/social/grade3'
import { scienceGrade1Questions } from '@/data/science/grade1'
import { scienceGrade2Questions } from '@/data/science/grade2'
import { scienceGrade3Questions } from '@/data/science/grade3'
import { scienceGrade4Questions } from '@/data/science/grade4'
import { englishGrade1Questions } from '@/data/english/grade1'
import { englishGrade2Questions } from '@/data/english/grade2'
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
    2: socialGrade2Questions,
    3: socialGrade3Questions,
  },
  science: {
    1: scienceGrade1Questions,
    2: scienceGrade2Questions,
    3: scienceGrade3Questions,
    4: scienceGrade4Questions,
  },
  english: {
    1: englishGrade1Questions,
    2: englishGrade2Questions,
  },
  math: {},
}

export function getQuestionBank(subject: Subject, grade: Grade): Question[] {
  return BANK[subject][grade] ?? []
}

export function getQuestionCount(subject: Subject, grade: Grade) {
  return getQuestionBank(subject, grade).length
}
