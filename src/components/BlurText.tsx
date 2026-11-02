import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 100,
  animateBy = 'words',
  direction = 'bottom',
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  const yOffset = direction === 'bottom' ? 50 : -50;

  return (
    <h1 ref={ref} className={`inline-block ${className}`}>
      {elements.map((el, i) => (
        <motion.span
          key={i}
          initial={{
            filter: 'blur(10px)',
            opacity: 0,
            y: yOffset,
          }}
          animate={
            inView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [yOffset, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            delay: (delay + i * 150) / 1000,
            ease: 'easeOut',
          }}
          className="inline-block"
          style={{ marginRight: animateBy === 'words' ? '0.25em' : '0.02em' }}
        >
          {el}
        </motion.span>
      ))}
    </h1>
  );
};
