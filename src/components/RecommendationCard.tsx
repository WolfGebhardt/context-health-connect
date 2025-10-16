import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, TrendingUp } from 'lucide-react';

const RecommendationCard = () => {
  return (
    <Card className="p-6 bg-gradient-hero text-white border-0">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-semibold text-lg">Tomorrow's Recommendation</h3>
        </div>
        <p className="text-white/90">
          Add 20 minutes of nature exposure to reach your optimal 60-minute daily target for maximum mood and stress benefits.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm text-white/90">
            <MapPin className="w-4 h-4" />
            <span>Rosenstein Park - 5 min walk</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/90">
            <Clock className="w-4 h-4" />
            <span>Best time: 3:00 PM (ideal lighting)</span>
          </div>
        </div>
        <Button 
          className="w-full bg-white text-nature hover:bg-white/90 font-semibold"
        >
          Schedule Park Walk
        </Button>
      </div>
    </Card>
  );
};

export default RecommendationCard;
