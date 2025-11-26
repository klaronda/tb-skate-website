import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { 
  BookOpen, 
  Code, 
  Key, 
  Zap, 
  Shield, 
  Database, 
  Settings,
  Play,
  Copy,
  CheckCircle
} from 'lucide-react';

interface DocumentationPageProps {
  onContact?: () => void;
}

export function DocumentationPage({ onContact }: DocumentationPageProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Add noindex meta tag to hide from search engines
  useEffect(() => {
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');
    
    return () => {
      // Clean up on unmount
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    curl: `curl -X POST "https://api.trickbase.ai/v1/analyze" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "video_url": "https://example.com/skate-video.mp4",
    "analysis_type": "trick_recognition"
  }'`,
    
    python: `import requests

api_key = "YOUR_API_KEY"
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "video_url": "https://example.com/skate-video.mp4",
    "analysis_type": "trick_recognition"
}

response = requests.post(
    "https://api.trickbase.ai/v1/analyze",
    headers=headers,
    json=data
)

result = response.json()
print(f"Detected trick: {result['tricks'][0]['name']}")
print(f"Confidence: {result['tricks'][0]['confidence']}")`,

    javascript: `const apiKey = 'YOUR_API_KEY';

const analyzeVideo = async (videoUrl) => {
  try {
    const response = await fetch('https://api.trickbase.ai/v1/analyze', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${apiKey}\`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        video_url: videoUrl,
        analysis_type: 'trick_recognition'
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Analysis failed:', error);
  }
};`,

    response: `{
  "id": "analysis_abc123",
  "status": "completed",
  "video_url": "https://example.com/skate-video.mp4",
  "analysis_type": "trick_recognition",
  "results": {
    "tricks": [
      {
        "name": "kickflip",
        "confidence": 0.94,
        "timestamp": 2.3,
        "duration": 1.2,
        "mechanics": {
          "pop": 0.91,
          "flick": 0.96,
          "catch": 0.89,
          "land": 0.92
        }
      }
    ],
    "body_mechanics": {
      "crouch": 0.88,
      "pop": 0.91,
      "balance": 0.85
    }
  },
  "processing_time": 1.2,
  "created_at": "2024-01-15T10:30:00Z"
}`
  };

  const CodeBlock = ({ code, language, id }: { code: string; language: string; id: string }) => (
    <div className="relative bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <span className="text-sm text-gray-400 truncate">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code, id)}
          className="h-8 w-8 p-0 text-gray-400 hover:text-white flex-shrink-0"
        >
          {copiedCode === id ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm text-gray-300 min-w-0">
          <code className="break-words whitespace-pre-wrap lg:whitespace-pre">{code}</code>
        </pre>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-blue-600 rounded-full">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate skateboard trick recognition into your applications with our computer vision API.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation - Hidden on mobile, horizontal scroll on tablet */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="bg-gray-800 border-gray-700 lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle className="text-white">Quick Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                  <a href="#getting-started" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Getting Started
                  </a>
                  <a href="#authentication" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Authentication
                  </a>
                  <a href="#endpoints" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    API Endpoints
                  </a>
                  <a href="#examples" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Code Examples
                  </a>
                  <a href="#sdks" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    SDKs & Libraries
                  </a>
                  <a href="#rate-limits" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Rate Limits
                  </a>
                  <a href="#errors" className="whitespace-nowrap lg:whitespace-normal block p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors">
                    Error Handling
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12 order-1 lg:order-2">
            {/* Getting Started */}
            <section id="getting-started">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Play className="h-6 w-6 text-blue-400" />
                    <CardTitle className="text-white">Getting Started</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-white mb-3">Quick Start</h3>
                    <p className="text-gray-300 mb-4">
                      Get up and running with the Trickbase AI API in minutes. Our REST API provides real-time skateboard trick recognition and analysis.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 bg-gray-700 rounded-lg">
                        <Key className="h-8 w-8 text-blue-400 mb-2" />
                        <h4 className="text-white mb-1">1. Get API Key</h4>
                        <p className="text-sm text-gray-300">Sign up and get your API key</p>
                      </div>
                      <div className="p-4 bg-gray-700 rounded-lg">
                        <Code className="h-8 w-8 text-green-400 mb-2" />
                        <h4 className="text-white mb-1">2. Make Request</h4>
                        <p className="text-sm text-gray-300">Send video for analysis</p>
                      </div>
                      <div className="p-4 bg-gray-700 rounded-lg sm:col-span-2 lg:col-span-1">
                        <Database className="h-8 w-8 text-purple-400 mb-2" />
                        <h4 className="text-white mb-1">3. Get Results</h4>
                        <p className="text-sm text-gray-300">Receive trick data and metrics</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Authentication */}
            <section id="authentication">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-blue-400" />
                    <CardTitle className="text-white">Authentication</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-gray-300 mb-4">
                      The Trickbase AI API uses Bearer token authentication. Include your API key in the Authorization header of all requests.
                    </p>
                    <CodeBlock
                      code={`Authorization: Bearer YOUR_API_KEY`}
                      language="HTTP Header"
                      id="auth-header"
                    />
                  </div>
                  <div className="p-4 bg-blue-900/20 border border-blue-800 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-blue-400 mt-0.5" />
                      <div>
                        <h4 className="text-blue-300 mb-1">Keep your API key secure</h4>
                        <p className="text-sm text-blue-200">
                          Never expose your API key in client-side code. Always make requests from your backend server.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* API Endpoints */}
            <section id="endpoints">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-blue-400" />
                    <CardTitle className="text-white">API Endpoints</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Analyze Endpoint */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-green-600 text-white">POST</Badge>
                        <code className="text-blue-300">/v1/analyze</code>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Analyze a video or image for skateboard tricks and body mechanics.
                      </p>
                      
                      <h4 className="text-white mb-3">Request Parameters</h4>
                      <div className="overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0">
                        <table className="w-full text-sm min-w-[600px] lg:min-w-0">
                          <thead>
                            <tr className="border-b border-gray-700">
                              <th className="text-left py-2 pr-4 text-gray-300">Parameter</th>
                              <th className="text-left py-2 pr-4 text-gray-300">Type</th>
                              <th className="text-left py-2 pr-4 text-gray-300">Required</th>
                              <th className="text-left py-2 text-gray-300">Description</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-300">
                            <tr className="border-b border-gray-700">
                              <td className="py-2 pr-4"><code className="text-xs lg:text-sm">video_url</code></td>
                              <td className="py-2 pr-4">string</td>
                              <td className="py-2 pr-4">Yes</td>
                              <td className="py-2">URL of the video to analyze</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 pr-4"><code className="text-xs lg:text-sm">analysis_type</code></td>
                              <td className="py-2 pr-4">string</td>
                              <td className="py-2 pr-4">No</td>
                              <td className="py-2">Type of analysis (default: "trick_recognition")</td>
                            </tr>
                            <tr className="border-b border-gray-700">
                              <td className="py-2 pr-4"><code className="text-xs lg:text-sm">webhook_url</code></td>
                              <td className="py-2 pr-4">string</td>
                              <td className="py-2 pr-4">No</td>
                              <td className="py-2">URL to receive results callback</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <Separator className="bg-gray-700" />

                    {/* Status Endpoint */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-blue-600 text-white">GET</Badge>
                        <code className="text-blue-300">/v1/analysis/&#123;id&#125;</code>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Get the status and results of a specific analysis.
                      </p>
                    </div>

                    <Separator className="bg-gray-700" />

                    {/* Tricks Endpoint */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Badge className="bg-blue-600 text-white">GET</Badge>
                        <code className="text-blue-300">/v1/tricks</code>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Get a list of all supported skateboard tricks and their current accuracy rates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Code Examples */}
            <section id="examples">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-blue-400" />
                    <CardTitle className="text-white">Code Examples</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="curl" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-gray-700">
                      <TabsTrigger value="curl" className="data-[state=active]:bg-gray-600">cURL</TabsTrigger>
                      <TabsTrigger value="python" className="data-[state=active]:bg-gray-600">Python</TabsTrigger>
                      <TabsTrigger value="javascript" className="data-[state=active]:bg-gray-600 col-span-2 lg:col-span-1">JavaScript</TabsTrigger>
                      <TabsTrigger value="response" className="data-[state=active]:bg-gray-600 col-span-2 lg:col-span-1">Response</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="curl" className="mt-6">
                      <CodeBlock code={codeExamples.curl} language="bash" id="curl-example" />
                    </TabsContent>
                    
                    <TabsContent value="python" className="mt-6">
                      <CodeBlock code={codeExamples.python} language="python" id="python-example" />
                    </TabsContent>
                    
                    <TabsContent value="javascript" className="mt-6">
                      <CodeBlock code={codeExamples.javascript} language="javascript" id="js-example" />
                    </TabsContent>
                    
                    <TabsContent value="response" className="mt-6">
                      <CodeBlock code={codeExamples.response} language="json" id="response-example" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            {/* SDKs */}
            <section id="sdks">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-blue-400" />
                    <CardTitle className="text-white">SDKs & Libraries</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Python SDK</h4>
                      <p className="text-gray-300 text-sm mb-3">Official Python library for Trickbase AI</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <code className="text-xs text-blue-300 bg-gray-800 px-2 py-1 rounded break-all">pip install trickbase-ai</code>
                        <Badge className="bg-green-600 text-white whitespace-nowrap">Available</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Node.js SDK</h4>
                      <p className="text-gray-300 text-sm mb-3">JavaScript/TypeScript SDK for Node.js</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <code className="text-xs text-blue-300 bg-gray-800 px-2 py-1 rounded break-all">npm install @trickbase/ai</code>
                        <Badge className="bg-yellow-600 text-white whitespace-nowrap">Coming Soon</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Swift SDK</h4>
                      <p className="text-gray-300 text-sm mb-3">Native iOS/macOS integration</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <code className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded break-all">TrickbaseAI.swift</code>
                        <Badge className="bg-gray-600 text-white whitespace-nowrap">Planned</Badge>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Android SDK</h4>
                      <p className="text-gray-300 text-sm mb-3">Java/Kotlin SDK for Android</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <code className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded break-all">trickbase-android</code>
                        <Badge className="bg-gray-600 text-white whitespace-nowrap">Planned</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Rate Limits */}
            <section id="rate-limits">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Rate Limits & Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <h4 className="text-white mb-2">Free Tier</h4>
                      <div className="text-2xl text-blue-300 mb-1">100</div>
                      <p className="text-gray-300 text-sm">requests/month</p>
                      <ul className="text-sm text-gray-300 mt-3 space-y-1">
                        <li>• Basic trick recognition</li>
                        <li>• Up to 30sec videos</li>
                        <li>• Email support</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg border border-blue-600">
                      <h4 className="text-white mb-2">Pro Tier</h4>
                      <div className="text-2xl text-green-400 mb-1">10,000</div>
                      <p className="text-gray-300 text-sm">requests/month</p>
                      <ul className="text-sm text-gray-300 mt-3 space-y-1">
                        <li>• Advanced mechanics</li>
                        <li>• Webhook support</li>
                        <li>• Priority support</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg md:col-span-2 lg:col-span-1">
                      <h4 className="text-white mb-2">Enterprise</h4>
                      <div className="text-2xl text-purple-400 mb-1">Custom</div>
                      <p className="text-gray-300 text-sm">volume pricing</p>
                      <ul className="text-sm text-gray-300 mt-3 space-y-1">
                        <li>• Dedicated support</li>
                        <li>• Custom models</li>
                        <li>• SLA guarantees</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Error Handling */}
            <section id="errors">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">
                    The API uses conventional HTTP response codes to indicate success or failure. Error responses include detailed information to help you debug issues.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-red-600 text-white">400</Badge>
                        <h4 className="text-white">Bad Request</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Invalid parameters or malformed request</p>
                    </div>
                    
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-orange-600 text-white">401</Badge>
                        <h4 className="text-white">Unauthorized</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Invalid or missing API key</p>
                    </div>
                    
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-yellow-600 text-white">429</Badge>
                        <h4 className="text-white">Rate Limited</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Too many requests, slow down</p>
                    </div>
                    
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-red-700 text-white">500</Badge>
                        <h4 className="text-white">Server Error</h4>
                      </div>
                      <p className="text-gray-300 text-sm">Something went wrong on our end</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Support CTA */}
            <Card className="bg-gradient-to-r from-blue-900 to-purple-900 border-blue-800">
              <CardContent className="p-8 text-center">
                <h3 className="text-white mb-4">Need Help Getting Started?</h3>
                <p className="text-blue-200 mb-6">
                  Our team is here to help you integrate skateboard trick recognition into your application.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    className="bg-white text-blue-900 hover:bg-gray-100"
                    onClick={onContact}
                  >
                    Contact Trickbase
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}