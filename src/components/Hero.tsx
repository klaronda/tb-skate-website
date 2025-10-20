import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
// Using Supabase hosted hero asset - updated for Vercel deployment
const heroImage = 'https://qsixicpenosvnhbohxoc.supabase.co/storage/v1/object/public/marketing_assets/hero-asset.jpeg';

interface HeroProps {
  onLaunchApp?: () => void;
}

export function Hero({ onLaunchApp }: HeroProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Skateboarder performing trick with blue sky background"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <Badge variant="secondary" className="mb-6 bg-gray-800/60 text-gray-200 border-gray-600/50">
          Now Available
        </Badge>
        
        <h1 className="mb-6 text-5xl md:text-7xl tracking-tight">
          AI That Understands
          <br />
          <span className="text-blue-300">Skateboarding Tricks</span>
        </h1>
        
        <p className="mb-8 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Get personalized coaching feedback on your skateboarding tricks with AI-powered analysis.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <Button 
            onClick={onLaunchApp}
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Try the App
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
          >
            Learn More
          </Button>
        </div>

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" role="form" aria-label="Email waitlist signup">
          <label htmlFor="hero-email" className="sr-only">Email address</label>
          <Input
            id="hero-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-describedby="hero-email-desc"
            className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <span id="hero-email-desc" className="sr-only">Sign up to receive updates about Trickbase AI</span>
          <Button type="submit" size="lg" className="whitespace-nowrap" aria-describedby="hero-submit-desc">
            Join the Waitlist
          </Button>
          <span id="hero-submit-desc" className="sr-only">Submit your email to join the waitlist for early access</span>
        </form>
      </div>
    </section>
  );
}