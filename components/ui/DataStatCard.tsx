type DataStatCardProps = {
  label: string;
  value: string;
  tone?: "default" | "cyan" | "red";
};

export default function DataStatCard({
  label,
  value,
  tone = "default",
}: DataStatCardProps) {
  const valueColor =
    tone === "cyan"
      ? "text-cyan-300"
      : tone === "red"
        ? "text-red-300"
        : "text-gray-300";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.25em] text-blue-200">
        {label}
      </p>

      <p className={`mt-2 text-sm font-medium ${valueColor}`}>{value}</p>
    </div>
  );
}