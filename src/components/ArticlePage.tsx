import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { supabase } from '../lib/supabase';

interface ArticlePageProps {
  articleId: string;
  onNavigate: (page: string) => void;
}

interface Article {
  title: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  excerpt: string;
  heroImage: string;
  content: string;
  slug: string;
}

export function ArticlePage({ articleId, onNavigate }: ArticlePageProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', articleId)
          .single();

        if (error) {
          throw error;
        }

        if (data) {
          // Use specific image for each post
          let heroImage = data.hero_image_url;
          if (data.title?.toLowerCase().includes('challenges') || data.slug?.includes('challenges-training-ai')) {
            heroImage = 'https://onzjcgqzmqshmdvsmucz.supabase.co/storage/v1/object/public/marketing-assets/challenges-training-ai-action-sports.webp';
          } else if (data.title?.toLowerCase().includes('rise of ai') || data.slug?.includes('rise-of-ai')) {
            heroImage = 'https://onzjcgqzmqshmdvsmucz.supabase.co/storage/v1/object/public/marketing-assets/rise-of-ai.jpg';
          } else if (data.title?.toLowerCase().includes('introducing trickbase') || data.slug?.includes('introducing-trickbase')) {
            heroImage = 'https://onzjcgqzmqshmdvsmucz.supabase.co/storage/v1/object/public/marketing-assets/skateboard-computer-vision.png';
          }
          
          setArticle({
            title: data.title,
            author: data.author,
            publishDate: new Date(data.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            readTime: data.read_time || '5 min read',
            category: 'AI Technology',
            tags: data.tags,
            excerpt: data.excerpt,
            heroImage: heroImage,
            content: data.content,
            slug: data.slug,
          });
        } else {
          setError("Article not found.");
        }
      } catch (err: any) {
        console.error("Error fetching article:", err.message);
        // Fallback to hardcoded article if database fails
        if (articleId === 'introducing-trickbase-ai-skateboarding-tricks') {
          setArticle({
            title: "Introducing Trickbase: AI That Sees Skateboarding Tricks",
            author: "Trickbase AI Team",
            publishDate: "October 1, 2025",
            readTime: "8 min read",
            category: "AI Technology",
            tags: ["AI", "Computer Vision", "Skateboarding", "API", "Technology", "Sports Analytics", "Machine Learning"],
            excerpt: "Skateboarding is a sport built on motion, balance, and nuance. Trickbase AI steps in to analyze skateboarding footage, detect tricks, score execution, and return deep metadata - all in a developer-friendly package.",
            heroImage: "https://onzjcgqzmqshmdvsmucz.supabase.co/storage/v1/object/public/marketing-assets/skateboard-computer-vision.png",
            content: `## What is Trickbase AI?

Skateboarding is a sport built on motion, balance, and nuance. A kickflip isn't just "a flip" — it's a precise sequence of pop, flick, catch, and rollaway. Until now, no AI system could reliably recognize these mechanics.

**Trickbase AI** steps in to analyze skateboarding footage, detect tricks, score execution, and return deep metadata — all in a developer-friendly package.

## Why It Matters

Traditional video analysis tools see "person with board." Trickbase sees the difference between a heelflip and a kickflip, measures rotation consistency, and tracks landing stability.

This opens doors for:
- **Content platforms** auto-tagging trick clips
- **Competition analytics** with real-time scoring
- **Training apps** providing objective feedback
- **Broadcast tools** generating instant highlights

## How It Works

Our pipeline processes video through multiple stages:

- **Frame Sampling / Extraction**: Break the video into frames or short clips, sampling at optimal intervals
- **Pose Estimation & Feature Extraction**: Use pose estimation (body joints, board edges, foot positions) + motion features to get a condensed representation
- **Trick Classification Model**: A neural network (CNNs, temporal networks, or hybrid architectures) classifies which trick(s) occurred in a clip
- **Scoring & Metadata Layer**: On top, a scoring engine weights execution features (landing stability, rotation smoothness, consistency over time) to assign metrics
- **Return Structured Output**: The API returns JSON: trick name(s), confidence, timestamps, score, extra metadata (e.g. airtime, rotation)

## Current Progress

We're actively training on real-world skateboarding datasets. Current model accuracy:
- **Rolling detection**: 82%
- **Pop mechanics**: 88%
- **Flick recognition**: 83%

These numbers improve weekly as we expand our training data and refine our models.

## What's Next

We're building toward a foundation model for action sports — starting with skateboarding, then expanding to snowboarding, surfing, and beyond.

Join our waitlist to get early API access when we launch.`,
            slug: "introducing-trickbase-ai-skateboarding-tricks",
          });
        } else {
          setError("Failed to load article. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
        <p className="text-white">Loading article...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
        <p className="text-white">Article not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16">
          <Button 
          variant="link" 
          className="text-blue-400 hover:text-blue-300 mb-8 p-0 h-auto"
            onClick={() => onNavigate('blog')}
          >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Button>

        <h1 className="text-5xl text-white mb-6">{article.title}</h1>
        <div className="flex items-center text-gray-400 text-sm mb-8">
          <User className="w-4 h-4 mr-2" />
                <span>{article.author}</span>
          <Calendar className="w-4 h-4 ml-4 mr-2" />
          <span>{article.publishDate}</span>
          <Clock className="w-4 h-4 ml-4 mr-2" />
                <span>{article.readTime}</span>
            </div>

              <ImageWithFallback
                src={article.heroImage}
                alt={article.title}
          className={`w-full h-64 lg:h-96 object-cover rounded-lg mb-16 ${
            article.slug === 'rise-of-ai-action-sports' ? 'object-left' : 'object-bottom'
          }`}
            />

        <div className="flex flex-wrap gap-2 mb-10">
          {article.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-600 text-white">
                  {tag}
                </Badge>
              ))}
            </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown 
            className="text-gray-300 leading-relaxed"
            components={{
              h1: ({children}) => <h1 className="text-3xl text-white font-bold mb-6 mt-8">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl text-white font-medium mb-4 mt-6">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl text-white font-semibold mb-3 mt-5">{children}</h3>,
              p: ({children}) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
              ul: ({children}) => <ul className="list-disc text-gray-300 mb-4 space-y-2" style={{ paddingLeft: '36px' }}>{children}</ul>,
              ol: ({children}) => <ol className="list-decimal text-gray-300 mb-4 space-y-2" style={{ paddingLeft: '36px' }}>{children}</ol>,
              li: ({children}) => <li className="text-gray-300" style={{ paddingLeft: '8px' }}>{children}</li>,
              strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
              em: ({children}) => <em className="text-gray-200 italic">{children}</em>,
              code: ({children}) => <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm">{children}</code>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">{children}</blockquote>
            }}
          >
            {article.content}
          </ReactMarkdown>
          </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-end">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-400 hover:text-white"
            aria-label="Share article"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}