import { DIFFICULTIES, ITEMS, ITEM_ORDER } from '@/game/constants'
import type { ItemId, SessionResult } from '@/game/types'
import { weightedPick } from '@/lib/random'

/** จำนวนข้อที่ไม่ได้คะแนน (ตอบผิด + หมดเวลา + ยอมแพ้) */
export function missedCount(result: SessionResult) {
  return result.wrong + result.surrendered
}

/**
 * กติกาการแจกไอเท็มเมื่อเล่นจบครบทุกข้อ
 * - ตอบถูกหมด          → ได้คุณครูช่วยเฉลย 1 ชิ้นแน่นอน + สุ่ม 2 ชิ้น (คุณครูช่วยเฉลย / แมวเปลี่ยนคำถาม / คฑาพ่อมด)
 * - พลาดไม่เกิน 2 ข้อ   → 2 ชิ้น (สุ่มจาก 4 ชนิด)
 * - พลาดตั้งแต่ 3 ข้อ   → นาฬิกา 1 ชิ้น
 */
export function rollItems(missed: number): ItemId[] {
  if (missed >= 3) return ['clock']

  if (missed === 0) {
    const perfectPool: ItemId[] = ['teacher', 'cat', 'wand']
    const entries = perfectPool.map((id) => ({ value: id, weight: ITEMS[id].dropWeight }))
    return ['teacher', weightedPick(entries), weightedPick(entries)]
  }

  const entries = ITEM_ORDER.map((id) => ({ value: id, weight: ITEMS[id].dropWeight }))
  return Array.from({ length: 2 }, () => weightedPick(entries))
}

export function calcXp(result: SessionResult) {
  if (!result.cleared) return 0
  const base = result.correct * 10
  const perfectBonus = missedCount(result) === 0 ? 50 : 0
  const heartBonus = result.heartsLeft * 2
  return Math.round((base + perfectBonus + heartBonus) * DIFFICULTIES[result.difficulty].xpMultiplier)
}

export function calcStars(result: SessionResult) {
  if (!result.cleared) return 0
  const perfectBonus = missedCount(result) === 0 ? 20 : 0
  return result.correct * 2 + perfectBonus
}
