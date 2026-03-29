import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle, id }) => {
  const contentId = `accordion-content-${id}`;
  const headerId = `accordion-header-${id}`;

  return (
    <div className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-primary/30 shadow-sm' : 'border-primary/10'}`}>
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-bg/60 transition-colors duration-150"
      >
        <span className="font-display font-semibold text-primary text-base pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 text-accent"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 bg-white">
              <div className="h-px bg-primary/8 mb-4" />
              <p className="text-[#6B8A92] text-sm leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;