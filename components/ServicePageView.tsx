'use client';

import { useEffect } from 'react';
import { trackServicePageView } from '@/lib/analytics';

export function ServicePageView({ service }: { service: string }) {
  useEffect(() => {
    trackServicePageView(service);
  }, [service]);
  return null;
}
