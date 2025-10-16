import { DailyStats } from '@/types/environmental';
import { Card } from '@/components/ui/card';

interface StatsBreakdownProps {
  stats: DailyStats;
}

const StatsBreakdown = ({ stats }: StatsBreakdownProps) => {
  const contextData = [
    { key: 'nature', label: 'Nature', color: 'bg-nature', percentage: stats.breakdown.nature },
    { key: 'social', label: 'Social', color: 'bg-social', percentage: stats.breakdown.social },
    { key: 'focus', label: 'Focus', color: 'bg-focus', percentage: stats.breakdown.focus },
    { key: 'noise', label: 'Noise', color: 'bg-noise', percentage: stats.breakdown.noise },
    { key: 'indoor', label: 'Indoor/Alone', color: 'bg-indoor', percentage: stats.breakdown.indoor },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-accent/10 border-2 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-foreground mb-6">Environmental Breakdown</h3>
      <div className="space-y-4">
        {contextData.map((item, index) => (
          <div key={item.key} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-foreground font-medium">{item.label}</span>
              <span className="text-muted-foreground font-semibold">{item.percentage}%</span>
            </div>
            <div className="h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out origin-left shadow-sm`}
                style={{ 
                  width: `${item.percentage}%`,
                  animationDelay: `${index * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total tracked time</span>
          <span className="font-bold text-foreground text-base">
            {Math.floor(stats.totalMinutes / 60)}h {stats.totalMinutes % 60}m
          </span>
        </div>
      </div>
    </Card>
  );
};

export default StatsBreakdown;
