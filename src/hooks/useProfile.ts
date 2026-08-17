import { useCallback, useEffect, useRef, useState } from 'react'
import { applyXp, createProfile, loadProfile, saveProfile } from '@/game/profile'
import type { Grade, ItemId, PlayerProfile, RewardSummary, SessionResult, Subject } from '@/game/types'
import { calcStars, calcXp, missedCount, rollItems } from '@/game/rewards'
import { getQuestionCount } from '@/data'

export function useProfile() {
  const [profile, setProfile] = useState<PlayerProfile>(loadProfile)
  const profileRef = useRef(profile)

  useEffect(() => {
    profileRef.current = profile
    saveProfile(profile)
  }, [profile])

  const consumeItem = useCallback((id: ItemId) => {
    const prev = profileRef.current
    if ((prev.items[id] ?? 0) <= 0) return false
    const next = { ...prev, items: { ...prev.items, [id]: prev.items[id] - 1 } }
    profileRef.current = next
    setProfile(next)
    return true
  }, [])

  const finishSession = useCallback((result: SessionResult): RewardSummary => {
    const prev = profileRef.current
    const xp = calcXp(result)
    const stars = calcStars(result)
    const leveled = applyXp(prev, xp)

    const baseItems = result.cleared ? rollItems(missedCount(result)) : []
    const levelUpItems: ItemId[] = Array.from({ length: leveled.levelsGained }, () => 'teacher')
    const items = [...baseItems, ...levelUpItems]

    const nextItems = { ...prev.items }
    for (const id of items) nextItems[id] = (nextItems[id] ?? 0) + 1

    const key = `${result.subject}:${result.grade}`
    const previousSeen = prev.seen[key] ?? (result.subject === 'thai' ? prev.seen[String(result.grade)] ?? [] : [])
    const merged = Array.from(new Set([...previousSeen, ...result.servedIds]))
    // เมื่อเล่นครบทุกข้อในคลังแล้ว ให้เริ่มนับรอบใหม่
    const seenIds = merged.length >= getQuestionCount(result.subject, result.grade) ? [] : merged

    const next: PlayerProfile = {
      ...prev,
      level: leveled.level,
      xp: leveled.xp,
      stars: prev.stars + stars,
      items: nextItems,
      seen: { ...prev.seen, [key]: seenIds },
      stats: {
        gamesPlayed: prev.stats.gamesPlayed + 1,
        gamesCleared: prev.stats.gamesCleared + (result.cleared ? 1 : 0),
        totalCorrect: prev.stats.totalCorrect + result.correct,
        totalWrong: prev.stats.totalWrong + missedCount(result),
        bestStreak: Math.max(prev.stats.bestStreak, result.bestStreak),
        perfectRuns: prev.stats.perfectRuns + (result.cleared && missedCount(result) === 0 ? 1 : 0),
      },
    }

    profileRef.current = next
    setProfile(next)

    return { xp, stars, items, levelsGained: leveled.levelsGained, newLevel: leveled.level }
  }, [])

  const renamePlayer = useCallback((name: string) => {
    const trimmed = name.trim().slice(0, 20)
    if (!trimmed) return
    setProfile((prev) => ({ ...prev, name: trimmed }))
  }, [])

  const resetProfile = useCallback(() => setProfile(createProfile()), [])

  const seenIdsFor = useCallback((subject: Subject, grade: Grade) => {
    const key = `${subject}:${grade}`
    // รองรับประวัติจากเวอร์ชันเดิมที่บันทึกวิชาภาษาไทยด้วยเลขชั้นเพียงอย่างเดียว
    return profileRef.current.seen[key] ?? (subject === 'thai' ? profileRef.current.seen[String(grade)] ?? [] : [])
  }, [])

  return { profile, consumeItem, finishSession, renamePlayer, resetProfile, seenIdsFor }
}
