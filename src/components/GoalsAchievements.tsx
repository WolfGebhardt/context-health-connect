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
      bgColor: 'bg-nature'
    },
    { 
      id: 'social', 
      label: 'Social', 
      current: 45, 
      target: 60, 
      icon: Users, 
      color: 'text-social',
      bgColor: 'bg-social'
    },
    { 
      id: 'focus', 
      label: 'Focus', 
      current: 120, 
      target: 150, 
      icon: Focus, 
      color: 'text-focus',
      bgColor: 'bg-focus'
    },
    { 
      id: 'sleep', 
      label: 'Sleep', 
      current: 420, 
      target: 480, 
      icon: Moon, 
      color: 'text-muted-foreground',
      bgColor: 'bg-muted'
    },
    { 
      id: 'exercise', 
      label: 'Exercise', 
      current: 30, 
      target: 30, 
      icon: Dumbbell, 
      color: 'text-primary',
      bgColor: 'bg-primary'
    }
  ];

  const getProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-accent/20 border-2">
      <h2 className="text-2xl font-bold mb-8 text-foreground">Goals & Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {goals.map((goal) => {
          const progress = getProgress(goal.current, goal.target);
          const Icon = goal.icon;
          const circumference = 2 * Math.PI * 54;
          const strokeDashoffset = circumference - (progress / 100) * circumference;
          const isComplete = progress >= 100;

          return (
            <div 
              key={goal.id} 
              className="flex flex-col items-center gap-4 animate-fade-in hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-36 h-36">
                {/* Outer glow effect */}
                <div className={`absolute inset-0 rounded-full ${goal.bgColor} opacity-30 dark:opacity-50 blur-2xl`} />
                
                {/* Background circle */}
                <svg className="w-full h-full transform -rotate-90 drop-shadow-2xl">
                  <circle
                    cx="72"
                    cy="72"
                    r="54"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-muted/20 dark:text-muted/30"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="54"
                    stroke="currentColor"
                    strokeWidth="14"
                    fill="none"
                    className={`${goal.color} transition-all duration-1000 ease-out ${isComplete ? 'animate-pulse-slow' : ''}`}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ 
                      filter: 'drop-shadow(0 0 8px currentColor) brightness(1.2)',
                    }}
                  />
                </svg>
                
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/95 dark:bg-card/95 rounded-full m-3 backdrop-blur-md border-2 border-border/50 dark:border-border/70">
                  <span className="text-3xl font-bold text-foreground mb-1">
                    {goal.current}
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold">min</span>
                  <div className="mt-2 px-2 py-1 bg-muted/70 dark:bg-muted/50 rounded-full">
                    <span className="text-[10px] text-foreground font-medium">
                      Goal: {goal.target}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-1">
                <div className="flex items-center gap-2 justify-center">
                  <Icon className={`w-4 h-4 ${goal.color}`} />
                  <p className="text-sm font-semibold text-foreground">{goal.label}</p>
                </div>
                <p className="text-xs text-muted-foreground font-medium">
                  {Math.round(progress)}% complete
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
