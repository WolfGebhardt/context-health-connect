import { Card } from '@/components/ui/card';
import { Leaf, Users, Focus, Moon, Dumbbell } from 'lucide-react';

interface Goal {
  id: string;
  label: string;
  current: number;
  target: number;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  weeklyData: number[]; // Daily minutes for each day of the week (Mon-Sun)
}

const GoalsAchievements = () => {
  const goals: Goal[] = [
    { 
      id: 'nature', 
      label: 'Nature Time', 
      current: 85, 
      target: 120, 
      icon: Leaf, 
      color: 'text-nature',
      bgColor: 'bg-nature',
      weeklyData: [20, 10, 8, 12, 15, 10, 10] // Mon-Sun
    },
    { 
      id: 'social', 
      label: 'Social', 
      current: 45, 
      target: 60, 
      icon: Users, 
      color: 'text-social',
      bgColor: 'bg-social',
      weeklyData: [8, 5, 4, 10, 8, 5, 5]
    },
    { 
      id: 'focus', 
      label: 'Focus', 
      current: 120, 
      target: 150, 
      icon: Focus, 
      color: 'text-focus',
      bgColor: 'bg-focus',
      weeklyData: [25, 15, 18, 20, 22, 10, 10]
    },
    { 
      id: 'sleep', 
      label: 'Sleep', 
      current: 420, 
      target: 480, 
      icon: Moon, 
      color: 'text-muted-foreground',
      bgColor: 'bg-muted',
      weeklyData: [60, 58, 55, 62, 65, 60, 60]
    },
    { 
      id: 'exercise', 
      label: 'Exercise', 
      current: 30, 
      target: 30, 
      icon: Dumbbell, 
      color: 'text-primary',
      bgColor: 'bg-primary',
      weeklyData: [5, 3, 2, 8, 5, 4, 3]
    }
  ];

  const getProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-accent/20 border-2">
      <h2 className="text-2xl font-bold mb-8 text-foreground">Goals & Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {goals.map((goal) => {
          const progress = getProgress(goal.current, goal.target);
          const Icon = goal.icon;
          const radius = 56; // Adjusted for better spacing
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (progress / 100) * circumference;
          const isComplete = progress >= 100;
          const maxWeeklyValue = Math.max(...goal.weeklyData);
          const dailyTarget = goal.target / 7;

          return (
            <div 
              key={goal.id} 
              className="flex flex-col items-center gap-5 animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              {/* Circular Progress */}
              <div className="relative w-40 h-40">
                {/* Outer glow effect */}
                <div className={`absolute inset-0 rounded-full ${goal.bgColor} opacity-30 dark:opacity-50 blur-2xl`} />
                
                {/* SVG Progress Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="14"
                    fill="none"
                    className="text-muted/20 dark:text-muted/30"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="14"
                    fill="none"
                    className={`${goal.color} transition-all duration-1000 ease-out ${isComplete ? 'animate-pulse-slow' : ''}`}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ 
                      filter: 'drop-shadow(0 0 10px currentColor) brightness(1.2)',
                    }}
                  />
                </svg>
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="bg-card/95 dark:bg-card/95 rounded-full backdrop-blur-md border-2 border-border/50 dark:border-border/70 p-6 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-foreground mb-0.5">
                      {goal.current}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-semibold">min</span>
                    <div className="mt-1 px-2 py-0.5 bg-muted/70 dark:bg-muted/50 rounded-full">
                      <span className="text-[9px] text-foreground font-medium">
                        Goal: {goal.target}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Goal Label */}
              <div className="text-center space-y-1">
                <div className="flex items-center gap-2 justify-center">
                  <Icon className={`w-4 h-4 ${goal.color}`} />
                  <p className="text-sm font-semibold text-foreground">{goal.label}</p>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {Math.round(progress)}% complete
                </p>
              </div>

              {/* Weekly Progress Chart */}
              <div className="w-full px-2">
                <div className="relative h-20 flex items-end justify-between gap-1 bg-muted/20 dark:bg-muted/10 rounded-lg p-2 border border-border/30">
                  {/* Grid lines */}
                  <div className="absolute inset-x-2 top-2 bottom-8 flex flex-col justify-between pointer-events-none">
                    <div className="h-px bg-border/30" />
                    <div className="h-px bg-border/30" />
                  </div>
                  
                  {/* Bars */}
                  {goal.weeklyData.map((value, idx) => {
                    const barHeight = Math.max((value / maxWeeklyValue) * 100, 8);
                    const isAboveTarget = value >= dailyTarget;
                    
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 relative z-10">
                        <div 
                          className={`w-full rounded-sm transition-all duration-500 ${
                            isAboveTarget ? goal.bgColor : 'bg-muted dark:bg-muted/60'
                          } ${isAboveTarget ? 'opacity-100' : 'opacity-50'}`}
                          style={{ 
                            height: `${barHeight}%`,
                            filter: isAboveTarget ? 'brightness(1.1)' : 'none'
                          }}
                        />
                        <span className="text-[9px] font-bold text-muted-foreground dark:text-muted-foreground/80">
                          {days[idx]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-[10px] text-center text-muted-foreground mt-1 font-medium">
                  This week's activity
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default GoalsAchievements;
