import { GlassButton } from '@/components/ui/GlassButton'
import { GlassCard } from '@/components/ui/GlassCard'
import { DIFFICULTIES, ITEMS, ITEM_ORDER, MAX_HEARTS, MAX_SURRENDER, QUESTIONS_PER_SESSION } from '@/game/constants'

interface HowToScreenProps {
  onBack: () => void
}

export function HowToScreen({ onBack }: HowToScreenProps) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
      <GlassCard className="text-center">
        <div className="text-5xl">📖</div>
        <h1 className="text-gradient mt-1 text-3xl font-bold">วิธีเล่น</h1>
      </GlassCard>

      <GlassCard delay={0.05}>
        <h2 className="font-display mb-2 text-lg font-semibold text-slate-700">🎮 การเล่นแต่ละรอบ</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• หนึ่งรอบมีคำถาม {QUESTIONS_PER_SESSION} ข้อ เริ่มแล้วต้องเล่นให้จบ ออกกลางคันไม่ได้</li>
          <li>• มีหัวใจ {MAX_HEARTS} ดวง ตอบผิดหรือหมดเวลาจะเสียหัวใจ 1 ดวง</li>
          <li>• ถ้าหัวใจหมด จบเกมทันที และจะไม่ได้ค่าประสบการณ์หรือของรางวัล</li>
          <li>• ตอบถูก 1 ข้อ ได้ 1 คะแนน</li>
          <li>• ถ้าไม่รู้คำตอบจริง ๆ กดยอมแพ้ได้ไม่เกิน {MAX_SURRENDER} ข้อต่อรอบ ระบบจะเฉลยให้ดู</li>
        </ul>
      </GlassCard>

      <GlassCard delay={0.1}>
        <h2 className="font-display mb-2 text-lg font-semibold text-slate-700">⚙️ โหมดความยาก</h2>
        <div className="space-y-2 text-sm text-slate-600">
          {(['easy', 'hard'] as const).map((id) => (
            <div key={id} className="rounded-2xl bg-white/65 px-4 py-3 shadow-inner">
              <div className="font-display font-semibold text-slate-700">
                {DIFFICULTIES[id].emoji} {DIFFICULTIES[id].label}
              </div>
              <div className="text-xs">{DIFFICULTIES[id].description}</div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard delay={0.15}>
        <h2 className="font-display mb-2 text-lg font-semibold text-slate-700">🎒 ไอเท็มพิเศษ</h2>
        <div className="space-y-2 text-sm text-slate-600">
          {ITEM_ORDER.map((id) => (
            <div key={id} className="flex items-start gap-3 rounded-2xl bg-white/65 px-4 py-3 shadow-inner">
              <span className="text-2xl">{ITEMS[id].emoji}</span>
              <div>
                <div className="font-display font-semibold text-slate-700">{ITEMS[id].name}</div>
                <div className="text-xs">{ITEMS[id].description}</div>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard delay={0.2}>
        <h2 className="font-display mb-2 text-lg font-semibold text-slate-700">🎁 การได้รับไอเท็ม</h2>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• ตอบถูกทุกข้อ → ได้ไอเท็มสุ่ม 3 ชิ้น</li>
          <li>• พลาดไม่เกิน 2 ข้อ → ได้ไอเท็มสุ่ม 2 ชิ้น</li>
          <li>• พลาดตั้งแต่ 3 ข้อขึ้นไป → ได้นาฬิกาเวลา 1 ชิ้น</li>
          <li>• ยิ่งเล่นเก่ง ยิ่งได้ค่าประสบการณ์และดาวสะสมมากขึ้น</li>
        </ul>
      </GlassCard>

      <div className="flex justify-center">
        <GlassButton variant="secondary" sfx="back" onClick={onBack}>
          ← กลับหน้าแรก
        </GlassButton>
      </div>
    </div>
  )
}
