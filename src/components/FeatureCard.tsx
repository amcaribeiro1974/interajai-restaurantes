
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollObserver from './ScrollObserver';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  delay = 0,
}) => {
  return (
    <ScrollObserver 
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300 hover:shadow-xl',
        className
      )}
      delay={delay}
    >
      <div className="space-y-4">
        <div className={cn(
          'rounded-full bg-interaj-100 p-3 w-12 h-12 flex items-center justify-center text-interaj-700',
          iconClassName
        )}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-semibold text-interaj-800 font-display">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </ScrollObserver>
  );
};

export default FeatureCard;
