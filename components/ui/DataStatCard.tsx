export default function DataStatCard({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "cyan" | "red" }) {
  return <div className="data-stat"><p className="eyebrow">{label}</p><p className={tone === "cyan" ? "text-cyan-200" : tone === "red" ? "text-rose-200" : "text-slate-200"}>{value}</p></div>;
}
