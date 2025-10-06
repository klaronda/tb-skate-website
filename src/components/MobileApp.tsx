import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Home, 
  Video, 
  MessageCircle,
  User, 
  Upload, 
  Bell,
  Play,
  CheckCircle2,
  Send,
  Megaphone,
  PlaySquare,
  ArrowLeft,
  Search,
  Edit,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Heart,
  Activity,
  Zap,
  Camera,
  Mic,
  Settings
} from 'lucide-react';

interface MobileAppProps {
  onSignOut: () => void;
}

export function MobileApp({ onSignOut }: MobileAppProps) {
  const [activeTab, setActiveTab] = useState('home');
  const [userPlan] = useState('pro');
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [tipModalOpen, setTipModalOpen] = useState(false);
  const [savedTips, setSavedTips] = useState<number[]>([]);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [selectedTrick, setSelectedTrick] = useState('');
  const [uploadNotes, setUploadNotes] = useState('');
  const [notificationsModalOpen, setNotificationsModalOpen] = useState(false);

  const recentUploads = [
    {
      id: 1,
      trick: 'Kickflip',
      status: 'completed',
      feedback: 'Great progress on your pop timing! Focus on keeping your shoulders aligned.',
      timestamp: '2 hours ago',
      score: 7.2
    },
    {
      id: 2,
      trick: 'Ollie',
      status: 'processing',
      feedback: 'We\'re reviewing your technique',
      timestamp: '5 minutes ago',
      score: null
    },
    {
      id: 3,
      trick: 'Heelflip',
      status: 'completed',
      feedback: 'Nice attempt! Try jumping higher and flicking with more force.',
      timestamp: 'Yesterday',
      score: 6.8
    }
  ];

  const dailyTrickTips = [
    {
      id: 1,
      title: 'Master Your Ollie Foundation',
      description: 'Focus on the timing between your back foot pop and front foot slide. Practice stationary first.',
      category: 'Basics',
      details: 'The ollie is the foundation of almost every skateboard trick. Getting this right will unlock your potential for more advanced moves.',
      bullets: [
        'Position your back foot on the tail with the ball of your foot centered',
        'Place your front foot sideways across the board, just behind the front bolts',
        'Crouch down and explode upward, snapping your back foot down hard',
        'As the tail hits the ground, slide your front foot up and forward',
        'Level out the board by pushing your front foot toward the nose',
        'Bend your knees to absorb the landing and stay balanced'
      ]
    },
    {
      id: 2,
      title: 'Kickflip Foot Positioning',
      description: 'Place your front foot at a 45-degree angle near the edge of the board for better flick control.',
      category: 'Flip Tricks',
      details: 'Proper foot positioning is crucial for consistent kickflips. The angle and placement of your front foot determines the flip.',
      bullets: [
        'Start with your front foot positioned like an ollie, but slightly more angled',
        'Place your front foot so your toes hang slightly off the edge',
        'Keep your back foot centered on the tail for a strong pop',
        'As you ollie up, flick your front foot off the corner of the nose',
        'The flick should be quick and sharp, like flicking something off your shoe',
        'Catch the board with both feet when the grip tape faces up'
      ]
    },
    {
      id: 3,
      title: 'Mental Game & Commitment',
      description: 'Visualize landing the trick before attempting. Fear often causes hesitation mid-trick.',
      category: 'Mindset',
      details: 'Skateboarding is as much mental as it is physical. Building confidence and commitment will help you progress faster.',
      bullets: [
        'Visualize yourself successfully landing the trick before attempting it',
        'Start with easier variations and build up confidence gradually',
        'Accept that falling is part of learning - wear protective gear when needed',
        'Focus on the feeling of landing rather than the fear of falling',
        'Break down complex tricks into smaller, manageable steps',
        'Celebrate small progress - every attempt teaches you something new'
      ]
    }
  ];

  const coachMessages = [
    {
      id: 1,
      type: 'coach',
      message: "Hey! I noticed you've been working on kickflips. What specific part are you struggling with the most?",
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'user',
      message: "I can't seem to get the board to flip all the way around. It only does like 3/4 of a rotation.",
      timestamp: '2 hours ago'
    },
    {
      id: 3,
      type: 'coach',
      message: "That's a common issue! Try flicking your front foot more towards the corner of the nose, and make sure you're jumping higher. The extra height gives the board more time to complete the rotation.",
      timestamp: '2 hours ago'
    }
  ];

  const activityData = [
    {
      id: 1,
      type: 'video_uploaded',
      title: 'Video uploaded',
      description: 'Your Kickflip attempt is being reviewed by Coach',
      timestamp: '2 hours ago',
      icon: Upload
    },
    {
      id: 2,
      type: 'push_notification',
      title: 'Coach feedback ready',
      description: 'Your Heelflip analysis is complete with coaching tips',
      timestamp: '4 hours ago',
      icon: Bell
    },
    {
      id: 3,
      type: 'tip_saved',
      title: 'Tip saved',
      description: 'You saved "Master Your Ollie Foundation" to your collection',
      timestamp: 'Yesterday',
      icon: Bookmark
    }
  ];

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % dailyTrickTips.length);
  };

  const prevTip = () => {
    setCurrentTipIndex((prev) => (prev - 1 + dailyTrickTips.length) % dailyTrickTips.length);
  };

  const saveTip = (tipId: number) => {
    if (!savedTips.includes(tipId)) {
      setSavedTips(prev => [...prev, tipId]);
    }
  };

  const removeSavedTip = (tipId: number) => {
    setSavedTips(prev => prev.filter(id => id !== tipId));
  };

  const isTipSaved = (tipId: number) => {
    return savedTips.includes(tipId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'processing':
        return 'bg-gradient-to-r from-orange-500 to-amber-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const renderHomeContent = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Welcome back, Alex!
        </h2>
        <p className="text-gray-300">Ready to improve your skating today?</p>
      </div>

      {/* Upload Button */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <Button 
            onClick={() => setUploadModalOpen(true)}
            className="w-full h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium text-lg shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <Upload className="w-6 h-6" />
              <span>Upload Video</span>
            </div>
          </Button>
        </CardContent>
      </Card>

      {/* Daily Tips */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Daily Trick Tips
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={prevTip}
                className="text-gray-300 hover:text-white hover:bg-gray-700/50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={nextTip}
                className="text-gray-300 hover:text-white hover:bg-gray-700/50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30">
              {dailyTrickTips[currentTipIndex].category}
            </Badge>
            <span className="text-sm text-gray-400">
              {currentTipIndex + 1} of {dailyTrickTips.length}
            </span>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">
              {dailyTrickTips[currentTipIndex].title}
            </h4>
            <p className="text-gray-300 leading-relaxed">
              {dailyTrickTips[currentTipIndex].description}
            </p>
            
            <Dialog open={tipModalOpen} onOpenChange={setTipModalOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto text-blue-400 hover:text-blue-300 hover:bg-transparent">
                  Learn More →
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md w-[calc(100vw-2rem)] mx-auto bg-gray-800 border-gray-600">
                <DialogHeader>
                  <DialogTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {dailyTrickTips[currentTipIndex].title}
                  </DialogTitle>
                  <DialogDescription className="text-gray-300">
                    {dailyTrickTips[currentTipIndex].description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 w-fit">
                    {dailyTrickTips[currentTipIndex].category}
                  </Badge>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {dailyTrickTips[currentTipIndex].details}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Step by Step:</h4>
                    <ul className="space-y-3">
                      {dailyTrickTips[currentTipIndex].bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs text-white font-medium">{index + 1}</span>
                          </div>
                          <span className="text-gray-300 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      onClick={() => {
                        const tipId = dailyTrickTips[currentTipIndex].id;
                        if (isTipSaved(tipId)) {
                          removeSavedTip(tipId);
                        } else {
                          saveTip(tipId);
                        }
                      }}
                      variant={isTipSaved(dailyTrickTips[currentTipIndex].id) ? "default" : "outline"}
                      className={`flex-1 ${
                        isTipSaved(dailyTrickTips[currentTipIndex].id)
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50'
                      }`}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${
                        isTipSaved(dailyTrickTips[currentTipIndex].id) ? 'fill-current' : ''
                      }`} />
                      {isTipSaved(dailyTrickTips[currentTipIndex].id) ? 'Saved' : 'Save Tip'}
                    </Button>
                    <Button 
                      onClick={() => setTipModalOpen(false)}
                      variant="outline"
                      className="bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50"
                    >
                      Done
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Recent Uploads */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recent Uploads
            </CardTitle>
            <Button 
              variant="ghost"
              onClick={() => setActiveTab('videos')}
              className="text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 h-auto"
            >
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentUploads.map((upload) => (
            <div key={upload.id} className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                <PlaySquare className="w-6 h-6 text-gray-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{upload.trick}</h4>
                  <Badge className={`${getStatusColor(upload.status)} text-white text-xs`}>
                    {upload.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-300 mb-2 leading-relaxed">{upload.feedback}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{upload.timestamp}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Score:</span>
                    <span className="text-sm font-medium text-white">
                      {upload.score ? `${upload.score}/10` : '-'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const renderCoachContent = () => (
    <div className="space-y-6">
      {/* Coach Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Coach Chat
        </h2>
        <p className="text-gray-300">Get advice to help improve your skating</p>
      </div>

      {/* Coach Introduction */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Alex's SkateCoach</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ask me anything about skateboarding techniques, tricks, drills, or get detailed feedback on your uploaded videos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Questions */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quick Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {[
            "How can I ollie higher?",
            "Tips for landing kickflips consistently?",
            "What should I focus on as a beginner?",
            "Help me with my balance and stance"
          ].map((question, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="w-full h-auto p-4 text-left justify-start bg-gray-700/30 border-gray-600/50 text-gray-300 hover:bg-gray-600/50 hover:text-white"
            >
              <span className="text-sm">{question}</span>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Chat Messages */}
      {coachMessages.length > 0 && (
        <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Recent Conversation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {coachMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-xl ${
                  msg.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gray-700/50 border border-gray-600/50 text-gray-300'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                  <p className={`text-xs mt-2 ${
                    msg.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                  }`}>
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderProfileContent = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Profile
        </h2>
        <p className="text-gray-300">Manage your account and skating progress</p>
      </div>

      {/* Account Details */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Account Details
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-gray-700/50">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-lg">
                AR
              </AvatarFallback>
            </Avatar>
            <div>
              <h5 className="font-semibold text-white">Alex Rodriguez</h5>
              <p className="text-sm text-gray-300">alex.rodriguez@email.com</p>
              <p className="text-xs text-gray-400">Skating since 2018</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-700/30 rounded-xl text-center border border-gray-600/30">
              <p className="text-2xl font-bold text-white">47</p>
              <p className="text-xs text-gray-400">Videos Uploaded</p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-xl text-center border border-gray-600/30">
              <p className="text-2xl font-bold text-white">6.8</p>
              <p className="text-xs text-gray-400">Avg Score</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sign Out */}
      <Card className="bg-gradient-to-br from-gray-800/95 to-gray-700/95 border border-gray-600/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <Button 
            variant="ghost"
            onClick={onSignOut}
            className="w-full text-gray-300 hover:text-white hover:bg-gray-700/50"
          >
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
              <Activity className="w-5 h-5 text-white animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-lg blur-sm"></div>
            </div>
            <span className="text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              SkateCoach
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30 text-xs">
              {userPlan === 'pro' ? 'Pro' : 'Free'}
            </Badge>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setNotificationsModalOpen(true)}
              className="text-gray-300 hover:text-white hover:bg-gray-700/50"
            >
              <Bell className="w-5 h-5" />
            </Button>
            <button onClick={() => setActiveTab('profile')}>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-avatar.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm">
                  AR
                </AvatarFallback>
              </Avatar>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 px-6 py-6 overflow-y-auto">
        {activeTab === 'home' && renderHomeContent()}
        {activeTab === 'coach' && renderCoachContent()}
        {activeTab === 'profile' && renderProfileContent()}
        {activeTab === 'videos' && (
          <div className="text-center py-12">
            <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Videos Coming Soon</h3>
            <p className="text-gray-300">Video management features are being developed</p>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="relative z-10 px-6 py-4 border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-around">
          {[
            { id: 'home', icon: Home, label: 'Home' },
            { id: 'videos', icon: Video, label: 'Videos' },
            { id: 'coach', icon: MessageCircle, label: 'Coach' },
            { id: 'profile', icon: User, label: 'Profile' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all ${
                activeTab === tab.id 
                  ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/30'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Upload Modal */}
      <Dialog open={uploadModalOpen} onOpenChange={setUploadModalOpen}>
        <DialogContent className="max-w-md w-[calc(100vw-2rem)] mx-auto bg-gray-800 border-gray-600">
          <DialogHeader>
            <DialogTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Upload Video
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Tell us what trick you're working on
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="trick-search" className="text-gray-200">What trick are you practicing?</Label>
              <Input
                id="trick-search"
                value={selectedTrick}
                onChange={(e) => setSelectedTrick(e.target.value)}
                placeholder="Start typing a trick name..."
                className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="upload-notes" className="text-gray-200">Any notes you want to add?</Label>
              <Textarea
                id="upload-notes"
                value={uploadNotes}
                onChange={(e) => setUploadNotes(e.target.value)}
                placeholder="I keep landing with one foot off the board..."
                className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 min-h-20"
              />
            </div>

            <div className="p-4 bg-gray-700/30 rounded-xl border border-gray-600/30">
              <h4 className="text-sm font-medium text-white mb-2">Video Requirements</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Maximum 10 seconds long</li>
                <li>• Supported formats: MP4, MOV, AVI, WMV</li>
                <li>• Works with iOS, Android, macOS, and Windows</li>
              </ul>
            </div>

            <div className="space-y-3">
              <input
                type="file"
                accept="video/*"
                className="hidden"
                id="video-upload"
              />
              <Label htmlFor="video-upload">
                <div className="w-full h-12 border-2 border-dashed border-gray-600 rounded-xl flex items-center justify-center cursor-pointer hover:border-gray-500 hover:bg-gray-700/30 transition-all">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Upload className="w-5 h-5" />
                    <span>Select Video File</span>
                  </div>
                </div>
              </Label>
            </div>

            <div className="flex space-x-3">
              <Button 
                onClick={() => setUploadModalOpen(false)}
                variant="outline"
                className="flex-1 bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-600/50"
              >
                Cancel
              </Button>
              <Button 
                onClick={() => setUploadModalOpen(false)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Upload Video
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}