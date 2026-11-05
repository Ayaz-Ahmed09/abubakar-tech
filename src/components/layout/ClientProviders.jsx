'use client';

import { WhatsAppProvider } from '../../context/WhatsAppContext';

export default function ClientProviders({ children }) {
  return (
    <WhatsAppProvider>
      {children}
    </WhatsAppProvider>
  );
}
