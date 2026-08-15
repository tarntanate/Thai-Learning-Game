export type SfxName =
  | 'click'
  | 'back'
  | 'start'
  | 'correct'
  | 'wrong'
  | 'tick'
  | 'hint'
  | 'item'
  | 'reward'
  | 'levelup'
  | 'win'
  | 'lose'

type Note = {
  freq: number
  /** seconds */
  dur: number
  /** seconds from the moment the sfx is triggered */
  at?: number
  type?: OscillatorType
  gain?: number
  /** glide to this frequency by the end of the note */
  to?: number
}

const RECIPES: Record<SfxName, Note[]> = {
  click: [{ freq: 660, dur: 0.07, type: 'triangle', gain: 0.16 }],
  back: [{ freq: 420, dur: 0.09, type: 'triangle', gain: 0.14, to: 300 }],
  start: [
    { freq: 523.25, dur: 0.12, gain: 0.18 },
    { freq: 659.25, dur: 0.12, at: 0.1, gain: 0.18 },
    { freq: 783.99, dur: 0.2, at: 0.2, gain: 0.2 },
  ],
  correct: [
    { freq: 783.99, dur: 0.11, gain: 0.2 },
    { freq: 1046.5, dur: 0.22, at: 0.09, gain: 0.2 },
  ],
  wrong: [
    { freq: 300, dur: 0.16, type: 'sawtooth', gain: 0.12, to: 190 },
    { freq: 190, dur: 0.22, at: 0.13, type: 'sawtooth', gain: 0.1, to: 120 },
  ],
  tick: [{ freq: 1200, dur: 0.04, type: 'square', gain: 0.07 }],
  hint: [
    { freq: 880, dur: 0.09, type: 'sine', gain: 0.16 },
    { freq: 1174.66, dur: 0.14, at: 0.08, type: 'sine', gain: 0.14 },
  ],
  item: [
    { freq: 987.77, dur: 0.09, type: 'triangle', gain: 0.18 },
    { freq: 1318.51, dur: 0.16, at: 0.08, type: 'triangle', gain: 0.16 },
  ],
  reward: [
    { freq: 659.25, dur: 0.1, gain: 0.18 },
    { freq: 880, dur: 0.1, at: 0.1, gain: 0.18 },
    { freq: 1108.73, dur: 0.1, at: 0.2, gain: 0.18 },
    { freq: 1318.51, dur: 0.32, at: 0.3, gain: 0.2 },
  ],
  levelup: [
    { freq: 523.25, dur: 0.1, type: 'triangle', gain: 0.18 },
    { freq: 698.46, dur: 0.1, at: 0.1, type: 'triangle', gain: 0.18 },
    { freq: 880, dur: 0.1, at: 0.2, type: 'triangle', gain: 0.18 },
    { freq: 1174.66, dur: 0.45, at: 0.3, type: 'triangle', gain: 0.22 },
  ],
  win: [
    { freq: 523.25, dur: 0.13, gain: 0.2 },
    { freq: 659.25, dur: 0.13, at: 0.13, gain: 0.2 },
    { freq: 783.99, dur: 0.13, at: 0.26, gain: 0.2 },
    { freq: 1046.5, dur: 0.5, at: 0.39, gain: 0.22 },
  ],
  lose: [
    { freq: 440, dur: 0.18, type: 'triangle', gain: 0.16, to: 349.23 },
    { freq: 349.23, dur: 0.18, at: 0.18, type: 'triangle', gain: 0.16, to: 261.63 },
    { freq: 261.63, dur: 0.5, at: 0.36, type: 'triangle', gain: 0.16, to: 174.61 },
  ],
}

const MUTE_KEY = 'thai-quest:muted'

let audioCtx: AudioContext | null = null
let muted = readMuted()
const listeners = new Set<() => void>()

function readMuted() {
  try {
    return localStorage.getItem(MUTE_KEY) === '1'
  } catch {
    return false
  }
}

function getContext() {
  if (typeof window === 'undefined') return null
  if (!audioCtx) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    audioCtx = new Ctor()
  }
  if (audioCtx.state === 'suspended') void audioCtx.resume()
  return audioCtx
}

export function playSfx(name: SfxName) {
  if (muted) return
  const ctx = getContext()
  if (!ctx) return

  const now = ctx.currentTime
  for (const note of RECIPES[name]) {
    const start = now + (note.at ?? 0)
    const end = start + note.dur
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    const peak = note.gain ?? 0.15

    osc.type = note.type ?? 'sine'
    osc.frequency.setValueAtTime(note.freq, start)
    if (note.to) osc.frequency.exponentialRampToValueAtTime(Math.max(30, note.to), end)

    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(peak, start + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, end)

    osc.connect(gain).connect(ctx.destination)
    osc.start(start)
    osc.stop(end + 0.02)
  }
}

export function isMuted() {
  return muted
}

export function setMuted(next: boolean) {
  muted = next
  try {
    localStorage.setItem(MUTE_KEY, next ? '1' : '0')
  } catch {
    /* ignore quota / privacy-mode errors */
  }
  listeners.forEach((listener) => listener())
}

export function subscribeMuted(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
