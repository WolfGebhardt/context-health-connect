import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface FeedbackButtonsProps {
  itemId: string;
  itemType: 'recommendation' | 'insight' | 'goal';
  compact?: boolean;
}

const FeedbackButtons = ({ itemId, itemType, compact = false }: FeedbackButtonsProps) => {
  const [feedback, setFeedback] = useState<'up' | 'down' | null>(null);
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [comment, setComment] = useState('');

  const handleFeedback = (type: 'up' | 'down') => {
    setFeedback(type);
    setShowCommentDialog(true);
  };

  const submitFeedback = () => {
    // Here you would send feedback to your backend
    console.log({
      itemId,
      itemType,
      feedback,
      comment,
      timestamp: new Date().toISOString()
    });

    toast({
      title: "Feedback submitted",
      description: "Thank you! Your feedback helps us improve your experience.",
    });

    setShowCommentDialog(false);
    setComment('');
  };

  const buttonSize = compact ? "h-8 w-8" : "h-9 w-9";
  const iconSize = compact ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <>
      <div className="flex items-center gap-2 bg-background/10 backdrop-blur-sm rounded-lg p-1 border border-border">
        <Button
          variant={feedback === 'up' ? 'default' : 'secondary'}
          size="icon"
          className={buttonSize}
          onClick={() => handleFeedback('up')}
        >
          <ThumbsUp className={iconSize} />
        </Button>
        <Button
          variant={feedback === 'down' ? 'default' : 'secondary'}
          size="icon"
          className={buttonSize}
          onClick={() => handleFeedback('down')}
        >
          <ThumbsDown className={iconSize} />
        </Button>
      </div>

      <Dialog open={showCommentDialog} onOpenChange={setShowCommentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Help us improve</DialogTitle>
            <DialogDescription>
              Would you like to share more details about your feedback? (optional)
            </DialogDescription>
          </DialogHeader>
          
          <Textarea
            placeholder="Tell us what works or what could be better..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCommentDialog(false)}>
              Skip
            </Button>
            <Button onClick={submitFeedback}>
              Submit Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeedbackButtons;
