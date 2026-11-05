'use client';

import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { getWhatsAppUrl as buildWhatsAppUrl } from '../utils/contact';

const WhatsAppContext = createContext({
  whatsAppUrl: buildWhatsAppUrl(),
  setServiceName: () => {},
});

/**
 * Provider that lets child pages set a service-specific WhatsApp prefill message.
 * Wrap this around the app layout so every component can read the current URL.
 */
export function WhatsAppProvider({ children }) {
  const [serviceName, setServiceName] = useState(null);

  const whatsAppUrl = useMemo(() => {
    if (serviceName) {
      return buildWhatsAppUrl(`Hello, I need ${serviceName} services.`);
    }
    return buildWhatsAppUrl(); // default: "Hello, I need a home repair service."
  }, [serviceName]);

  const value = useMemo(() => ({ whatsAppUrl, setServiceName }), [whatsAppUrl]);

  return (
    <WhatsAppContext.Provider value={value}>
      {children}
    </WhatsAppContext.Provider>
  );
}

/**
 * Hook to get the current WhatsApp URL (already service-aware).
 */
export function useWhatsAppUrl() {
  return useContext(WhatsAppContext).whatsAppUrl;
}

/**
 * Hook to set the current service name for the WhatsApp prefill.
 * Call this in service page components, e.g.: useSetServiceWhatsApp('electrician')
 */
export function useSetServiceWhatsApp(name) {
  const { setServiceName } = useContext(WhatsAppContext);

  useEffect(() => {
    setServiceName(name);
    // Reset to default when the page unmounts (e.g. navigating away)
    return () => setServiceName(null);
  }, [name, setServiceName]);
}
