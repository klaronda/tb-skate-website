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
  // Mock article data - in a real app this would come from a CMS or database
  const getArticleData = (id: string) => {
    const articles: Record<string, any> = {
      'kickflip-ai-recognition': {
        title: 'Breaking Down the Kickflip: How AI Recognizes Complex Skateboard Mechanics',
        author: 'Dr. Sarah Chen',
        publishDate: '2024-12-15',
        readTime: '8 min read',
        category: 'Technical Deep Dive',
        tags: ['Computer Vision', 'Machine Learning', 'Skateboarding', 'Motion Analysis'],
        excerpt: 'Exploring the intricate process of how our AI system identifies and analyzes one of skateboarding\'s most fundamental tricks through advanced computer vision techniques.',
        heroImage: 'https://images.unsplash.com/photo-1564633745055-0b344f158784?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzfHwxNzU5MTc1NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        content: `
## The Challenge of Trick Recognition

The kickflip represents one of the most fundamental yet technically complex tricks in skateboarding. What appears as a fluid motion to the human eye actually consists of multiple intricate phases that our AI system must identify and analyze in real-time.

### Understanding the Mechanics

A kickflip involves several distinct phases:

1. **Setup Phase**: The skater positions their feet and prepares for the trick
2. **Pop Phase**: The tail of the board strikes the ground, creating upward momentum
3. **Flick Phase**: The front foot "flicks" the edge of the board, initiating rotation
4. **Rotation Phase**: The board spins 360 degrees along its longitudinal axis
5. **Catch Phase**: The skater's feet reconnect with the grip tape
6. **Landing Phase**: The skater stabilizes and continues riding

## Computer Vision Approach

Our AI system uses a multi-layered approach to recognize kickflips:

### 1. Pose Estimation
We employ advanced pose estimation algorithms to track 17 key body points on the skater in real-time. This includes:
- Hip and shoulder positioning
- Knee and ankle angles
- Foot placement and movement vectors

### 2. Object Detection and Tracking
Simultaneously, our system tracks the skateboard itself, monitoring:
- Board position relative to the skater
- Rotation angles across all three axes
- Velocity and acceleration vectors
- Distance from the ground

### 3. Temporal Analysis
The magic happens when we analyze these data points across time sequences. Our neural network has been trained on thousands of kickflip attempts to understand the temporal patterns that distinguish a successful kickflip from other tricks or failed attempts.

## Technical Implementation

### Data Processing Pipeline

\`\`\`
Raw Video Input → Frame Extraction → Pose Detection → Object Tracking → 
Feature Engineering → Neural Network → Trick Classification → Confidence Score
\`\`\`

### Machine Learning Architecture

Our kickflip recognition model utilizes a hybrid approach:

- **Convolutional Neural Network (CNN)**: For spatial feature extraction from individual frames
- **Long Short-Term Memory (LSTM)**: For temporal sequence analysis
- **Attention Mechanism**: To focus on critical phases of the trick

The model achieves:
- **94.2% accuracy** on kickflip detection
- **87ms average processing time** per frame
- **Real-time performance** at 30fps video input

## Training Data Challenges

Building a robust kickflip detection system required overcoming several unique challenges:

### Variability in Style
Every skater performs kickflips slightly differently. Some prefer higher flicks, others focus on speed. Our training dataset includes:
- 15,000+ kickflip attempts from 200+ different skaters
- Multiple camera angles and lighting conditions
- Various skateboard setups and environments

### Failed Attempts vs. Successful Tricks
Teaching the AI to distinguish between a successful kickflip and a failed attempt required careful labeling of edge cases:
- Partial rotations
- Foot catches that don't complete
- Board flips without proper foot positioning

## Real-World Applications

This kickflip recognition technology serves as the foundation for broader applications:

### Automated Coaching
- **Form Analysis**: Identifying specific phases where improvement is needed
- **Progress Tracking**: Measuring consistency and success rates over time
- **Comparative Analysis**: Showing differences between attempts

### Content Creation
- **Automatic Highlights**: Detecting successful tricks for video compilation
- **Performance Metrics**: Generating statistics for skaters and content creators
- **Social Features**: Enabling automatic trick counting and sharing

### Competition Judging
- **Objective Scoring**: Providing consistent technical analysis
- **Slow-Motion Breakdown**: Detailed frame-by-frame analysis
- **Statistical Comparison**: Benchmarking against other performances

## Looking Forward

The techniques developed for kickflip recognition are being expanded to cover the entire spectrum of skateboarding tricks. Our roadmap includes:

- **Heelflips and Variants**: Applying similar analysis to opposite-rotation tricks
- **Grind Recognition**: Analyzing rail and ledge interactions
- **Vert Skating**: Adapting the system for transition and bowl skating
- **Style Analysis**: Moving beyond trick identification to style assessment

## Technical Specifications

For developers interested in the implementation details:

### Hardware Requirements
- **GPU**: NVIDIA GTX 1060 or better for real-time processing
- **CPU**: Intel i5 8th gen or AMD Ryzen 5 equivalent
- **RAM**: 8GB minimum, 16GB recommended
- **Camera**: 720p minimum, 1080p at 60fps optimal

### Software Stack
- **Framework**: TensorFlow 2.x with CUDA support
- **Pose Estimation**: MediaPipe Pose
- **Object Detection**: Custom YOLOv8 implementation
- **Video Processing**: OpenCV with GPU acceleration

## Conclusion

Kickflip recognition represents just the beginning of what's possible when AI meets action sports. By breaking down complex human movements into analyzable components, we're creating tools that can help skaters improve, content creators engage audiences, and coaches provide better feedback.

The intersection of computer vision and skateboarding opens up possibilities we're only beginning to explore. As our models become more sophisticated and our training data grows, we're moving closer to a future where AI can understand and appreciate the artistry of skateboarding just as well as any human observer.

*Want to try our kickflip recognition technology? Contact us about beta access to our API for developers and skating apps.*
        `
      }
    };

    return articles[id] || null;
  };

  const article = getArticleData(articleId);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-12 text-center">
              <h1 className="text-white mb-4">Article Not Found</h1>
              <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
              <Button 
                onClick={() => onNavigate('blog')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Article Header */}
      <div className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Button 
            onClick={() => onNavigate('blog')}
            variant="ghost"
            className="text-blue-300 hover:text-white hover:bg-blue-600 mb-8 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-blue-600 text-white mb-4">
                {article.category}
              </Badge>
              <h1 className="text-white mb-6 leading-tight">
                {article.title}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden mb-8">
              <ImageWithFallback
                src={article.heroImage}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <p className="text-lg text-blue-200 leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="text-gray-300 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: article.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-white text-2xl font-medium mt-12 mb-6">${line.substring(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-white text-xl font-medium mt-8 mb-4">${line.substring(4)}</h3>`;
                    }
                    if (line.startsWith('#### ')) {
                      return `<h4 class="text-blue-300 text-lg font-medium mt-6 mb-3">${line.substring(5)}</h4>`;
                    }
                    if (line.match(/^\d+\./)) {
                      return `<div class="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500 my-4"><p class="text-blue-200 font-medium mb-2">${line}</p></div>`;
                    }
                    if (line.startsWith('- ')) {
                      return `<div class="flex items-start gap-3 my-2"><div class="w-2 h-2 bg-blue-500 rounded-full mt-2"></div><p class="text-gray-300">${line.substring(2)}</p></div>`;
                    }
                    if (line.includes('```')) {
                      if (line === '```') {
                        return '';
                      }
                      return `<div class="bg-gray-800 p-6 rounded-lg border border-gray-700 my-6 overflow-x-auto"><code class="text-green-400 text-sm font-mono">${line.replace('```', '')}</code></div>`;
                    }
                    if (line.includes('**') && line.includes('**')) {
                      const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>');
                      return `<p class="my-4">${boldText}</p>`;
                    }
                    if (line.includes('`') && line.includes('`')) {
                      const codeText = line.replace(/`(.*?)`/g, '<code class="bg-gray-800 text-green-400 px-2 py-1 rounded text-sm font-mono">$1</code>');
                      return `<p class="my-4">${codeText}</p>`;
                    }
                    if (line.trim().startsWith('*') && line.trim().endsWith('*')) {
                      return `<div class="bg-blue-900/30 border border-blue-500/30 p-6 rounded-lg my-8"><p class="text-blue-200 italic">${line.trim().slice(1, -1)}</p></div>`;
                    }
                    if (line.trim() === '') {
                      return '';
                    }
                    return `<p class="my-4">${line}</p>`;
                  })
                  .join('')
              }}
            />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <Badge key={tag} variant="outline" className="border-gray-600 text-gray-300">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gray-800 border border-gray-700 rounded-xl">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-white mb-2">About {article.author}</h4>
                <p className="text-gray-300 leading-relaxed">
                  Lead Computer Vision Engineer at Trickbase.ai with over 8 years of experience in machine learning 
                  and action sports analytics. Sarah holds a PhD in Computer Science from Stanford University and 
                  has published extensively on motion recognition and AI applications in sports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}