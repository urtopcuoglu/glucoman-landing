import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, numericTarget, prefix = '', suffix = '', index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current || numericTarget === undefined) return;
    hasAnimated.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, numericTarget]);

  const displayValue = numericTarget !== undefined
    ? `${prefix}${displayed.toLocaleString('tr-TR')}${suffix}`
    : value;

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className="text-4xl md:text-5xl font-display font-extrabold text-white mb-2">
        {displayValue}
      </div>
      <div className="text-primary-light text-sm md:text-base font-body leading-snug max-w-[160px] mx-auto" style={{ color: '#9DC4CE' }}>
        {label}
      </div>
    </div>
  );
};

export default StatCard;