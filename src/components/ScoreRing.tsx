import { useEffect, useState } from 'react';

interface ScoreRingProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const ScoreRing = ({ score, size = 'md', showLabel = true }: ScoreRingProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  const sizes = {
    sm: { ring: 80, stroke: 8, text: 'text-2xl' },
    md: { ring: 120, stroke: 10, text: 'text-4xl' },
    lg: { ring: 160, stroke: 12, text: 'text-5xl' }
  };

  const config = sizes[size];
  const radius = (config.ring - config.stroke) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedScore / 100) * circumference;

  useEffect(() => {
    // Simulate AI analysis
    const analysisTimer = setTimeout(() => {
      setIsAnalyzing(false);
    }, 1500);

    const scoreTimer = setTimeout(() => {
      setAnimatedScore(score);
    }, 1600);
    
    return () => {
      clearTimeout(analysisTimer);
      clearTimeout(scoreTimer);
    };
  }, [score]);

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'stroke-nature';
    if (score >= 50) return 'stroke-social';
    return 'stroke-noise';
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: config.ring, height: config.ring }}>
        <svg
          className="transform -rotate-90"
          width={config.ring}
          height={config.ring}
        >
          <circle
            cx={config.ring / 2}
            cy={config.ring / 2}
            r={radius}
            className="stroke-muted/40 dark:stroke-muted/50"
            strokeWidth={config.stroke}
            fill="none"
          />
          <circle
            cx={config.ring / 2}
            cy={config.ring / 2}
            r={radius}
            className={`${getScoreColor(score)} transition-all duration-1000 ease-out`}
            strokeWidth={config.stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 6px currentColor) brightness(1.1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${config.text} font-bold text-foreground`}>
            {Math.round(animatedScore)}
          </span>
        </div>
      </div>
      {showLabel && (
        <div className="text-center">
          <p className="text-sm text-foreground font-semibold">
            {isAnalyzing ? 'Analyzing environmental data...' : 'Environmental Health Score'}
          </p>
          <p className="text-xs text-foreground/70 dark:text-foreground/80 mt-1 font-medium">
            {isAnalyzing ? 'Processing 847 samples with ML' : 'AI-powered analysis complete'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScoreRing;
