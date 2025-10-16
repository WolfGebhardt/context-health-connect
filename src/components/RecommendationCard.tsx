import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, TrendingUp } from 'lucide-react';
import FeedbackButtons from '@/components/FeedbackButtons';

const RecommendationCard = () => {
  return (
    <Card className="p-6 bg-gradient-hero text-white border-0 shadow-2xl shadow-nature/20 hover:shadow-3xl hover:scale-[1.02] transition-all duration-300">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg">Tomorrow's Recommendation</h3>
          </div>
          <FeedbackButtons itemId="tomorrow-rec" itemType="recommendation" compact />
        </div>
        <p className="text-white/95 leading-relaxed">
          Add 20 minutes of nature exposure to reach your optimal target: <strong className="text-white font-bold">20 minutes per day OR 120 minutes per week</strong> for maximum mood and stress benefits.
        </p>
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 space-y-3 border border-white/20">
          <div className="flex items-center gap-3 text-sm text-white/95">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">Rosenstein Park - 5 min walk</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-white/95">
            <Clock className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">Best time: 3:00 PM (ideal lighting)</span>
          </div>
        </div>
        <Button 
          className="w-full bg-white text-nature hover:bg-white/95 font-bold py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
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
