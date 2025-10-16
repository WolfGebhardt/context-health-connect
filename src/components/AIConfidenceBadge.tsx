import { Badge } from '@/components/ui/badge';
import { Sparkles } from 'lucide-react';

interface AIConfidenceBadgeProps {
  confidence: number;
  context: string;
  variant?: 'default' | 'outline';
}

const AIConfidenceBadge = ({ confidence, context, variant = 'outline' }: AIConfidenceBadgeProps) => {
  return (
    <Badge variant={variant} className="gap-1 bg-gradient-to-r from-primary/10 to-social/10 border-primary/20">
      <Sparkles className="w-3 h-3" />
      AI: {context} ({(confidence * 100).toFixed(0)}%)
    </Badge>
  );
};

export default AIConfidenceBadge;
