import React, { useState } from 'react';
import { MobileAuthScreen } from './components/MobileAuthScreen';
import { MobileOnboardingScreen } from './components/MobileOnboardingScreen';
import { MobileApp } from './components/MobileApp';

type AppMode = 'marketing' | 'mobile';

export function MobileAppWrapper() {
  const [appMode, setAppMode] = useState<AppMode>('marketing');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOnboarding, setIsOnboarding] = useState(false);

  const handleLaunchApp = () => {
    setAppMode('mobile');
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setAppMode('mobile');
  };

  const handleSignUp = () => {
    setIsAuthenticated(true);
    setIsOnboarding(true);
    setAppMode('mobile');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setIsOnboarding(false);
    setAppMode('marketing');
  };

  const handleOnboardingComplete = () => {
    setIsOnboarding(false);
  };

  // Render mobile app if in mobile mode
  if (appMode === 'mobile') {
    if (!isAuthenticated) {
      return <MobileAuthScreen onSignIn={handleSignIn} onSignUp={handleSignUp} />;
    }

    if (isOnboarding) {
      return <MobileOnboardingScreen onComplete={handleOnboardingComplete} />;
    }

    return <MobileApp onSignOut={handleSignOut} />;
  }

  return null;
}

export { MobileAppWrapper as default };
