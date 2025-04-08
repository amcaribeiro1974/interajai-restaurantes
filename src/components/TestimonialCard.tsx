
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollObserver from './ScrollObserver';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  company?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  role,
  company,
  className,
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
        <p className="text-lg italic text-interaj-800">{text}</p>
        <div className="pt-2 border-t border-interaj-100">
          <p className="font-semibold text-interaj-900">{author}</p>
          <p className="text-sm text-muted-foreground">{role}{company ? `, ${company}` : ''}</p>
        </div>
      </div>
    </ScrollObserver>
  );
};

export default TestimonialCard;
