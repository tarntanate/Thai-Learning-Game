export type Grade = 1 | 2 | 3 | 4 | 5 | 6

export type Difficulty = 'easy' | 'hard'

export type ItemId = 'clock' | 'wand' | 'cat' | 'teacher'

export type Rarity = 'common' | 'rare' | 'epic'

export type QuestionCategory =
  | 'vowel'
  | 'consonant'
  | 'consonantclass'
  | 'tone'
  | 'matra'
  | 'spelling'
  | 'synonym'
  | 'antonym'
  | 'homophone'
  | 'homograph'
  | 'karan'
  | 'cluster'
  | 'leadconsonant'
  | 'classifier'
  | 'rhyme'
  | 'wordclass'
  | 'sentencetype'
  | 'idiom'
  | 'punctuation'
  | 'sentence'
  | 'rajasap'
  | 'rohan'

export interface Question {
  id: string
  category: QuestionCategory
  /** โจทย์คำถาม */
  prompt: string
  choices: string[]
  /** ดัชนีของคำตอบที่ถูกต้องใน choices */
  answer: number
  /** คำใบ้ที่แสดงเมื่อผู้เล่นกดขอตัวช่วย */
  hint: string
  /** คำอธิบายเฉลย */
  explain: string
}

/** คำถามที่สลับตัวเลือกแล้ว พร้อมใช้งานในเกม */
export interface RuntimeQuestion extends Question {
  choices: string[]
  answer: number
}

export interface ItemMeta {
  id: ItemId
  name: string
  emoji: string
  rarity: Rarity
  description: string
  /** น้ำหนักการสุ่มตอนแจกรางวัล */
  dropWeight: number
  accent: string
}

export interface PlayerStats {
  gamesPlayed: number
  gamesCleared: number
  totalCorrect: number
  totalWrong: number
  bestStreak: number
  perfectRuns: number
}

export interface PlayerProfile {
  version: number
  name: string
  level: number
  xp: number
  stars: number
  items: Record<ItemId, number>
  stats: PlayerStats
  /** id คำถามที่เคยเจอแล้ว แยกตามระดับชั้น */
  seen: Record<string, string[]>
  createdAt: number
  updatedAt: number
}

export interface SessionResult {
  grade: Grade
  difficulty: Difficulty
  total: number
  correct: number
  wrong: number
  surrendered: number
  heartsLeft: number
  bestStreak: number
  cleared: boolean
  servedIds: string[]
}

export interface RewardSummary {
  xp: number
  stars: number
  items: ItemId[]
  levelsGained: number
  newLevel: number
}
