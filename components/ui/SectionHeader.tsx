type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="rounded-[2rem] border border-blue-300/20 bg-black/45 p-8 shadow-2xl shadow-blue-950/30 backdrop-blur">
      <p className="mb-4 text-sm uppercase tracking-[0.4em] text-blue-300">
        {eyebrow}
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
        {description}
      </p>
    </div>
  );
}