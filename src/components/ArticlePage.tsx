import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ArticlePageProps {
  articleId: string;
  onNavigate: (page: string) => void;
}

export function ArticlePage({ articleId, onNavigate }: ArticlePageProps) {
  // Real blog post data from our database
  const getArticleData = (id: string) => {
    if (id === 'introducing-trickbase-ai-skateboarding-tricks') {
      return {
        title: 'Introducing Trickbase: AI That Sees Skateboarding Tricks',
        author: 'Trickbase AI Team',
        publishDate: '2025-10-01',
        readTime: '8 min read',
        category: 'Product Launch',
        tags: ['AI', 'Computer Vision', 'Skateboarding', 'API', 'Technology', 'Sports Analytics', 'Machine Learning'],
        excerpt: 'Skateboarding is a sport built on motion, balance, and nuance. Trickbase AI steps in to analyze skateboarding footage, detect tricks, score execution, and return deep metadata - all in a developer-friendly package.',
        heroImage: 'https://qsixicpenosvnhbohxoc.supabase.co/storage/v1/object/public/marketing_assets/skateboard-computer-vision.png',
        content: `
# Introducing Trickbase: AI That Sees Skateboarding Tricks

Skateboarding is a sport built on motion, balance, and nuance. Each trick tells a story – from the approach, to the pop, to the landing. But capturing the full detail of what happens in-between is still largely analog: video review, slow motion, manual tagging. That's where **Trickbase AI** steps in.

Trickbase is an AI engine built to analyze skateboarding footage, detect tricks, score execution, and return deep metadata – all in a developer-friendly package. Whether you're building a video app, running contests, or enhancing sports analytics, Trickbase is the background brain that brings skate into the world of real-time insight.

## What Trickbase Delivers

### Trick Recognition
Trickbase can identify trick names (e.g. kickflip, heelflip, shuvit combos) from video segments using advanced computer vision models.

### Execution Scoring & Confidence
Beyond detection, Trickbase evaluates quality (landing stability, consistency, etc.), and annotates confidence levels.

### Metadata & Timing
Return timestamps (start, end), durations, trick transitions, and auxiliary metrics (air time, rotation).

### API / Developer Focus
The core product is its API interface. Developers call it: send video or frames, get JSON with structured results. SDKs (JS, Python, etc.) will wrap that.

### Live & Batch Modes
You can use Trickbase on full uploaded sessions or (in future) on streamed video – enabling real-time trick logs & overlays.

## Why Trickbase AI Matters

### 1. Scalability & Efficiency
No need for manual annotation or full human video review. Trickbase lets platforms scale trick analysis across thousands of sessions.

### 2. Objective Metrics for Creators & Organizers
Judges, broadcasters, contest platforms, and content creators gain quantifiable data, not guesswork.

### 3. Enhanced Engagement
For live events, real-time trick metadata (leaderboards, overlays) turns passive watch into interactive experience.

### 4. First to Niche
Skateboarding has niche in tech tools. There's little competition doing what we aim to – this gives Trickbase a chance to lead.

## Technical Insight

Here's how the "magic" happens, in digestible steps:

1. **Frame Sampling / Extraction**: Break the video into frames or short clips, sampling at optimal intervals.

2. **Pose Estimation & Feature Extraction**: Use pose estimation (body joints, board edges, foot positions) + motion features to get a condensed representation.

3. **Trick Classification Model**: A neural network (CNNs, temporal networks, or hybrid architectures) classifies which trick(s) occurred in a clip.

4. **Scoring & Metadata Layer**: On top, a scoring engine weights execution features (landing stability, rotation smoothness, consistency over time) to assign metrics.

5. **Return Structured Output**: The API returns JSON: trick name(s), confidence, timestamps, score, extra metadata (e.g. airtime, rotation).

In academic work, similar approaches have succeeded. For example, the **SkateboardAI** dataset is a benchmark for video action recognition in skateboarding – using CNN + temporal models to classify many trick classes. Also, motion-based sensors (accelerometers) have been used to classify skate tricks with high accuracy in controlled settings. These research paths bolster the viability of Trickbase AI's approach.

## Use Cases & Integrations

- **Video Apps & Platforms**: Auto-tag trick content, build "browse by trick" features, rank videos by difficulty or style.
- **Contest & Event Platforms**: Stream in live video → produce trick logs, leaderboards, scoring overlays in near real-time.
- **Sports Analytics & Insights**: Build dashboards for athlete progress, heatmaps of attempts, trend analysis over time.
- **Content Creators & Editors**: Use trick metadata to generate highlights, reels, or "best trick" cuts with less manual editing.

## Roadmap & What's Next

- Public API launch / beta program
- SDKs: JavaScript, Python, mobile (iOS/Android)
- Live / streaming mode (real-time trick detection)
- Developer dashboard: usage, billing, API keys
- Athlete profiles & analytics history
- Integrations: video editors, broadcast overlays

Be among the first to experiment with Trickbase. Join the **early-access waitlist** to:

- Try the API before public launch
- Influence which SDKs and integrations we build
- Get "founder" pricing
- View demos, specs, and sample outputs

**Join now to be part of the future of skateboarding technology.**
        `
      };
    }
    
    // Fallback for unknown articles
    return {
      title: 'Article Not Found',
      author: 'Trickbase AI Team',
      publishDate: '2025-10-01',
      readTime: '1 min read',
      category: 'Error',
      tags: ['Error'],
      excerpt: 'The requested article could not be found.',
      heroImage: 'https://qsixicpenosvnhbohxoc.supabase.co/storage/v1/object/public/marketing_assets/skateboard-computer-vision.jpg',
      content: '# Article Not Found\nThe requested article could not be found.'
    };
  };

  const article = getArticleData(articleId);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          onClick={() => onNavigate('blog')}
          variant="ghost" 
          className="mb-8 text-gray-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-blue-600 text-white">{article.category}</Badge>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.publishDate)}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {article.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-700 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <ImageWithFallback
            src={article.heroImage}
            alt={article.title}
            className="w-full h-64 lg:h-96 object-cover object-center rounded-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          <ReactMarkdown 
            className="text-gray-300 leading-relaxed"
            components={{
              h1: ({children}) => <h1 className="text-3xl text-white font-bold mb-6 mt-8">{children}</h1>,
              h2: ({children}) => <h2 className="text-2xl text-white font-semibold mb-4 mt-6">{children}</h2>,
              h3: ({children}) => <h3 className="text-xl text-white font-semibold mb-3 mt-5">{children}</h3>,
              p: ({children}) => <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>,
              ul: ({children}) => <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">{children}</ul>,
              ol: ({children}) => <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{children}</ol>,
              li: ({children}) => <li className="text-gray-300">{children}</li>,
              strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
              em: ({children}) => <em className="text-gray-200 italic">{children}</em>,
              code: ({children}) => <code className="bg-gray-800 text-blue-300 px-2 py-1 rounded text-sm">{children}</code>,
              blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">{children}</blockquote>
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Author Info */}
        <Card className="bg-gray-800 border-gray-700 mt-12">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-white mb-2">About {article.author}</h4>
                <p className="text-gray-300 leading-relaxed">
                  The Trickbase AI Team consists of computer vision experts, machine learning engineers, and skateboarding enthusiasts working together to build the future of action sports technology.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white text-lg mb-2">Share this article</h3>
              <p className="text-gray-400">Help others discover Trickbase AI</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}