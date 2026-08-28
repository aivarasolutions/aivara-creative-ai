"use client";

import { useState } from "react";

interface ToolPillProps {
  name: string;
  logo: string | null;
}

export function ToolPill({ name, logo }: ToolPillProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-gray-200 bg-black/60 border border-white/10 hover:border-teal-500/50 hover:bg-black/80 hover:text-white hover:shadow-[0_0_12px_rgba(20,184,166,0.25)] transition-all duration-300 cursor-default"
      style={{ padding: '8px 14px' }}
    >
      {logo && !imageFailed && (
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
          className="h-[18px] w-[18px] shrink-0 object-contain"
        />
      )}
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}
