import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onNavigateToArticle: (articleId: string) => void;
}

export function BlogPage({ onNavigateToArticle }: BlogPageProps) {
  const blogPosts = [
    {
      id: 1,
      slug: "kickflip-ai-recognition",
      title: "Breaking Down the Kickflip: How AI Recognizes Complex Skateboard Mechanics",
      excerpt: "Deep dive into the computer vision techniques we use to identify the subtle mechanics that differentiate a kickflip from a heelflip, including stance analysis, board rotation detection, and landing classification.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["Computer Vision", "Machine Learning", "Technical"],
      image: "skateboard kickflip technique",
      author: "Alex Chen, AI Research Lead",
      featured: true
    },
    {
      id: 2,
      slug: "skateboard-dataset-building",
      title: "From 10,000 Hours to 10,000 Videos: Building the World's Largest Skateboarding Trick Dataset",
      excerpt: "How we're creating a comprehensive training dataset that captures trick variations across different skaters, terrains, and camera angles to build truly robust AI models.",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Data Science", "Machine Learning", "Industry"],
      image: "skateboard video dataset",
      author: "Sarah Kim, Data Engineering"
    },
    {
      id: 3,
      slug: "future-action-sports-analytics",
      title: "The Future of Action Sports Analytics: Beyond Basic Trick Recognition",
      excerpt: "Exploring how advanced AI can unlock new insights in action sports, from style analysis and progression tracking to real-time coaching feedback and performance optimization.",
      date: "2024-01-02",
      readTime: "5 min read",
      tags: ["Industry Insights", "Future Tech", "Analytics"],
      image: "action sports analytics future",
      author: "Jordan Martinez, Product Strategy"
    },
    {
      id: 4,
      slug: "edge-computing-mobile-detection",
      title: "Edge Computing Meets Skateboarding: Real-Time Trick Detection on Mobile Devices",
      excerpt: "Technical breakdown of how we optimized our models for mobile deployment, enabling real-time trick recognition without cloud dependency for AR apps and mobile experiences.",
      date: "2023-12-28",
      readTime: "7 min read",
      tags: ["Edge Computing", "Mobile", "Technical"],
      image: "mobile skateboard detection",
      author: "Alex Chen, AI Research Lead"
    },
    {
      id: 5,
      slug: "computer-vision-action-sports-challenges",
      title: "Why Traditional Computer Vision Fails at Action Sports (And How We Fixed It)",
      excerpt: "The unique challenges of action sports pose fundamental problems for standard AI models. Here's how we developed specialized approaches for high-speed, dynamic motion recognition.",
      date: "2023-12-20",
      readTime: "9 min read",
      tags: ["Computer Vision", "Research", "Technical"],
      image: "computer vision action sports",
      author: "Dr. Maya Patel, Computer Vision Researcher"
    },
    {
      id: 6,
      slug: "ai-skateboarding-style-recognition",
      title: "Building AI That Understands Style: Teaching Machines to Recognize Skateboarding Technique",
      excerpt: "Beyond just identifying tricks, we're training AI to understand the nuances of style, technique quality, and personal flair that make skateboarding an art form.",
      date: "2023-12-15",
      readTime: "6 min read",
      tags: ["Machine Learning", "Style Analysis", "Innovation"],
      image: "skateboarding style analysis",
      author: "Jordan Martinez, Product Strategy"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl text-white mb-6">
            Trickbase AI Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Insights from the cutting edge of AI-powered action sports recognition. Technical deep-dives, industry analysis, and the future of computer vision in skateboarding.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800`}
                    alt={featuredPost.image}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-blue-300 border-blue-300/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl text-white mb-4">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">{featuredPost.author}</span>
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-label={`Read full article: ${featuredPost.title}`}
                      onClick={() => onNavigateToArticle(featuredPost.slug)}
                    >
                      Read Article
                      <span className="sr-only">: {featuredPost.title}</span>
                      <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600`}
                  alt={post.image}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs text-blue-300 border-blue-300/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg text-white line-clamp-2 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.author}</span>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="text-blue-300 hover:text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 rounded px-2 py-1 transition-all duration-200"
                    aria-label={`Read more about ${post.title}`}
                    onClick={() => onNavigateToArticle(post.slug)}
                  >
                    Read More
                    <span className="sr-only"> about {post.title}</span>
                    <ArrowRight className="w-3 h-3 ml-1" aria-hidden="true" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Access CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-600 p-8">
            <CardHeader>
              <CardTitle className="text-3xl text-white mb-4">
                Ready to Integrate Trickbase AI?
              </CardTitle>
              <CardDescription className="text-gray-300 text-lg max-w-2xl mx-auto">
                Get notified when our AI skateboard trick recognition API becomes available for commercial integration. Join leading companies building the future of action sports technology.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-label="Business email for API access updates"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Get API Access
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Enterprise-ready APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Real-time processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Custom model training</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}