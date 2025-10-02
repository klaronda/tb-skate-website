import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CredibilitySection() {
  const techStack = [
    { name: 'OpenAI', description: 'Advanced AI models' },
    { name: 'PyTorch', description: 'Deep learning framework' },
    { name: 'Supabase', description: 'Real-time database' },
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tech Stack */}
          <div>
            <h2 className="mb-6 text-4xl text-white">
              Built with Industry Standards
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              Our platform leverages cutting-edge technology and maintains transparent development practices.
            </p>

            <div className="grid gap-4 mb-8">
              {techStack.map((tech) => (
                <Card key={tech.name} className="p-4 bg-gray-700 border-gray-600">
                  <CardContent className="p-0 text-left">
                    <CardTitle className="text-lg mb-1 text-white">{tech.name}</CardTitle>
                    <CardDescription className="text-gray-300">{tech.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Documentation button hidden until ready */}
            {/* <div className="flex gap-4">
              <Button 
                className="flex items-center gap-2 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="View API documentation"
                role="link"
              >
                Documentation
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </Button>
            </div> */}
          </div>

          {/* Visual */}
          <div className="relative">
            <ImageWithFallback
              src="https://qsixicpenosvnhbohxoc.supabase.co/storage/v1/object/public/Marketing%20Assets/james-harrison-development-setup.jpg"
              alt="Professional development environment - James Harrison coding setup"
              className="w-full h-80 object-cover object-center rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="mb-2">Enterprise-Ready Architecture</h3>
              <p className="text-sm text-gray-200">
                Scalable, reliable, and built for integration with existing sports tech ecosystems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}