import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Rocket, BarChart3, Target } from 'lucide-react';
import { supabase } from '../lib/supabase';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email: email.trim() }]);

      if (error) throw error;

      setSubmitStatus('success');
      setEmail('');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-8 bg-gray-900" style={{ marginTop: '60px' }}>
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
                disabled={isSubmitting}
                aria-describedby="cta-email-desc"
                className="flex-1 bg-gray-600 border-gray-500 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              />
              <span id="cta-email-desc" className="sr-only">Join the waitlist for early API access and updates</span>
              <Button type="submit" size="lg" variant="secondary" disabled={isSubmitting} className="whitespace-nowrap focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800">
                {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? '✓ Joined!' : 'Join Waitlist'}
              </Button>
            </form>
            {submitStatus === 'error' && (
              <p className="text-sm text-red-300 text-center mb-4">Something went wrong. Please try again.</p>
            )}
            
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