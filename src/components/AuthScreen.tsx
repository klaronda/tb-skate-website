import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Zap } from 'lucide-react';

interface AuthScreenProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export function AuthScreen({ onSignIn, onSignUp }: AuthScreenProps) {
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-gray-900 font-semibold">SkateCoach</h1>
          </div>
        </div>
      </header>

      {/* Auth Content */}
      <main className="flex-1 px-4 py-6">
        <div className="w-full max-w-sm mx-auto space-y-8">
          {authView === 'signin' ? (
            <>
              {/* Sign In */}
              <div className="text-center space-y-4">
                <h2 className="text-gray-900 text-2xl">Welcome back</h2>
                <p className="text-gray-600">Sign in to continue your skating journey</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="signin-email" className="text-gray-900">Email</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="alex@example.com"
                    className="mt-2 bg-white border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="signin-password" className="text-gray-900">Password</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-2 bg-white border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={onSignIn}
                  className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => setAuthView('signup')}
                  variant="ghost"
                  className="w-full h-12 text-gray-600 hover:text-gray-700"
                >
                  Don't have an account? Sign up
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Sign Up */}
              <div className="text-center space-y-4">
                <h2 className="text-gray-900 text-2xl">Create Account</h2>
                <p className="text-gray-600">Start your skateboarding journey with personalized coaching</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="signup-firstName" className="text-gray-900">First name</Label>
                    <Input
                      id="signup-firstName"
                      placeholder="Alex"
                      className="mt-2 bg-white border-gray-300"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-lastName" className="text-gray-900">Last name</Label>
                    <Input
                      id="signup-lastName"
                      placeholder="Rodriguez"
                      className="mt-2 bg-white border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="signup-email" className="text-gray-900">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="alex@example.com"
                    className="mt-2 bg-white border-gray-300"
                  />
                </div>
                <div>
                  <Label htmlFor="signup-password" className="text-gray-900">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    className="mt-2 bg-white border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={onSignUp}
                  className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white"
                >
                  Create Account
                </Button>
                <Button 
                  onClick={() => setAuthView('signin')}
                  variant="ghost"
                  className="w-full h-12 text-gray-600 hover:text-gray-700"
                >
                  Already have an account? Sign in
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
