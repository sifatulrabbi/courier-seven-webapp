import React from 'react';
import {
  ConstantsProvider,
  AuthProvider,
  LoadingProvider,
  NavLinksProvider,
  AlertProvider,
} from './index';

export function Providers({ children }) {
  return (
    <ConstantsProvider>
      <AlertProvider>
        <LoadingProvider>
          <AuthProvider>
            <NavLinksProvider>{children}</NavLinksProvider>
          </AuthProvider>
        </LoadingProvider>
      </AlertProvider>
    </ConstantsProvider>
  );
}
