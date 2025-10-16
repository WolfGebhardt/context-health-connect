import { Card } from '@/components/ui/card';
import { Leaf, Users, Focus, Moon, Dumbbell } from 'lucide-react';

interface Goal {
  id: string;
  label: string;
  current: number;
  target: number;
  icon: React.ElementType;
  color: string;
}

const GoalsAchievements = () => {
  const goals: Goal[] = [
    { id: 'nature', label: 'Nature Time', current: 85, target: 120, icon: Leaf, color: 'text-nature' },
    { id: 'social', label: 'Social', current: 45, target: 60, icon: Users, color: 'text-social' },
    { id: 'focus', label: 'Focus', current: 120, target: 150, icon: Focus, color: 'text-focus' },
    { id: 'sleep', label: 'Sleep', current: 420, target: 480, icon: Moon, color: 'text-muted-foreground' },
    { id: 'exercise', label: 'Exercise', current: 30, target: 30, icon: Dumbbell, color: 'text-primary' }
  ];

  const getProgress = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Goals & Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {goals.map((goal) => {
          const progress = getProgress(goal.current, goal.target);
          const Icon = goal.icon;
          const circumference = 2 * Math.PI * 45;
          const strokeDashoffset = circumference - (progress / 100) * circumference;

          return (
            <div key={goal.id} className="flex flex-col items-center gap-3">
              <div className="relative w-28 h-28">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted/20"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className={goal.color}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Icon className={`w-6 h-6 mb-1 ${goal.color}`} />
                  <span className="text-xl font-bold">{goal.target}</span>
                  <span className="text-xs text-muted-foreground">min/week</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">{goal.label}</p>
                <p className="text-xs text-muted-foreground">
                  {goal.current}/{goal.target} min
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
