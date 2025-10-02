import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPageProps {
  onNavigateToArticle: (articleId: string) => void;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  hero_image_url: string;
  tags: string[];
  published_at: string;
}

export function BlogPage({ onNavigateToArticle }: BlogPageProps) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, we'll use the blog post we just added to the database
    // In a real app, you'd fetch from Supabase here
    const realBlogPost: BlogPost = {
      id: "1",
      title: "Introducing Trickbase: AI That Sees Skateboarding Tricks",
      slug: "introducing-trickbase-ai-skateboarding-tricks",
      excerpt: "Skateboarding is a sport built on motion, balance, and nuance. Trickbase AI steps in to analyze skateboarding footage, detect tricks, score execution, and return deep metadata - all in a developer-friendly package.",
      author: "Trickbase AI Team",
      hero_image_url: "https://qsixicpenosvnhbohxoc.supabase.co/storage/v1/object/public/marketing_assets/skateboard-computer-vision.jpg",
      tags: ["AI", "Computer Vision", "Skateboarding", "API", "Technology", "Sports Analytics", "Machine Learning"],
      published_at: "2025-10-01T00:00:00Z"
    };
    
    setBlogPosts([realBlogPost]);
    setLoading(false);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading blog posts...</p>
        </div>
      </div>
    );
  }

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
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl text-white mb-8">Latest Post</h2>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <ImageWithFallback
                    src={blogPosts[0].hero_image_url}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-blue-600 text-white">Featured</Badge>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blogPosts[0].published_at)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{getReadTime(blogPosts[0].excerpt)}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl text-white mb-4">
                    {blogPosts[0].title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {blogPosts[0].excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">TA</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{blogPosts[0].author}</p>
                        <p className="text-gray-400 text-sm">Published {formatDate(blogPosts[0].published_at)}</p>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => onNavigateToArticle(blogPosts[0].slug)}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

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
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  Join Waitlist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}