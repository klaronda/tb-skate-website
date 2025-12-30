import React from 'react';
import { Video, Trophy, Cpu, Camera, BarChart3, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VisionSection() {
  const useCases = [
    {
      icon: Video,
      title: 'Social Media Platforms',
      description: 'Auto-detect and highlight epic tricks for TikTok, Instagram, and YouTube creators.',
      color: 'bg-emerald-500/20 text-emerald-300',
    },
    {
      icon: Trophy,
      title: 'Competition Analytics',
      description: 'Real-time trick recognition and automated scoring for contests and broadcasts.',
      color: 'bg-amber-500/20 text-amber-300',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking Apps',
      description: 'Objective analysis of technique progression and skill development over time.',
      color: 'bg-blue-500/20 text-blue-300',
    },
    {
      icon: Camera,
      title: 'Video Production Tools',
      description: 'Automatically generate highlight reels and identify the best moments.',
      color: 'bg-pink-500/20 text-pink-300',
    },
    {
      icon: Smartphone,
      title: 'Mobile AR Experiences',
      description: 'Real-time trick detection for augmented reality skateboarding apps.',
      color: 'bg-cyan-500/20 text-cyan-300',
    },
    {
      icon: Cpu,
      title: 'AI Foundation Model',
      description: 'The "ImageNet for action sports" - enabling innovation across the industry.',
      color: 'bg-purple-500/20 text-purple-300',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h2 className="mb-6 text-4xl text-white">
            Vision & Use Cases
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            From social media platforms to global competitions, Trickbase AI powers the next generation of action sports technology.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${useCase.color}`}>
                    <useCase.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg text-white">{useCase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{useCase.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Visual Content */}
        <div className="relative max-w-4xl mx-auto">
          <ImageWithFallback
            src="https://onzjcgqzmqshmdvsmucz.supabase.co/storage/v1/object/public/marketing-assets/future-snowboarder-action.jpg"
            alt="Future action sports technology - snowboarder performing aerial trick"
            className="w-full h-64 lg:h-96 object-cover object-top rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="p-4 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700">
              <p className="text-sm text-white">
                <strong>"This is the future of action sports tech."</strong>
                <br />
                <span className="text-gray-300">— Early Beta Tester</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}