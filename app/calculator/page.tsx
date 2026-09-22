import TimeDilationCalculator from "@/components/TimeDilationCalculator";
import SectionHeader from "@/components/ui/SectionHeader";
import DataStatCard from "@/components/ui/DataStatCard";
export default function CalculatorPage() {
  return <><SectionHeader eyebrow="02 / RELATIVITY LAB" title="Measure the time between." description="Choose a velocity and a traveler's elapsed time. Discover how much time passes in the Earth observer's frame." /><div className="stat-grid"><DataStatCard label="MODEL" value="Special relativity" /><DataStatCard label="EQUATION" value="γ = 1 / √(1 − v²/c²)" tone="cyan" /><DataStatCard label="OUTPUT" value="Elapsed time in years" /></div><TimeDilationCalculator /><p className="science-note">Model assumptions: constant relative speed and an idealized inertial Earth frame. Acceleration, turnaround, and gravitational effects are not included.</p></>;
}
