import { useState } from 'react';
import ScoreRing from '@/components/ScoreRing';
import TimelineView from '@/components/TimelineView';
import InsightsPanel from '@/components/InsightsPanel';
import StatsBreakdown from '@/components/StatsBreakdown';
import RecommendationCard from '@/components/RecommendationCard';
import AIClassificationPanel from '@/components/AIClassificationPanel';
import GoalsAchievements from '@/components/GoalsAchievements';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Calendar, Activity, TrendingUp } from 'lucide-react';
import { mockTimelineData, mockDailyStats, mockHealthInsights } from '@/data/mockData';

const Index = () => {
  const [activeView, setActiveView] = useState<'overview' | 'timeline' | 'insights'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/95 border-b border-border backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-social bg-clip-text text-transparent">BeenHealth</h1>
              <p className="text-sm text-muted-foreground font-medium">Your environment. Your health. Finally connected.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Thursday, Oct 16, 2025</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex gap-2">
          <Button
            variant={activeView === 'overview' ? 'default' : 'outline'}
            onClick={() => setActiveView('overview')}
            className="gap-2"
          >
            <Activity className="w-4 h-4" />
            Overview
          </Button>
          <Button
            variant={activeView === 'timeline' ? 'default' : 'outline'}
            onClick={() => setActiveView('timeline')}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Timeline
          </Button>
          <Button
            variant={activeView === 'insights' ? 'default' : 'outline'}
            onClick={() => setActiveView('insights')}
            className="gap-2"
          >
            <TrendingUp className="w-4 h-4" />
            Insights
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        {activeView === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Score Section */}
            <div className="flex flex-col items-center py-8">
              <ScoreRing score={mockDailyStats.score} size="lg" />
            </div>

            {/* Grid Layout */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <AIClassificationPanel />
                <StatsBreakdown stats={mockDailyStats} />
              </div>
              <div className="space-y-6">
                <InsightsPanel insights={mockHealthInsights.slice(0, 3)} />
              </div>
            </div>

            {/* Recommendation at Bottom for Demo */}
            <div className="max-w-3xl mx-auto">
              <RecommendationCard />
            </div>
          </div>
        )}

        {activeView === 'timeline' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <TimelineView segments={mockTimelineData} />
          </div>
        )}

        {activeView === 'insights' && (
          <div className="animate-fade-in space-y-6">
            <GoalsAchievements />
            <InsightsPanel insights={mockHealthInsights.slice(3)} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
