import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Activity, Eye, EyeOff } from 'lucide-react';

interface MobileAuthScreenProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export function MobileAuthScreen({ onSignIn, onSignUp }: MobileAuthScreenProps) {
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authView === 'signin') {
      onSignIn();
    } else {
      onSignUp();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-xl blur-sm"></div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold tracking-tight">
                SkateCoach
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Auth Content */}
      <main className="relative z-10 flex-1 px-6 py-4">
        <div className="w-full max-w-sm mx-auto">
          <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {authView === 'signin' ? 'Welcome Back' : 'Create Account'}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {authView === 'signin' 
                  ? 'Sign in to continue your skating journey' 
                  : 'Start your skateboarding journey with personalized coaching'
                }
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {authView === 'signup' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-200">First name</Label>
                      <Input
                        id="firstName"
                        placeholder="Alex"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-200">Last name</Label>
                      <Input
                        id="lastName"
                        placeholder="Rodriguez"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-200">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-200">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium shadow-lg transition-all duration-200"
                >
                  {authView === 'signin' ? 'Sign In' : 'Create Account'}
                </Button>

                <div className="text-center">
                  <Button 
                    type="button"
                    variant="ghost"
                    onClick={() => setAuthView(authView === 'signin' ? 'signup' : 'signin')}
                    className="text-gray-300 hover:text-white hover:bg-gray-700/50"
                  >
                    {authView === 'signin' 
                      ? "Don't have an account? Sign up" 
                      : "Already have an account? Sign in"
                    }
                  </Button>
                </div>

                {authView === 'signup' && (
                  <p className="text-xs text-gray-400 text-center leading-relaxed">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-4">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Skateboarding • AI Coaching • Community
          </p>
        </div>
      </footer>
    </div>
  );
}
