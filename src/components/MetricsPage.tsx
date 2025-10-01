import { Progress } from './ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { BarChart3, TrendingUp, Zap, Target } from 'lucide-react';

export function MetricsPage() {
  const bodyMechanics = [
    { name: 'Roll', percentage: 82, completed: true },
    { name: 'Crouch', percentage: 91, completed: true },
    { name: 'Pop', percentage: 88, completed: true },
    { name: 'Scoop', percentage: 0, completed: false },
    { name: 'Foot Slide', percentage: 0, completed: false },
    { name: 'Flick', percentage: 83, completed: true },
    { name: 'Catch', percentage: 0, completed: false },
    { name: 'Land', percentage: 0, completed: false },
    { name: 'Missed Land', percentage: 0, completed: false },
    { name: 'Roll Away', percentage: 88, completed: true }
  ];

  const boardMechanics = [
    { name: 'Flip', percentage: 0, completed: false },
    { name: 'Spin', percentage: 0, completed: false },
    { name: 'Flip + Spin', percentage: 0, completed: false }
  ];

  const verifiedTricks = [
    { name: 'Ollie', percentage: 98, completed: true },
    { name: 'Shuvit', percentage: 88, completed: true },
    { name: 'Kickflip', percentage: 91, completed: true },
    { name: 'Pop Shuvit', percentage: 97, completed: true }
  ];

  const MetricCard = ({ metric, icon: Icon }: { metric: typeof bodyMechanics[0], icon: any }) => (
    <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Icon className="h-5 w-5 text-blue-400" />
            {metric.name}
          </CardTitle>
          {!metric.completed && (
            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              Coming Soon
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {metric.completed ? (
          <div className="space-y-3">
            <div className="text-3xl text-blue-300" aria-hidden="true">
              {metric.percentage}%
            </div>
            <Progress 
              value={metric.percentage} 
              className="h-2 bg-gray-700 [&>div]:bg-white" 
              aria-label={`${metric.name} success rate: ${metric.percentage}%`}
              aria-valuenow={metric.percentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
            <CardDescription className="text-gray-400">
              Success Rate
            </CardDescription>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="text-3xl text-gray-500" aria-hidden="true">
              ---%
            </div>
            <div className="h-2 bg-gray-700 rounded-full">
              <div className="h-full bg-gray-600 rounded-full w-0"></div>
            </div>
            <CardDescription className="text-gray-500">
              In Development
            </CardDescription>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            AI Model Performance Metrics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time performance data from our computer vision models analyzing skateboard trick mechanics and recognition accuracy.
          </p>
        </div>

        {/* Body Mechanics Success Rates */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="h-6 w-6 text-blue-400" />
            <h2 className="text-white">Body Mechanics Success Rates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {bodyMechanics.map((metric, index) => (
              <MetricCard key={index} metric={metric} icon={TrendingUp} />
            ))}
          </div>
        </section>

        {/* Board Mechanics */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Target className="h-6 w-6 text-blue-400" />
            <h2 className="text-white">Board Mechanics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMechanics.map((metric, index) => (
              <MetricCard key={index} metric={metric} icon={TrendingUp} />
            ))}
          </div>
        </section>

        {/* Verified Tricks */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="h-6 w-6 text-blue-400" />
            <h2 className="text-white">Verified Tricks</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifiedTricks.map((metric, index) => (
              <MetricCard key={index} metric={metric} icon={Target} />
            ))}
          </div>
        </section>

        {/* Summary Stats */}
        <section className="mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Model Performance Summary</CardTitle>
              <CardDescription className="text-gray-400">
                Overview of current AI model capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl text-blue-300 mb-2">7</div>
                  <div className="text-gray-400">Active Metrics</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-green-400 mb-2">4</div>
                  <div className="text-gray-400">Verified Tricks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-yellow-400 mb-2">6</div>
                  <div className="text-gray-400">In Development</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-purple-400 mb-2">89%</div>
                  <div className="text-gray-400">Avg Accuracy</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gray-800 border-gray-700 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white">Stay Updated</CardTitle>
              <CardDescription className="text-gray-400">
                Get notified when success metrics are updated with new model improvements and additional trick recognition capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email for metric updates"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Join 1,200+ developers and researchers tracking AI skateboard recognition progress
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}