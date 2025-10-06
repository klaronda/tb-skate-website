import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Rocket, BarChart3, Target } from 'lucide-react';

interface CTASectionProps {
  onLaunchApp?: () => void;
}

export function CTASection({ onLaunchApp }: CTASectionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 text-white">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-4xl mb-4">
              Ready to Improve Your Skateboarding?
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get personalized AI coaching feedback on your tricks. Upload a video and receive detailed analysis to help you land tricks consistently.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Button 
                onClick={onLaunchApp}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex-1"
              >
                Try the App Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-500 text-white hover:bg-gray-600 px-8 py-3 flex-1"
              >
                Learn More
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6" role="form" aria-label="Email waitlist signup">
              <label htmlFor="cta-email" className="sr-only">Email address for updates</label>
              <Input
                id="cta-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-describedby="cta-email-desc"
                className="flex-1 bg-gray-600 border-gray-500 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <span id="cta-email-desc" className="sr-only">Join the waitlist for updates and early access</span>
              <Button type="submit" size="lg" variant="secondary" className="whitespace-nowrap focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                Join Waitlist
              </Button>
            </form>
            
            <div className="grid sm:grid-cols-3 gap-4 text-center text-sm text-gray-300">
              <div>
                <div className="flex justify-center mb-2">
                  <Rocket className="w-6 h-6 text-blue-300" />
                </div>
                <p>Early API Access</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <BarChart3 className="w-6 h-6 text-blue-300" />
                </div>
                <p>Progress Updates</p>
              </div>
              <div>
                <div className="flex justify-center mb-2">
                  <Target className="w-6 h-6 text-blue-300" />
                </div>
                <p>Beta Testing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}