import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const THAI_DIGITS = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙']

export function toThaiDigits(value: number | string) {
  return String(value).replace(/\d/g, (d) => THAI_DIGITS[Number(d)])
}

export function formatSeconds(seconds: number) {
  const safe = Math.max(0, Math.ceil(seconds))
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${m}:${String(s).padStart(2, '0')}`
}
