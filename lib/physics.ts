export function calculateLorentzFactor(speedFraction: number): number {
  if (speedFraction <= 0 || speedFraction >= 1) {
    throw new Error("Speed must be greater than 0 and less than 1.");
  }

  return 1 / Math.sqrt(1 - speedFraction * speedFraction);
}

export function calculateEarthTime(
  travelerTime: number,
  speedFraction: number
): number {
  if (travelerTime <= 0) {
    throw new Error("Traveler time must be greater than 0.");
  }

  const lorentzFactor = calculateLorentzFactor(speedFraction);
  return travelerTime * lorentzFactor;
}