import React from 'react';
import {
  ConstantsProvider,
  AuthProvider,
  LoadingProvider,
  NavLinksProvider,
} from './index';

export function Providers({ children }) {
  return (
    <ConstantsProvider>
      <LoadingProvider>
        <AuthProvider>
          <NavLinksProvider>{children}</NavLinksProvider>
        </AuthProvider>
      </LoadingProvider>
    </ConstantsProvider>
  );
}
