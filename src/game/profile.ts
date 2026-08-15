import { ITEM_ORDER, RANKS } from '@/game/constants'
import type { ItemId, PlayerProfile } from '@/game/types'

const STORAGE_KEY = 'thai-quest:profile'
const PROFILE_VERSION = 1

export function createProfile(): PlayerProfile {
  const now = Date.now()
  return {
    version: PROFILE_VERSION,
    name: 'นักผจญภัยน้อย',
    level: 1,
    xp: 0,
    stars: 0,
    items: { clock: 2, wand: 1, cat: 1, teacher: 0 },
    stats: {
      gamesPlayed: 0,
      gamesCleared: 0,
      totalCorrect: 0,
      totalWrong: 0,
      bestStreak: 0,
      perfectRuns: 0,
    },
    seen: {},
    createdAt: now,
    updatedAt: now,
  }
}

/** ผสานข้อมูลที่อ่านจาก localStorage เข้ากับโครงสร้างล่าสุด กันข้อมูลเก่าพัง */
function normalize(raw: unknown): PlayerProfile {
  const base = createProfile()
  if (!raw || typeof raw !== 'object') return base

  const data = raw as Partial<PlayerProfile>
  const items = { ...base.items }
  for (const id of ITEM_ORDER) {
    const value = data.items?.[id]
    if (typeof value === 'number' && Number.isFinite(value)) items[id] = Math.max(0, Math.floor(value))
  }

  return {
    ...base,
    ...data,
    version: PROFILE_VERSION,
    name: typeof data.name === 'string' && data.name.trim() ? data.name : base.name,
    level: Math.max(1, Math.floor(Number(data.level) || 1)),
    xp: Math.max(0, Math.floor(Number(data.xp) || 0)),
    stars: Math.max(0, Math.floor(Number(data.stars) || 0)),
    items,
    stats: { ...base.stats, ...(data.stats ?? {}) },
    seen: data.seen && typeof data.seen === 'object' ? data.seen : {},
  }
}

export function loadProfile(): PlayerProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return createProfile()
    return normalize(JSON.parse(raw))
  } catch {
    return createProfile()
  }
}

export function saveProfile(profile: PlayerProfile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...profile, updatedAt: Date.now() }))
  } catch {
    /* localStorage อาจถูกปิดไว้ (โหมดส่วนตัว) — ข้ามการบันทึก */
  }
}

export function clearProfile() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

/** ค่าประสบการณ์ที่ต้องใช้เพื่อเลื่อนจากเลเวลที่กำหนดไปเลเวลถัดไป */
export function xpToNextLevel(level: number) {
  return 100 + (level - 1) * 50
}

export function applyXp(profile: PlayerProfile, gained: number) {
  let level = profile.level
  let xp = profile.xp + Math.max(0, Math.round(gained))
  let levelsGained = 0

  while (xp >= xpToNextLevel(level)) {
    xp -= xpToNextLevel(level)
    level += 1
    levelsGained += 1
  }

  return { level, xp, levelsGained }
}

export function rankFor(level: number) {
  let current = RANKS[0]
  for (const rank of RANKS) {
    if (level >= rank.minLevel) current = rank
  }
  return current
}

export function totalItems(items: Record<ItemId, number>) {
  return ITEM_ORDER.reduce((sum, id) => sum + (items[id] ?? 0), 0)
}
