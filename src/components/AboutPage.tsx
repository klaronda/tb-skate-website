import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Heart, 
  Users, 
  Code, 
  Target, 
  Globe, 
  Zap,
  Building,
  Camera,
  Brain,
  Trophy,
  MapPin,
  Mail
} from 'lucide-react';

export function AboutPage() {
  const teamValues = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "We're skaters first, technologists second. Everything we build comes from genuine passion for the culture."
    },
    {
      icon: Users,
      title: "Community",
      description: "Skateboarding is about connection. We're building technology to strengthen bonds between skaters worldwide."
    },
    {
      icon: Code,
      title: "Innovation",
      description: "Combining cutting-edge AI with deep skateboarding knowledge to create tools that actually matter."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making skateboarding approachable for everyone, regardless of location, skill level, or background."
    }
  ];

  const achievements = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Team alumni from Amazon, Google, and leading CV vendors",
      metric: "15+ years"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Advanced models for action sports analysis",
      metric: "4 Patents"
    },
    {
      icon: Trophy,
      title: "Skateboarding",
      description: "Collective decades of skateboarding experience",
      metric: "25+ years"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building connections across the global skate scene",
      metric: "50+ Cities"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About Trickbase
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're pioneering the future of action sports analysis through advanced computer vision and AI, 
            starting with skateboarding—the sport that taught us innovation, creativity, and the power of community.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-800">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-white mb-6">Our Mission</h2>
                  <p className="text-blue-200 mb-6 text-lg leading-relaxed">
                    Traditional action sports analysis relies on manual tagging and subjective human judgment. 
                    This creates inefficiencies in content creation and limits scalable video analysis.
                  </p>
                  <p className="text-blue-200 text-lg leading-relaxed">
                    Our AI-powered computer vision platform provides objective, instant analysis of skateboarding techniques, 
                    enabling automated content tagging and creating new possibilities for sports technology platforms.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1592503254512-f31277392770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHNrYXRlYm9hcmRpbmclMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU4OTIyOTU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Urban skateboarding community"
                    className="w-full h-64 object-cover object-center rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 bg-gray-900/90 backdrop-blur-sm rounded-lg border border-gray-700">
                      <p className="text-sm text-white">
                        <strong>"Built by Skaters, for Skaters."</strong>
                        <br />
                        <span className="text-gray-300">— Our commitment to genuine skateboarding experience</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Our Values</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              These principles guide everything we do, from the code we write to the community we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-600 transition-colors group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 group-hover:bg-blue-500 rounded-full transition-colors">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Background */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Professional Background</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white mb-3">Enterprise Experience</h4>
                  <p className="text-gray-300 mb-4">
                    Our team brings extensive experience from leading technology companies and AI/CV vendors:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-orange-600 text-white">Amazon</Badge>
                      <span className="text-gray-300">Computer Vision & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-600 text-white">AI Vendors</Badge>
                      <span className="text-gray-300">Third-party AI/CV Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-green-600 text-white">Startups</Badge>
                      <span className="text-gray-300">Product Development & Scaling</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-white mb-3">Technical Expertise</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-700 rounded">
                      <div className="text-blue-300 mb-1">Computer Vision</div>
                      <div className="text-sm text-gray-400">Action Recognition</div>
                    </div>
                    <div className="p-3 bg-gray-700 rounded">
                      <div className="text-green-300 mb-1">Machine Learning</div>
                      <div className="text-sm text-gray-400">Neural Networks</div>
                    </div>
                    <div className="p-3 bg-gray-700 rounded">
                      <div className="text-purple-300 mb-1">Cloud Infrastructure</div>
                      <div className="text-sm text-gray-400">Scalable APIs</div>
                    </div>
                    <div className="p-3 bg-gray-700 rounded">
                      <div className="text-yellow-300 mb-1">Product Design</div>
                      <div className="text-sm text-gray-400">User Experience</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-blue-400" />
                  <CardTitle className="text-white">Skateboarding Roots</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-white mb-3">Cultural Foundation</h4>
                  <p className="text-gray-300 mb-4">
                    Skateboarding isn't just our hobby—it's our foundation. Every team member has deep roots in skate culture:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-4 w-4 text-blue-400" />
                        <span className="text-white">Global Perspective</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Team members from street scenes in LA, park culture in Barcelona, 
                        and underground spots in Tokyo.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="h-4 w-4 text-green-400" />
                        <span className="text-white">Community Builders</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        We've organized sessions, built DIY spots, and connected skaters 
                        across different scenes and generations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Camera className="h-4 w-4 text-purple-400" />
                        <span className="text-white">Documentation</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Years of filming, editing, and analyzing skateboarding footage 
                        gave us unique insights into trick mechanics.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Bring section hidden until ready */}
        {/* <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">What We Bring</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The unique combination of technical expertise and skateboarding passion that drives our innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600 rounded-full">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl text-blue-300 mb-2">{achievement.metric}</div>
                  <h4 className="text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section> */}

        {/* Vision Statement */}
        <section className="mb-20">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-white mb-6">Our Vision</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                We envision AI-powered analysis becoming the foundation for next-generation action sports platforms, 
                content creation tools, and performance tracking systems across skateboarding, surfing, snowboarding, 
                and beyond.
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our deep understanding of skateboarding culture ensures our technology enhances rather than replaces 
                the human elements that make action sports special—creativity, style, and authentic progression.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="bg-gradient-to-r from-blue-900 to-purple-900 border-blue-800">
            <CardContent className="p-12 text-center">
              <h3 className="text-white mb-4">Ready to Integrate Trickbase AI?</h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
                Get notified when our AI skateboard trick recognition API becomes available for commercial integration. 
                Be among the first to build next-generation action sports applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Business email for API access updates"
                />
                <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3">
                  <Mail className="w-4 h-4 mr-2" />
                  Get API Access
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-blue-300">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Enterprise-ready APIs</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Real-time processing</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Custom model training</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}