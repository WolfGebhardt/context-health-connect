export type EnvironmentalContext = 'nature' | 'social' | 'focus' | 'noise' | 'indoor';

export interface TimelineSegment {
  id: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  context: EnvironmentalContext;
  location: string;
  description: string;
  tags: string[];
  audioLevel?: number; // decibels
  insights?: string;
  aiConfidence?: number; // 0-1 confidence score
}

export interface MLMetadata {
  totalSamplesAnalyzed: number;
  classificationAccuracy: number;
  processingTime: string;
  modelVersion: string;
  featuresUsed: string[];
}

export interface DailyStats {
  date: string;
  score: number;
  breakdown: {
    nature: number;
    social: number;
    focus: number;
    noise: number;
    indoor: number;
  };
  totalMinutes: number;
}

export interface HealthInsight {
  id: string;
  type: EnvironmentalContext;
  title: string;
  description: string;
  recommendation: string;
  researchBacked: boolean;
  impact: 'positive' | 'neutral' | 'negative';
}
