import { TimelineSegment, EnvironmentalContext } from '@/types/environmental';
import { Card } from '@/components/ui/card';
import { Activity, MapPin, Volume2 } from 'lucide-react';
import AIConfidenceBadge from './AIConfidenceBadge';

interface TimelineViewProps {
  segments: TimelineSegment[];
}

const TimelineView = ({ segments }: TimelineViewProps) => {
  const getContextColor = (context: EnvironmentalContext) => {
    const colors = {
      nature: 'bg-nature',
      social: 'bg-social',
      focus: 'bg-focus',
      noise: 'bg-noise',
      indoor: 'bg-indoor',
    };
    return colors[context];
  };

  const getContextLightColor = (context: EnvironmentalContext) => {
    const colors = {
      nature: 'bg-nature-light dark:bg-nature/20 border-nature dark:border-nature/60',
      social: 'bg-social-light dark:bg-social/20 border-social dark:border-social/60',
      focus: 'bg-focus-light dark:bg-focus/20 border-focus dark:border-focus/60',
      noise: 'bg-noise-light dark:bg-noise/20 border-noise dark:border-noise/60',
      indoor: 'bg-indoor-light dark:bg-indoor/20 border-indoor dark:border-indoor/60',
    };
    return colors[context];
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Today's Journey</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border dark:bg-border/60" />
        <div className="space-y-6">
          {segments.map((segment, index) => (
            <div
              key={segment.id}
              className="relative pl-12 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute left-2 top-2 w-4 h-4 rounded-full ${getContextColor(
                  segment.context
                )} ring-4 ring-background shadow-lg`}
                style={{ filter: 'brightness(1.1)' }}
              />
              <Card className={`p-5 border-l-4 ${getContextLightColor(segment.context)} hover:shadow-lg transition-shadow`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-foreground text-base">
                        {segment.startTime} - {segment.endTime}
                      </span>
                      <span className="text-xs font-semibold text-foreground/70 dark:text-foreground/80 bg-muted/50 dark:bg-muted/30 px-2 py-1 rounded-full">
                        ({segment.duration}min)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 dark:text-foreground/90 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{segment.location}</span>
                    </div>
                  </div>
                  {segment.audioLevel && (
                    <div className="flex items-center gap-1 text-xs font-semibold bg-muted/60 dark:bg-muted/40 text-foreground px-3 py-1.5 rounded-full border border-border/50">
                      <Volume2 className="w-3 h-3" />
                      <span>{segment.audioLevel}dB</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-foreground/90 dark:text-foreground/95 mb-3 font-medium leading-relaxed">{segment.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {segment.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-muted/70 dark:bg-muted/50 rounded-full text-foreground/80 dark:text-foreground/90 font-medium border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                  {segment.aiConfidence && (
                    <AIConfidenceBadge 
                      confidence={segment.aiConfidence} 
                      context={segment.context}
                    />
                  )}
                </div>
                {segment.insights && (
                  <div className="mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-nature dark:text-nature/90 mt-0.5" />
                      <p className="text-sm text-foreground dark:text-foreground/95 font-semibold">{segment.insights}</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineView;
