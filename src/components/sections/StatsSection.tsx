import { motion } from 'framer-motion';
import StatCard from '../ui/StatCard';

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: '8.3M+',
      label: "Türkiye'deki diyabet hastası",
      numericTarget: 8300000,
      prefix: '',
      suffix: '+',
    },
    {
      value: '3',
      label: 'Uzman disiplin: Doktor, Diyetisyen, Psikolog',
      numericTarget: 3,
      prefix: '',
      suffix: '',
    },
    {
      value: '12 Ay',
      label: 'Proje araştırma süresi',
      numericTarget: 12,
      prefix: '',
      suffix: ' Ay',
    },
    {
      value: '295K TL',
      label: 'TÜSEB proje bütçesi',
      numericTarget: 295,
      prefix: '',
      suffix: 'K TL',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
            Rakamlarla GlucoMan
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.value}
              value={stat.value}
              label={stat.label}
              numericTarget={stat.numericTarget}
              prefix={stat.prefix}
              suffix={stat.suffix}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;