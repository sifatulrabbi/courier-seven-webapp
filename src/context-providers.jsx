import React from "react";
import { AuthProvider, PageLinksProvider } from "./contexts";

export default function ContextProviders({ children }) {
  return (
    <AuthProvider>
      <PageLinksProvider>{children}</PageLinksProvider>
    </AuthProvider>
  );
}
