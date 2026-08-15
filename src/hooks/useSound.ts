import { useCallback, useSyncExternalStore } from 'react'
import { isMuted, playSfx, setMuted, subscribeMuted, type SfxName } from '@/lib/sound'

export function useSound() {
  const muted = useSyncExternalStore(
    (listener) => subscribeMuted(listener),
    isMuted,
    () => false,
  )

  const play = useCallback((name: SfxName) => playSfx(name), [])
  const toggleMuted = useCallback(() => setMuted(!isMuted()), [])

  return { muted, play, toggleMuted }
}
