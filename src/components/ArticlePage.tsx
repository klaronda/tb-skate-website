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
          setArticle({
            title: data.title,
            author: data.author,
            publishDate: new Date(data.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            readTime: data.read_time || '5 min read',
            category: 'AI Technology',
            tags: data.tags,
            excerpt: data.excerpt,
            heroImage: data.hero_image_url,
            content: data.content,
            slug: data.slug,
          });
        } else {
          setError("Article not found.");
        }
      } catch (err: any) {
        console.error("Error fetching article:", err.message);
        setError("Failed to load article. Please try again later.");
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
          className={`w-full h-64 lg:h-96 object-cover rounded-lg mb-10 ${
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
              ul: ({children}) => <ul className="list-disc text-gray-300 mb-4 space-y-2 ml-6">{children}</ul>,
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