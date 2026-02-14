'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
} from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'scale-in'
  | 'slide-up';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  className,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(element);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={cn('scroll-reveal', variant, isVisible && 'is-visible', className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: AnimationVariant;
  duration?: number;
}

function extractGridClasses(childClassName?: string): {
  gridClasses: string;
  remainingClasses: string;
} {
  if (!childClassName) return { gridClasses: '', remainingClasses: '' };
  const classes = childClassName.split(' ');
  const gridCls: string[] = [];
  const rest: string[] = [];
  for (const cls of classes) {
    if (cls.includes('col-span') || cls.includes('row-span')) {
      gridCls.push(cls);
    } else {
      rest.push(cls);
    }
  }
  return { gridClasses: gridCls.join(' '), remainingClasses: rest.join(' ') };
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 100,
  variant = 'fade-up',
  duration = 600,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => {
        const childClasses = isValidElement(child)
          ? (child as ReactElement<{ className?: string }>).props.className
          : undefined;
        const { gridClasses, remainingClasses } = extractGridClasses(childClasses);

        const modifiedChild =
          isValidElement(child) && gridClasses
            ? cloneElement(child as ReactElement<{ className?: string }>, {
                className: remainingClasses,
              })
            : child;

        return (
          <div
            key={i}
            className={cn('scroll-reveal h-full', variant, isVisible && 'is-visible', gridClasses)}
            style={{
              transitionDelay: `${i * staggerDelay}ms`,
              transitionDuration: `${duration}ms`,
            }}
          >
            {modifiedChild}
          </div>
        );
      })}
    </div>
  );
}
