'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '../../utils/gtm';

export default function RouteTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname, document.title);
  }, [pathname]);

  return null;
}
