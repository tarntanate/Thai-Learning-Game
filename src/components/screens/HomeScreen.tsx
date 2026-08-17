import { useState } from 'react'
import { motion } from 'motion/react'
import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { PlayerHud } from '@/components/PlayerHud'
import { ITEMS, ITEM_ORDER } from '@/game/constants'
import { totalItems } from '@/game/profile'
import type { PlayerProfile } from '@/game/types'

interface HomeScreenProps {
  profile: PlayerProfile
  onPlay: () => void
  onOpenBag: () => void
  onOpenHowTo: () => void
  onRename: (name: string) => void
}

export function HomeScreen({ profile, onPlay, onOpenBag, onOpenHowTo, onRename }: HomeScreenProps) {
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(profile.name)

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <PlayerHud profile={profile} />

      <GlassCard className="relative overflow-hidden text-center">
        <div className="animate-shine pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.75)_50%,transparent_65%)] bg-[length:200%_100%]" />

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="mx-auto mb-2 text-6xl sm:text-7xl"
        >
          🚀
        </motion.div>

        <h1 className="text-gradient text-4xl font-bold sm:text-5xl">ห้องเรียนผจญภัย</h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          ตะลุยแบบฝึกหัดหลากหลายวิชา เก็บเลเวล สะสมไอเท็ม และเก็บดาวไปตกแต่งยานอวกาศ
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <GlassButton size="lg" sfx="start" onClick={onPlay} className="w-full max-w-xs">
            ▶ เริ่มผจญภัย
          </GlassButton>
          <div className="flex w-full max-w-xs gap-3">
            <GlassButton variant="secondary" onClick={onOpenBag} className="flex-1">
              🎒 กระเป๋าของฉัน
            </GlassButton>
            <GlassButton variant="ghost" onClick={onOpenHowTo} className="flex-1">
              📖 วิธีเล่น
            </GlassButton>
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-4 sm:grid-cols-2">
        <GlassCard delay={0.05} className="p-5">
          <h2 className="font-display mb-3 text-lg font-semibold text-slate-700">🎒 ไอเท็มของฉัน</h2>
          <div className="grid grid-cols-4 gap-2">
            {ITEM_ORDER.map((id) => (
              <div
                key={id}
                title={`${ITEMS[id].name} — ${ITEMS[id].description}`}
                className={`flex flex-col items-center gap-1 rounded-2xl bg-gradient-to-br ${ITEMS[id].accent} px-2 py-3 shadow-inner`}
              >
                <span className="text-2xl">{ITEMS[id].emoji}</span>
                <span className="text-xs font-bold text-slate-600 tabular-nums">×{profile.items[id]}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">รวมทั้งหมด {totalItems(profile.items)} ชิ้น</p>
        </GlassCard>

        <GlassCard delay={0.1} className="p-5">
          <h2 className="font-display mb-3 text-lg font-semibold text-slate-700">👤 ชื่อนักผจญภัย</h2>
          {editing ? (
            <div className="flex gap-2">
              <input
                autoFocus
                value={draft}
                maxLength={20}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    onRename(draft)
                    setEditing(false)
                  }
                }}
                className="min-w-0 flex-1 rounded-2xl border border-white/80 bg-white/80 px-4 py-2 text-slate-700 outline-none focus:ring-2 focus:ring-fuchsia-300"
                placeholder="ใส่ชื่อของหนู"
              />
              <GlassButton
                size="sm"
                onClick={() => {
                  onRename(draft)
                  setEditing(false)
                }}
              >
                บันทึก
              </GlassButton>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <span className="font-display truncate text-xl font-semibold text-slate-700">{profile.name}</span>
              <GlassButton
                variant="secondary"
                size="sm"
                onClick={() => {
                  setDraft(profile.name)
                  setEditing(true)
                }}
              >
                ✏️ เปลี่ยนชื่อ
              </GlassButton>
            </div>
          )}
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <Stat label="เล่นแล้ว" value={profile.stats.gamesPlayed} />
            <Stat label="ผ่านด่าน" value={profile.stats.gamesCleared} />
            <Stat label="เต็ม 15 ข้อ" value={profile.stats.perfectRuns} />
          </div>
        </GlassCard>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/60 px-2 py-2 shadow-inner">
      <div className="font-display text-lg font-bold text-violet-500 tabular-nums">{value}</div>
      <div className="text-[11px] text-slate-500">{label}</div>
    </div>
  )
}
