import { type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl p-6 border border-primary/8 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="font-display font-700 text-primary text-lg mb-2 font-bold">{title}</h3>
      <p className="text-[#6B8A92] text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;