import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Rocket, BarChart3, Target } from 'lucide-react';

export function CTASection() {
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
              Be the First to Access Trickbase CV API
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join our waitlist to get early access to the most advanced skateboarding trick recognition API. Perfect for developers, content creators, and action sports companies.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6" role="form" aria-label="API waitlist signup">
              <label htmlFor="cta-email" className="sr-only">Email address for API access</label>
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
              <span id="cta-email-desc" className="sr-only">Join the waitlist for early API access and updates</span>
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