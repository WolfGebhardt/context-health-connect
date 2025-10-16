import { HealthInsight } from '@/types/environmental';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, AlertCircle, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';

interface InsightsPanelProps {
  insights: HealthInsight[];
}

const InsightsPanel = ({ insights }: InsightsPanelProps) => {
  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'positive':
        return <CheckCircle className="w-5 h-5 text-nature" />;
      case 'negative':
        return <AlertCircle className="w-5 h-5 text-noise" />;
      default:
        return <TrendingUp className="w-5 h-5 text-social" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-6 h-6 text-social" />
        <h2 className="text-2xl font-bold text-foreground">Health Insights</h2>
      </div>
      <div className="grid gap-4">
        {insights.map((insight, index) => (
          <Card
            key={insight.id}
            className="p-4 hover:shadow-lg transition-shadow animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-3">
              <div className="mt-1">{getImpactIcon(insight.impact)}</div>
              <div className="flex-1 space-y-2">
                <h3 className="font-semibold text-foreground">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-foreground flex items-start gap-2">
                    <span className="text-social">→</span>
                    {insight.recommendation}
                  </p>
                </div>
                <div className="flex gap-2">
                  {insight.researchBacked && (
                    <Badge variant="outline" className="text-xs">
                      Research-backed
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs gap-1 bg-gradient-to-r from-primary/10 to-social/10">
                    <Sparkles className="w-3 h-3" />
                    AI Analysis
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InsightsPanel;
