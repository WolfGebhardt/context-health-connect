import { useState } from 'react';
import ScoreRing from '@/components/ScoreRing';
import TimelineView from '@/components/TimelineView';
import InsightsPanel from '@/components/InsightsPanel';
import StatsBreakdown from '@/components/StatsBreakdown';
import RecommendationCard from '@/components/RecommendationCard';
import AIClassificationPanel from '@/components/AIClassificationPanel';
import { Button } from '@/components/ui/button';
import { Calendar, Activity, TrendingUp } from 'lucide-react';
import { mockTimelineData, mockDailyStats, mockHealthInsights } from '@/data/mockData';

const Index = () => {
  const [activeView, setActiveView] = useState<'overview' | 'timeline' | 'insights'>('overview');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border backdrop-blur-sm bg-card/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">ContextHealth</h1>
              <p className="text-sm text-muted-foreground">Your environment. Your health. Finally connected.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Thursday, Oct 16, 2025</span>
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
                <RecommendationCard />
              </div>
              <div>
                <InsightsPanel insights={mockHealthInsights.slice(0, 3)} />
              </div>
            </div>
          </div>
        )}

        {activeView === 'timeline' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <TimelineView segments={mockTimelineData} />
          </div>
        )}

        {activeView === 'insights' && (
          <div className="animate-fade-in max-w-4xl mx-auto">
            <InsightsPanel insights={mockHealthInsights} />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
