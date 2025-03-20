
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScrollObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'from-bottom' | 'from-left' | 'from-right';
  threshold?: number;
  delay?: number;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({
  children,
  className,
  animation = 'from-bottom',
  threshold = 0.1,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-visible');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '20px',
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={cn('animate-on-scroll', animation, className)}
    >
      {children}
    </div>
  );
};

export default ScrollObserver;
