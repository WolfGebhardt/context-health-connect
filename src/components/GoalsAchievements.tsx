import { Card } from '@/components/ui/card';
import { Leaf, Users, Focus, Moon, Dumbbell } from 'lucide-react';

interface Goal {
  id: string;
  label: string;
  current: number;
  target: number;
  icon: React.ElementType;
  color: string;
  weeklyData: number[];
}

const GoalsAchievements = () => {
  const goals: Goal[] = [
    { 
      id: 'nature', 
      label: 'Nature Time', 
      current: 85, 
      target: 120, 
      icon: Leaf, 
      color: 'hsl(var(--nature))',
      weeklyData: [15, 12, 10, 8, 20, 10, 10] // Mon-Sun: Total 85 min
    },
    { 
      id: 'social', 
      label: 'Social', 
      current: 45, 
      target: 60, 
      icon: Users, 
      color: 'hsl(var(--social))',
      weeklyData: [8, 7, 5, 4, 10, 6, 5] // Mon-Sun: Total 45 min
    },
    { 
      id: 'focus', 
      label: 'Focus', 
      current: 120, 
      target: 150, 
      icon: Focus, 
      color: 'hsl(var(--focus))',
      weeklyData: [20, 18, 15, 12, 25, 15, 15] // Mon-Sun: Total 120 min, higher on weekdays
    },
    { 
      id: 'sleep', 
      label: 'Sleep', 
      current: 420, 
      target: 480, 
      icon: Moon, 
      color: 'hsl(var(--muted-foreground))',
      weeklyData: [58, 62, 55, 60, 65, 60, 60] // Mon-Sun: Total 420 min (7 hours avg)
    },
    { 
      id: 'exercise', 
      label: 'Exercise', 
      current: 30, 
      target: 30, 
      icon: Dumbbell, 
      color: 'hsl(var(--primary))',
      weeklyData: [5, 4, 3, 2, 8, 4, 4] // Mon-Sun: Total 30 min, peak on Friday
    }
  ];

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <Card className="p-8 bg-gradient-to-br from-card via-card to-accent/5 border-2 shadow-xl">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-2">Goals & Achievements</h2>
        <p className="text-sm text-muted-foreground">Track your weekly wellness progress</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          const progress = Math.min((goal.current / goal.target) * 100, 100);
          const radius = 58;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (progress / 100) * circumference;
          const maxWeeklyValue = Math.max(...goal.weeklyData);
          const dailyTarget = goal.target / 7;

          return (
            <div 
              key={goal.id} 
              className="flex flex-col items-center gap-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Circular Progress Ring */}
              <div className="relative" style={{ width: 180, height: 180 }}>
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-full blur-3xl opacity-20 dark:opacity-30"
                  style={{ backgroundColor: goal.color }}
                />
                
                {/* SVG Ring */}
                <svg 
                  width="180" 
                  height="180" 
                  viewBox="0 0 180 180"
                  className="transform -rotate-90"
                >
                  {/* Background ring */}
                  <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="16"
                    className="text-muted/20 dark:text-muted/30"
                  />
                  {/* Progress ring */}
                  <circle
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="none"
                    stroke={goal.color}
                    strokeWidth="16"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                    style={{
                      filter: `drop-shadow(0 0 8px ${goal.color})`,
                    }}
                  />
                </svg>
                
                {/* Center content with absolute positioning */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center text-center bg-card rounded-full w-28 h-28 border-2 border-border/40 shadow-lg backdrop-blur-sm">
                    <span className="text-3xl font-bold text-foreground leading-none">
                      {goal.current}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium mt-1">
                      of {goal.target} min
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Label with Icon */}
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" style={{ color: goal.color }} />
                  <h3 className="text-base font-bold text-foreground">{goal.label}</h3>
                </div>
                <div className="text-sm font-semibold text-foreground/70">
                  {Math.round(progress)}% Complete
                </div>
              </div>

              {/* Weekly Bar Chart */}
              <Card className="w-full p-4 bg-muted/30 dark:bg-muted/20 border border-border/50">
                <div className="space-y-2">
                  <div className="h-24 flex items-end justify-between gap-1.5 relative">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-1 pointer-events-none">
                      <div className="h-px bg-border/20" />
                      <div className="h-px bg-border/20" />
                      <div className="h-px bg-border/20" />
                    </div>
                    
                    {/* Bars */}
                    {goal.weeklyData.map((value, idx) => {
                      const barHeight = Math.max((value / maxWeeklyValue) * 100, 5);
                      const meetsTarget = value >= dailyTarget;
                      
                      return (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 relative">
                          <div 
                            className="w-full rounded-t-md transition-all duration-700 hover:opacity-80"
                            style={{ 
                              height: `${barHeight}%`,
                              backgroundColor: meetsTarget ? goal.color : 'hsl(var(--muted))',
                              opacity: meetsTarget ? 1 : 0.4,
                            }}
                          />
                          <span className="text-[10px] font-bold text-foreground/60">
                            {days[idx]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[10px] text-center text-muted-foreground font-medium pt-1 border-t border-border/30">
                    Weekly Activity Pattern
                  </p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default GoalsAchievements;
