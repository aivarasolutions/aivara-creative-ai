interface ToolPillProps {
  name: string;
  logo: string | null;
}

export function ToolPill({ name }: ToolPillProps) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-gray-200 bg-black/60 border border-white/10 hover:border-teal-500/50 hover:bg-black/80 hover:text-white hover:shadow-[0_0_12px_rgba(20,184,166,0.25)] transition-all duration-300 cursor-default"
      style={{ padding: '8px 14px' }}
    >
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}
