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

            <div className="flex gap-4">
              <Button 
                className="flex items-center gap-2 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-label="View API documentation"
                role="link"
              >
                Documentation
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1649877508777-1554357604eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcHV0ZXIlMjB2aXNpb24lMjBBSXxlbnwxfHx8fDE3NTg5MjI5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Technology and AI visualization"
              className="w-full h-80 object-cover rounded-lg"
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