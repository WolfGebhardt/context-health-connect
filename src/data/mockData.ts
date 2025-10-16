import { TimelineSegment, DailyStats, HealthInsight } from '@/types/environmental';

export const mockTimelineData: TimelineSegment[] = [
  {
    id: '1',
    startTime: '08:00',
    endTime: '09:15',
    duration: 75,
    context: 'indoor',
    location: 'Home',
    description: 'Quiet indoor environment',
    tags: ['Quiet', 'Indoor', 'Alone'],
    audioLevel: 35,
    insights: '2 hours in quiet spaces - good for focus'
  },
  {
    id: '2',
    startTime: '09:30',
    endTime: '10:00',
    duration: 30,
    context: 'noise',
    location: 'Commute',
    description: 'High urban noise exposure',
    tags: ['Urban', 'Transit', 'High Noise'],
    audioLevel: 75,
    insights: '30min noise exposure (>70dB)'
  },
  {
    id: '3',
    startTime: '10:15',
    endTime: '12:15',
    duration: 120,
    context: 'focus',
    location: 'Office',
    description: 'Focused work environment',
    tags: ['Indoor', 'Quiet', 'Work'],
    audioLevel: 45,
  },
  {
    id: '4',
    startTime: '12:30',
    endTime: '13:15',
    duration: 45,
    context: 'nature',
    location: 'Stadtgarten Park',
    description: 'Nature + Social interaction',
    tags: ['Nature', 'Social', 'Outdoor'],
    audioLevel: 55,
    insights: '✓ 45min nature exposure boosts mood by ~20%'
  },
  {
    id: '5',
    startTime: '13:30',
    endTime: '16:30',
    duration: 180,
    context: 'social',
    location: 'Café Meeting',
    description: 'Social environment with conversations',
    tags: ['Social', 'Indoor', 'Conversation'],
    audioLevel: 60,
    insights: '3 social interactions today - supports wellbeing'
  },
  {
    id: '6',
    startTime: '16:45',
    endTime: '17:30',
    duration: 45,
    context: 'nature',
    location: 'Rosenstein Park',
    description: 'Evening nature walk',
    tags: ['Nature', 'Outdoor', 'Walking'],
    audioLevel: 50,
  },
  {
    id: '7',
    startTime: '17:45',
    endTime: '19:00',
    duration: 75,
    context: 'indoor',
    location: 'Home',
    description: 'Quiet evening at home',
    tags: ['Indoor', 'Quiet', 'Relaxation'],
    audioLevel: 38,
  }
];

export const mockDailyStats: DailyStats = {
  date: '2025-10-16',
  score: 68,
  breakdown: {
    nature: 15, // 90 minutes (45 + 45)
    social: 30, // 180 minutes
    focus: 20, // 120 minutes
    noise: 5, // 30 minutes
    indoor: 30, // 150 minutes (75 + 75)
  },
  totalMinutes: 600 // 10 hours tracked
};

export const mockHealthInsights: HealthInsight[] = [
  {
    id: '1',
    type: 'nature',
    title: 'Nature Exposure: 90 minutes today',
    description: 'Research shows that 60+ minutes of daily nature exposure reduces stress by 28% and improves cognitive function.',
    recommendation: 'Great job! You exceeded the recommended daily nature time.',
    researchBacked: true,
    impact: 'positive'
  },
  {
    id: '2',
    type: 'noise',
    title: 'High Noise Alert',
    description: 'You were exposed to noise levels above 70dB for 30 minutes during your commute.',
    recommendation: 'Consider using noise-canceling headphones or finding quieter routes. Prolonged exposure to high noise can increase stress hormones.',
    researchBacked: true,
    impact: 'negative'
  },
  {
    id: '3',
    type: 'social',
    title: 'Social Interactions: 3 hours',
    description: 'Social connections are vital for mental health. Studies show regular social interaction reduces depression risk by 50%.',
    recommendation: 'Excellent social engagement today!',
    researchBacked: true,
    impact: 'positive'
  },
  {
    id: '4',
    type: 'focus',
    title: 'Focused Time: 2 hours',
    description: 'You had quality focused time in quiet environments, ideal for productivity and deep work.',
    recommendation: 'Tomorrow: Try to maintain at least 2 hours of uninterrupted focused time.',
    researchBacked: true,
    impact: 'positive'
  }
];
