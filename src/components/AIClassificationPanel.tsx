import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, MapPin, Waves, TrendingUp } from 'lucide-react';
import { mlMetadata } from '@/data/mockData';

const AIClassificationPanel = () => {
  return (
    <Card className="p-6 border-2 border-primary/20">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-primary/10 to-social/10 rounded-lg">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">AI Context Detection</h3>
            <p className="text-sm text-muted-foreground">Real-time environmental classification</p>
          </div>
        </div>

        {/* Classification Process */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-nature-light/50">
            <Waves className="w-5 h-5 text-nature mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-sm">Audio Pattern Analysis</span>
                <Badge variant="outline" className="text-xs">87% confidence</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                MFCC features → Conversation detected (3 voices)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-social-light/50">
            <MapPin className="w-5 h-5 text-social mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-sm">GPS Location</span>
                <Badge variant="outline" className="text-xs">94% confidence</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                48.7758°N, 9.1829°E → Park boundary (nature area)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-focus-light/50">
            <TrendingUp className="w-5 h-5 text-focus mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-sm">Combined Context</span>
                <Badge variant="outline" className="text-xs bg-primary text-primary-foreground">Nature + Social ✓</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Temporal patterns analyzed: lunch hour activity spike
              </p>
            </div>
          </div>
        </div>

        {/* ML Metadata */}
        <div className="pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-muted-foreground">Model Version</p>
              <p className="font-mono font-medium">{mlMetadata.modelVersion}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Samples Today</p>
              <p className="font-mono font-medium">{mlMetadata.totalSamplesAnalyzed}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Accuracy</p>
              <p className="font-mono font-medium">{(mlMetadata.classificationAccuracy * 100).toFixed(0)}%</p>
            </div>
            <div>
              <p className="text-muted-foreground">Processing Time</p>
              <p className="font-mono font-medium">{mlMetadata.processingTime}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AIClassificationPanel;
