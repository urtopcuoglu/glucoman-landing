import { motion } from 'framer-motion';

interface TimelineStepProps {
  step: number;
  title: string;
  period: string;
  description: string;
  isLast?: boolean;
  index: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ step, title, period, description, isLast = false, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex flex-col md:flex-row gap-6 md:gap-8"
    >
      {/* Vertical connector line for mobile */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-transparent md:hidden" />
      )}

      {/* Step number bubble */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-lg shadow-lg shadow-primary/20 z-10">
          {step}
        </div>
        {!isLast && (
          <div className="hidden md:block w-0.5 flex-1 mt-3 bg-gradient-to-b from-primary/30 to-transparent min-h-[60px]" />
        )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-6 border border-primary/8 flex-1 mb-8 md:mb-10">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <h3 className="font-display font-bold text-primary text-lg">{title}</h3>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold font-display">
            {period}
          </span>
        </div>
        <p className="text-[#6B8A92] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineStep;