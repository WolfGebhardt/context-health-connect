import { HealthInsight } from '@/types/environmental';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, AlertCircle, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import FeedbackButtons from '@/components/FeedbackButtons';

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
        <div className="p-2 bg-gradient-to-br from-social/20 to-nature/20 rounded-lg">
          <Lightbulb className="w-6 h-6 text-social" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">Health Insights</h2>
      </div>
      <div className="grid gap-4">
        {insights.map((insight, index) => (
          <Card
            key={insight.id}
            className="p-5 bg-gradient-to-br from-card to-accent/10 border-2 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
                {getImpactIcon(insight.impact)}
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-foreground text-lg">{insight.title}</h3>
                  <FeedbackButtons itemId={insight.id} itemType="insight" compact />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
                <div className="pt-3 border-t border-border/50 bg-muted/20 -mx-1 px-3 py-2 rounded-lg">
                  <p className="text-sm font-semibold text-foreground flex items-start gap-2">
                    <span className="text-social text-base">→</span>
                    {insight.recommendation}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {insight.researchBacked && (
                    <Badge variant="outline" className="text-xs border-nature/30 bg-nature/5">
                      Research-backed
                    </Badge>
                  )}
                  <Badge variant="outline" className="text-xs gap-1 bg-gradient-to-r from-primary/10 to-social/10 border-primary/30">
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
