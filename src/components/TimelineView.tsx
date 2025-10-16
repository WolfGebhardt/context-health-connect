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
      nature: 'bg-nature-light border-nature',
      social: 'bg-social-light border-social',
      focus: 'bg-focus-light border-focus',
      noise: 'bg-noise-light border-noise',
      indoor: 'bg-indoor-light border-indoor',
    };
    return colors[context];
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-foreground">Today's Journey</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
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
                )} ring-4 ring-background`}
              />
              <Card className={`p-4 border-l-4 ${getContextLightColor(segment.context)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">
                        {segment.startTime} - {segment.endTime}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({segment.duration}min)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{segment.location}</span>
                    </div>
                  </div>
                  {segment.audioLevel && (
                    <div className="flex items-center gap-1 text-xs bg-card px-2 py-1 rounded-full">
                      <Volume2 className="w-3 h-3" />
                      <span>{segment.audioLevel}dB</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-foreground mb-2">{segment.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {segment.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
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
                  <div className="mt-3 pt-3 border-t border-border">
                    <div className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-nature mt-0.5" />
                      <p className="text-sm text-foreground font-medium">{segment.insights}</p>
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
