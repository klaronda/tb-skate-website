import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, Activity, Camera, Users, Zap } from 'lucide-react';

interface MobileOnboardingScreenProps {
  onComplete: () => void;
}

interface SkaterDetails {
  firstName: string;
  lastName: string;
  startedSkating: string;
  stance: string;
  gender: string;
  birthMonth: string;
  birthDay: string;
  birthYear: string;
  learningGoals: string;
}

export function MobileOnboardingScreen({ onComplete }: MobileOnboardingScreenProps) {
  const [onboardingStep, setOnboardingStep] = useState(1);
  const [skaterDetails, setSkaterDetails] = useState<SkaterDetails>({
    firstName: 'Alex',
    lastName: 'Rodriguez',
    startedSkating: '2018',
    stance: 'regular',
    gender: 'male',
    birthMonth: '6',
    birthDay: '15',
    birthYear: '1995',
    learningGoals: 'I want to master kickflips and heelflips, and eventually learn tre flips. Also working on improving my balance and consistency with basic tricks.'
  });

  const nextOnboardingStep = () => {
    if (onboardingStep < 4) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      onComplete();
    }
  };

  const prevOnboardingStep = () => {
    if (onboardingStep > 1) {
      setOnboardingStep(onboardingStep - 1);
    }
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1960; year--) {
      years.push(year.toString());
    }
    return years;
  };

  const generateDayOptions = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      days.push(day.toString());
    }
    return days;
  };

  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderStepContent = () => {
    switch (onboardingStep) {
      case 1:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Activity className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl blur-xl"></div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Welcome to SkateCoach!
              </h1>
              <p className="text-gray-300 leading-relaxed text-lg">
                From ollies to switch hardflips, you'll learn how to balance, position your feet, pop, flick and land tricks with AI-powered coaching.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tell us about yourself
              </h2>
              <p className="text-gray-300">It helps us personalize your coaching experience</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-gray-200">First name</Label>
                  <Input
                    id="firstName"
                    value={skaterDetails.firstName}
                    onChange={(e) => setSkaterDetails({...skaterDetails, firstName: e.target.value})}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-gray-200">Last name</Label>
                  <Input
                    id="lastName"
                    value={skaterDetails.lastName}
                    onChange={(e) => setSkaterDetails({...skaterDetails, lastName: e.target.value})}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-200">Started Skating</Label>
                <Select value={skaterDetails.startedSkating} onValueChange={(value: string) => setSkaterDetails({...skaterDetails, startedSkating: value})}>
                  <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {generateYearOptions().map((year) => (
                      <SelectItem key={year} value={year} className="text-white hover:bg-gray-700">{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-200">Stance</Label>
                <div className="flex gap-3">
                  <Button
                    variant={skaterDetails.stance === 'regular' ? 'default' : 'outline'}
                    onClick={() => setSkaterDetails({...skaterDetails, stance: 'regular'})}
                    className={`flex-1 ${
                      skaterDetails.stance === 'regular' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    Regular
                  </Button>
                  <Button
                    variant={skaterDetails.stance === 'goofy' ? 'default' : 'outline'}
                    onClick={() => setSkaterDetails({...skaterDetails, stance: 'goofy'})}
                    className={`flex-1 ${
                      skaterDetails.stance === 'goofy' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    Goofy
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-200">Gender</Label>
                <div className="flex gap-3">
                  <Button
                    variant={skaterDetails.gender === 'male' ? 'default' : 'outline'}
                    onClick={() => setSkaterDetails({...skaterDetails, gender: 'male'})}
                    className={`flex-1 ${
                      skaterDetails.gender === 'male' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    Male
                  </Button>
                  <Button
                    variant={skaterDetails.gender === 'female' ? 'default' : 'outline'}
                    onClick={() => setSkaterDetails({...skaterDetails, gender: 'female'})}
                    className={`flex-1 ${
                      skaterDetails.gender === 'female' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                    }`}
                  >
                    Female
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-200">Birthday</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Select value={skaterDetails.birthMonth} onValueChange={(value: string) => setSkaterDetails({...skaterDetails, birthMonth: value})}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {monthOptions.map((month, index) => (
                        <SelectItem key={month} value={(index + 1).toString()} className="text-white hover:bg-gray-700">{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={skaterDetails.birthDay} onValueChange={(value: string) => setSkaterDetails({...skaterDetails, birthDay: value})}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Day" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {generateDayOptions().map((day) => (
                        <SelectItem key={day} value={day} className="text-white hover:bg-gray-700">{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={skaterDetails.birthYear} onValueChange={(value: string) => setSkaterDetails({...skaterDetails, birthYear: value})}>
                    <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {generateYearOptions().map((year) => (
                        <SelectItem key={year} value={year} className="text-white hover:bg-gray-700">{year}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="learningGoals" className="text-gray-200">What do you want to learn?</Label>
                <Textarea
                  id="learningGoals"
                  placeholder="Tell us what tricks or skills you'd like to work on..."
                  value={skaterDetails.learningGoals}
                  onChange={(e) => setSkaterDetails({...skaterDetails, learningGoals: e.target.value})}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 min-h-24"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                  <Camera className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-3xl blur-xl"></div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Just upload your video
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Record your trick attempts and get instant AI feedback. Our coach will analyze your technique and provide personalized tips to help you land tricks consistently.
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center space-y-8">
            <div className="relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-gray-600/30">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-3xl blur-xl"></div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Choose Your Plan
              </h2>
              <div className="space-y-3 text-gray-300">
                <p className="text-lg">
                  <span className="font-semibold text-white">5 free uploads</span> per month
                </p>
                <p className="text-lg">
                  Or <span className="font-semibold text-white">unlimited uploads</span> for just $5/month
                </p>
                <p className="text-sm">
                  Plus chat with a coach to get tips on the fly. For the price of a coffee, you can learn to skate so much faster.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <Activity className="w-5 h-5 text-white animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-lg blur-sm"></div>
            </div>
            <span className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              SkateCoach
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            {onboardingStep > 1 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevOnboardingStep}
                className="text-gray-300 hover:text-white hover:bg-gray-700/50"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            )}
            <div className="w-24">
              <Progress value={(onboardingStep / 4) * 100} className="h-2 bg-gray-700" />
            </div>
          </div>
        </div>
      </header>

      {/* Onboarding Content */}
      <main className="relative z-10 flex-1 px-6 py-4">
        <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm shadow-2xl min-h-[500px]">
          <CardContent className="p-8 flex flex-col justify-center">
            {renderStepContent()}
          </CardContent>
        </Card>
      </main>

      {/* Bottom Actions */}
      <footer className="relative z-10 px-6 py-6">
        {onboardingStep === 4 ? (
          <div className="space-y-3 max-w-sm mx-auto">
            <Button 
              onClick={nextOnboardingStep}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-lg font-medium shadow-lg"
            >
              Go Pro
            </Button>
            <Button 
              onClick={nextOnboardingStep}
              variant="ghost"
              className="w-full text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              Maybe Later
            </Button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Your videos are stored securely for up to 180 days
            </p>
          </div>
        ) : (
          <div className="max-w-sm mx-auto">
            <Button 
              onClick={nextOnboardingStep}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium shadow-lg"
            >
              Next
            </Button>
          </div>
        )}
      </footer>
    </div>
  );
}
