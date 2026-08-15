export function randomInt(maxExclusive: number) {
  return Math.floor(Math.random() * maxExclusive)
}

export function shuffle<T>(items: readonly T[]): T[] {
  const result = items.slice()
  for (let i = result.length - 1; i > 0; i--) {
    const j = randomInt(i + 1)
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function pickOne<T>(items: readonly T[]): T {
  return items[randomInt(items.length)]
}

export function weightedPick<T>(entries: readonly { value: T; weight: number }[]): T {
  const total = entries.reduce((sum, entry) => sum + entry.weight, 0)
  let roll = Math.random() * total
  for (const entry of entries) {
    roll -= entry.weight
    if (roll <= 0) return entry.value
  }
  return entries[entries.length - 1].value
}
