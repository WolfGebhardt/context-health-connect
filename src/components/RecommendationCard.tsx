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
          Add 20 minutes of nature exposure to reach your optimal target: <strong>20 minutes per day OR 120 minutes per week</strong> for maximum mood and stress benefits.
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
          onClick={() => {
            const event = {
              title: 'Park Walk - Nature Time',
              description: '20 minutes of nature exposure at Rosenstein Park',
              location: 'Rosenstein Park',
              startTime: new Date(new Date().setHours(15, 0, 0, 0)),
              endTime: new Date(new Date().setHours(15, 20, 0, 0))
            };
            
            const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.startTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTEND:${event.endTime.toISOString().replace(/[-:]/g, '').split('.')[0]}Z
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
            
            const blob = new Blob([icsContent], { type: 'text/calendar' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'park-walk.ics';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
          }}
        >
          Schedule Park Walk
        </Button>
      </div>
    </Card>
  );
};

export default RecommendationCard;
