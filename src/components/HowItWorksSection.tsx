import { Upload, Brain, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Video',
      description: 'Any angle, any quality. Our model adapts to real-world footage.',
    },
    {
      icon: Brain,
      title: 'AI Labels Mechanics',
      description: 'Advanced computer vision identifies stance, pop, flick, catch, and rollaway.',
    },
    {
      icon: Code,
      title: 'Integrate via API',
      description: 'Build analytics, apps, or broadcast tools with our reliable trick data.',
    },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl text-white">
            How It Works for Companies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Three simple steps to integrate advanced skateboarding trick recognition into your applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list" aria-label="How it works steps">
          {steps.map((step, index) => (
            <div key={step.title} className="relative" role="listitem">
              <Card className="h-full bg-gray-700 border-gray-600">
                <CardHeader>
                  <div className="mb-4 w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center" aria-hidden="true">
                    <step.icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center" aria-label={`Step ${index + 1}`}>
                    <span aria-hidden="true">{index + 1}</span>
                  </div>
                  <CardTitle className="text-white">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-600" aria-hidden="true"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}