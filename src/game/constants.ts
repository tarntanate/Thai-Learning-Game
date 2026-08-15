import type { Difficulty, Grade, ItemId, ItemMeta, QuestionCategory } from '@/game/types'

export const QUESTIONS_PER_SESSION = 15
export const MAX_HEARTS = 10
export const MAX_SURRENDER = 2

export const DIFFICULTIES: Record<
  Difficulty,
  {
    id: Difficulty
    label: string
    emoji: string
    seconds: number
    freeHints: number
    xpMultiplier: number
    description: string
    gradient: string
  }
> = {
  easy: {
    id: 'easy',
    label: 'โหมดง่าย',
    emoji: '🌈',
    seconds: 60,
    freeHints: 3,
    xpMultiplier: 1,
    description: 'ตอบภายใน 60 วินาที · ใช้คำใบ้ฟรีได้ 3 ครั้ง',
    gradient: 'from-emerald-200 via-teal-200 to-sky-200',
  },
  hard: {
    id: 'hard',
    label: 'โหมดยาก',
    emoji: '🔥',
    seconds: 30,
    freeHints: 1,
    xpMultiplier: 1.5,
    description: 'ตอบภายใน 30 วินาที · ใช้คำใบ้ฟรีได้ 1 ครั้ง · ได้ค่าประสบการณ์ x1.5',
    gradient: 'from-orange-200 via-rose-200 to-fuchsia-200',
  },
}

export const ITEMS: Record<ItemId, ItemMeta> = {
  clock: {
    id: 'clock',
    name: 'นาฬิกาเวลา',
    emoji: '⏰',
    rarity: 'common',
    description: 'เพิ่มเวลาตอบคำถามอีก 10 วินาที',
    dropWeight: 42,
    accent: 'from-sky-200 to-cyan-200',
  },
  wand: {
    id: 'wand',
    name: 'คฑาพ่อมด',
    emoji: '🪄',
    rarity: 'rare',
    description: 'ตัดตัวเลือกที่ผิดออก ให้เหลือเพียง 2 ตัวเลือก',
    dropWeight: 26,
    accent: 'from-violet-200 to-indigo-200',
  },
  cat: {
    id: 'cat',
    name: 'แมวส้ม',
    emoji: '🐈',
    rarity: 'rare',
    description: 'เปลี่ยนคำถามข้อนี้เป็นข้อใหม่ พร้อมรีเซ็ตเวลา',
    dropWeight: 24,
    accent: 'from-amber-200 to-orange-200',
  },
  teacher: {
    id: 'teacher',
    name: 'คุณครูใจดี',
    emoji: '👩‍🏫',
    rarity: 'epic',
    description: 'เฉลยคำตอบที่ถูกต้องให้ทันที',
    dropWeight: 8,
    accent: 'from-pink-200 to-rose-200',
  },
}

export const ITEM_ORDER: ItemId[] = ['clock', 'wand', 'cat', 'teacher']

export const RARITY_LABEL: Record<ItemMeta['rarity'], string> = {
  common: 'ธรรมดา',
  rare: 'หายาก',
  epic: 'ตำนาน',
}

export const CATEGORY_LABEL: Record<QuestionCategory, string> = {
  vowel: 'สระ',
  consonant: 'พยัญชนะ',
  consonantclass: 'ไตรยางศ์ (อักษรสามหมู่)',
  tone: 'วรรณยุกต์',
  matra: 'มาตราตัวสะกด',
  spelling: 'การสะกดคำ',
  synonym: 'คำที่มีความหมายเหมือนกัน',
  antonym: 'คำที่มีความหมายตรงข้าม',
  homophone: 'คำที่ออกเสียงเหมือนกัน',
  homograph: 'คำพ้องรูป',
  karan: 'ตัวการันต์',
  cluster: 'คำควบกล้ำ',
  leadconsonant: 'อักษรนำ',
  classifier: 'ลักษณนาม',
  rhyme: 'คำคล้องจอง',
  wordclass: 'ชนิดของคำ',
  sentencetype: 'ชนิดของประโยค',
  idiom: 'สำนวนและสุภาษิต',
  punctuation: 'เครื่องหมายวรรคตอน',
  sentence: 'เติมคำในประโยค',
  rajasap: 'คำราชาศัพท์',
  rohan: 'คำที่ใช้ รร / ฤ ฤๅ / บัน-บรร',
  dialect: 'ภาษาไทยมาตรฐานและภาษาถิ่น',
}

export interface GradeMeta {
  grade: Grade
  label: string
  shortLabel: string
  emoji: string
  gradient: string
  enabled: boolean
}

export const GRADES: GradeMeta[] = [
  {
    grade: 1,
    label: 'ประถมศึกษาปีที่ 1',
    shortLabel: 'ป.1',
    emoji: '🐣',
    gradient: 'from-pink-200 via-rose-200 to-orange-200',
    enabled: true,
  },
  {
    grade: 2,
    label: 'ประถมศึกษาปีที่ 2',
    shortLabel: 'ป.2',
    emoji: '🐤',
    gradient: 'from-amber-200 via-yellow-200 to-lime-200',
    enabled: true,
  },
  {
    grade: 3,
    label: 'ประถมศึกษาปีที่ 3',
    shortLabel: 'ป.3',
    emoji: '🐥',
    gradient: 'from-emerald-200 via-teal-200 to-cyan-200',
    enabled: true,
  },
  {
    grade: 4,
    label: 'ประถมศึกษาปีที่ 4',
    shortLabel: 'ป.4',
    emoji: '🦉',
    gradient: 'from-sky-200 via-blue-200 to-indigo-200',
    enabled: false,
  },
  {
    grade: 5,
    label: 'ประถมศึกษาปีที่ 5',
    shortLabel: 'ป.5',
    emoji: '🦄',
    gradient: 'from-violet-200 via-purple-200 to-fuchsia-200',
    enabled: false,
  },
  {
    grade: 6,
    label: 'ประถมศึกษาปีที่ 6',
    shortLabel: 'ป.6',
    emoji: '🐉',
    gradient: 'from-rose-200 via-pink-200 to-purple-200',
    enabled: false,
  },
]

export const RANKS = [
  { minLevel: 1, title: 'นักเรียนน้อย', emoji: '🌱' },
  { minLevel: 3, title: 'นักผจญภัยตัวจิ๋ว', emoji: '🎒' },
  { minLevel: 5, title: 'นักสะกดคำ', emoji: '✏️' },
  { minLevel: 8, title: 'จอมเวทอักษร', emoji: '🔮' },
  { minLevel: 12, title: 'อัศวินภาษาไทย', emoji: '🛡️' },
  { minLevel: 16, title: 'ปรมาจารย์ภาษาไทย', emoji: '👑' },
]
