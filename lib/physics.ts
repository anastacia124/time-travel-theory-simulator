export function calculateLorentzFactor(speedFraction: number): number {
  if (!Number.isFinite(speedFraction) || speedFraction < 0 || speedFraction >= 1) {
    throw new Error("Speed must be a finite number from 0 up to (but not including) 1.");
  }

  return 1 / Math.sqrt(1 - speedFraction * speedFraction);
}

export function calculateEarthTime(
  travelerTime: number,
  speedFraction: number
): number {
  if (!Number.isFinite(travelerTime) || travelerTime <= 0) {
    throw new Error("Traveler time must be greater than 0.");
  }

  const lorentzFactor = calculateLorentzFactor(speedFraction);
  const earthTime = travelerTime * lorentzFactor;
  if (!Number.isFinite(earthTime)) throw new Error("These inputs produce a result too large to display.");
  return earthTime;
}