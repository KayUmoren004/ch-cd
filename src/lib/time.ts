export function now(): number {
  return Date.now();
}

export function msUntil(target: number): number {
  return target - now();
}
