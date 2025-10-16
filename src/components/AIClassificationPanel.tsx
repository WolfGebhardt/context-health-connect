import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, MapPin, Waves, TrendingUp } from 'lucide-react';
import { mlMetadata } from '@/data/mockData';

const AIClassificationPanel = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-card via-card to-primary/5 border-2 hover:shadow-lg transition-all duration-300">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-primary/20 to-social/20 rounded-xl shadow-sm">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Context Detection</h3>
            <p className="text-sm text-muted-foreground">Real-time environmental classification</p>
          </div>
        </div>

        {/* Classification Process */}
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-nature-light/50 dark:bg-nature/10 border border-nature/20 hover:border-nature/40 transition-colors">
            <Waves className="w-5 h-5 text-nature mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-semibold text-sm">Audio Pattern Analysis</span>
                <Badge variant="outline" className="text-xs bg-nature/10 border-nature/30">87% confidence</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                MFCC features → Conversation detected (3 voices)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-social-light/50 dark:bg-social/10 border border-social/20 hover:border-social/40 transition-colors">
            <MapPin className="w-5 h-5 text-social mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-semibold text-sm">GPS Location</span>
                <Badge variant="outline" className="text-xs bg-social/10 border-social/30">94% confidence</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                48.7758°N, 9.1829°E → Park boundary (nature area)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-focus-light/50 dark:bg-focus/10 border border-focus/20 hover:border-focus/40 transition-colors">
            <TrendingUp className="w-5 h-5 text-focus mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-semibold text-sm">Combined Context</span>
                <Badge className="text-xs bg-primary text-primary-foreground">Nature + Social ✓</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Temporal patterns analyzed: lunch hour activity spike
              </p>
            </div>
          </div>
        </div>

        {/* ML Metadata */}
        <div className="pt-4 border-t border-border/50">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-1">Model Version</p>
              <p className="font-mono font-semibold text-foreground">{mlMetadata.modelVersion}</p>
            </div>
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-1">Samples Today</p>
              <p className="font-mono font-semibold text-foreground">{mlMetadata.totalSamplesAnalyzed}</p>
            </div>
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-1">Accuracy</p>
              <p className="font-mono font-semibold text-foreground">{(mlMetadata.classificationAccuracy * 100).toFixed(0)}%</p>
            </div>
            <div className="p-2 rounded-lg bg-muted/30">
              <p className="text-muted-foreground mb-1">Processing Time</p>
              <p className="font-mono font-semibold text-foreground">{mlMetadata.processingTime}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AIClassificationPanel;
