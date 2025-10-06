import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Progress } from './ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { ArrowLeft, Zap } from 'lucide-react';

interface OnboardingScreenProps {
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

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-gray-900 font-semibold">SkateCoach</h1>
          </div>
          <div className="flex items-center space-x-4">
            {onboardingStep > 1 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevOnboardingStep}
                className="p-2"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <div className="w-24">
              <Progress value={(onboardingStep / 4) * 100} className="h-2" />
            </div>
          </div>
        </div>
      </header>

      {/* Onboarding Content */}
      <main className="flex-1 px-4 py-6">
        <div className="w-full max-w-sm mx-auto space-y-6">
          {onboardingStep === 1 && (
            <>
              {/* Welcome Screen */}
              <div className="text-center space-y-8">
                <div className="aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8" />
                      </div>
                      <p className="text-sm">Skateboard Illustration</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-gray-900 text-2xl">Welcome to SkateCoach!</h1>
                  <p className="text-gray-600 leading-relaxed">
                    From ollies to switch hardflips, you'll learn how to balance, position your feet, pop, flick and land tricks.
                  </p>
                </div>
              </div>
            </>
          )}

          {onboardingStep === 2 && (
            <>
              {/* Skater Details Form */}
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <h2 className="text-gray-900 text-xl">Tell us about yourself.</h2>
                  <p className="text-gray-600">It lets us know how we should coach you.</p>
                </div>

                <div className="space-y-8">
                  {/* Name Fields */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="firstName" className="text-gray-900">First name</Label>
                        <Input
                          id="firstName"
                          value={skaterDetails.firstName}
                          onChange={(e) => setSkaterDetails({...skaterDetails, firstName: e.target.value})}
                          className="mt-2 bg-white border-gray-300"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-gray-900">Last name</Label>
                        <Input
                          id="lastName"
                          value={skaterDetails.lastName}
                          onChange={(e) => setSkaterDetails({...skaterDetails, lastName: e.target.value})}
                          className="mt-2 bg-white border-gray-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Started Skating Year */}
                  <div className="space-y-3">
                    <Label className="text-gray-900">Started Skating</Label>
                    <Select value={skaterDetails.startedSkating} onValueChange={(value: string) => setSkaterDetails({...skaterDetails, startedSkating: value})}>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent className="max-h-48">
                        {generateYearOptions().map((year) => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Stance */}
                  <div className="space-y-3">
                    <Label className="text-gray-900">Stance</Label>
                    <div className="flex gap-3">
                      <Button
                        variant={skaterDetails.stance === 'regular' ? 'default' : 'outline'}
                        onClick={() => setSkaterDetails({...skaterDetails, stance: 'regular'})}
                        className={`flex-1 h-12 ${
                          skaterDetails.stance === 'regular' 
                            ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Regular
                      </Button>
                      <Button
                        variant={skaterDetails.stance === 'goofy' ? 'default' : 'outline'}
                        onClick={() => setSkaterDetails({...skaterDetails, stance: 'goofy'})}
                        className={`flex-1 h-12 ${
                          skaterDetails.stance === 'goofy' 
                            ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Goofy
                      </Button>
                    </div>
                  </div>

                  {/* Gender */}
                  <div className="space-y-3">
                    <Label className="text-gray-900">Gender</Label>
                    <div className="flex gap-3">
                      <Button
                        variant={skaterDetails.gender === 'male' ? 'default' : 'outline'}
                        onClick={() => setSkaterDetails({...skaterDetails, gender: 'male'})}
                        className={`flex-1 h-12 ${
                          skaterDetails.gender === 'male' 
                            ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Male
                      </Button>
                      <Button
                        variant={skaterDetails.gender === 'female' ? 'default' : 'outline'}
                        onClick={() => setSkaterDetails({...skaterDetails, gender: 'female'})}
                        className={`flex-1 h-12 ${
                          skaterDetails.gender === 'female' 
                            ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Female
                      </Button>
                    </div>
                  </div>

                  {/* Birthday */}
                  <div className="space-y-3">
                    <Label className="text-gray-900">Birthday</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Select value={skaterDetails.birthMonth} onValueChange={(value: string) => setSkaterDetails({...skaterDetails, birthMonth: value})}>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          {monthOptions.map((month, index) => (
                            <SelectItem key={month} value={(index + 1).toString()}>{month}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={skaterDetails.birthDay} onValueChange={(value) => setSkaterDetails({...skaterDetails, birthDay: value})}>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Day" />
                        </SelectTrigger>
                        <SelectContent className="max-h-48">
                          {generateDayOptions().map((day) => (
                            <SelectItem key={day} value={day}>{day}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select value={skaterDetails.birthYear} onValueChange={(value) => setSkaterDetails({...skaterDetails, birthYear: value})}>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent className="max-h-48">
                          {generateYearOptions().map((year) => (
                            <SelectItem key={year} value={year}>{year}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Learning Goals */}
                  <div className="space-y-3">
                    <Label htmlFor="learningGoals" className="text-gray-900">Anything you want to learn?</Label>
                    <Textarea
                      id="learningGoals"
                      placeholder="Tell us what tricks or skills you'd like to work on..."
                      value={skaterDetails.learningGoals}
                      onChange={(e) => setSkaterDetails({...skaterDetails, learningGoals: e.target.value})}
                      className="bg-white border-gray-300 min-h-24"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {onboardingStep === 3 && (
            <>
              {/* Upload Video Tutorial */}
              <div className="text-center space-y-8">
                <div className="aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8" />
                      </div>
                      <p className="text-sm">Phone Camera Recording</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-gray-900 text-xl">Just upload your video</h2>
                  <p className="text-gray-600 leading-relaxed">
                    And a coach will drop in notes for landing your trick right on the bolts.
                  </p>
                </div>
              </div>
            </>
          )}

          {onboardingStep === 4 && (
            <>
              {/* Subscription Upsell */}
              <div className="text-center space-y-8">
                <div className="aspect-square w-full max-w-xs mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white border border-gray-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <Zap className="w-8 h-8" />
                      </div>
                      <p className="text-sm">Community People</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-gray-900 text-xl">5 free uploads a month.</h2>
                    <h2 className="text-gray-900 text-xl">Or upgrade for unlimited.</h2>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      Upload all the videos you want for just $5/month, plus chat with a coach to get tips on the fly.
                    </p>
                    <p>
                      For the price of a coffee, you can learn to skate so much faster.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Sticky Bottom Button */}
      <div className="sticky bottom-0 z-50 bg-white border-t border-gray-200 px-4 py-4">
        {onboardingStep === 4 ? (
          <div className="space-y-3 max-w-sm mx-auto">
            <Button 
              onClick={nextOnboardingStep}
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white"
            >
              Go Pro
            </Button>
            <Button 
              onClick={nextOnboardingStep}
              variant="ghost"
              className="w-full h-12 text-gray-600"
            >
              Maybe Later
            </Button>
            <p className="text-xs text-gray-500 text-center mt-2">
              Your videos are stored in the cloud for up to 180 days.
            </p>
          </div>
        ) : (
          <div className="max-w-sm mx-auto">
            <Button 
              onClick={nextOnboardingStep}
              className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
