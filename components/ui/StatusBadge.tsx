type StatusBadgeProps = {
  children: string;
  tone?: "cyan" | "blue" | "red" | "purple" | "green";
};

const toneClasses = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
  blue: "border-blue-300/30 bg-blue-300/10 text-blue-200",
  red: "border-red-300/30 bg-red-300/10 text-red-200",
  purple: "border-purple-300/30 bg-purple-300/10 text-purple-200",
  green: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
};

export default function StatusBadge({
  children,
  tone = "cyan",
}: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}