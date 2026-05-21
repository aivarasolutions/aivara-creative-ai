'use client';

import { useState } from 'react';

interface ToolPillProps {
  name: string;
  logo: string | null;
}

export function ToolPill({ name, logo }: ToolPillProps) {
  const [imgError, setImgError] = useState(false);
  const showLogo = logo && !imgError;
  const logoUrl = logo || '';

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-gray-200 bg-black/60 border border-white/10 hover:border-teal-500/50 hover:bg-black/80 hover:text-white hover:shadow-[0_0_12px_rgba(20,184,166,0.25)] transition-all duration-300 cursor-default"
      style={{ padding: '8px 14px' }}
    >
      {showLogo && (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          width={18}
          height={18}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
          style={{
            width: '18px',
            height: '18px',
            objectFit: 'contain',
            flexShrink: 0,
            opacity: 0.92,
          }}
        />
      )}
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}
