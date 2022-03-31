import React from 'react';
import './App.css';
import { UseTranslationHook } from './utils/UseTranslation';
import { userManagerConfig } from './utils';
import { MainRouter } from './routers';
import { AuthProvider } from 'react-oidc-context';

export const App: React.FC = () => {
  UseTranslationHook()
  return (
    <AuthProvider {...userManagerConfig}>
      <MainRouter />
    </AuthProvider>
  );
};
