"use client";

import { PopupProvider } from '../components/PopupContext';

export function Providers({ children }) {
  return (
    <PopupProvider>
      {children}
    </PopupProvider>
  );
}