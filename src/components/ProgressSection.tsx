import { Progress } from './ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Rocket } from 'lucide-react';

export function ProgressSection() {
  const metrics = [
    { name: 'Rolling', percentage: 82, description: 'Detecting successful rollaway' },
    { name: 'Pop', percentage: 88, description: 'Identifying board pop mechanics' },
    { name: 'Flick', percentage: 83, description: 'Recognizing flick technique' },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-4xl text-white">
            Live Model Progress
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            We improve weekly. Metrics are tracked across real-world skateboarding datasets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card key={metric.name} className="text-center bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{metric.name}</CardTitle>
                <CardDescription className="text-gray-400">{metric.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-4xl mb-2 text-blue-300" aria-hidden="true">{metric.percentage}%</div>
                  <Progress 
                    value={metric.percentage} 
                    className="h-3 bg-gray-700 [&>div]:bg-white" 
                    aria-label={`${metric.name} accuracy: ${metric.percentage}%`}
                    aria-valuenow={metric.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="p-6 bg-gray-800 border border-blue-500/30 rounded-lg">
          <div className="flex items-center gap-2 text-blue-300 mb-2">
            <Rocket className="w-5 h-5" />
            <p>API access available when trick coverage expands</p>
          </div>
          <p className="text-sm text-blue-200">Currently targeting 95%+ accuracy across core trick mechanics</p>
        </div>
      </div>
    </section>
  );
}