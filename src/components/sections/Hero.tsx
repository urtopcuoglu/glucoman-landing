import { motion, type Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="hakkinda"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 60% 40%, #dff0f4 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 10% 80%, #f0e9dc 0%, transparent 50%), #F7F2EA',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: '#E8845A' }} />
      <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: '#2C4A52' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-sm font-display font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent block"></span>
                TÜSEB Destekli Proje
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-primary leading-tight mb-5"
            >
              Diyabetle Mücadelede{' '}
              <span className="relative">
                <span className="text-accent">Yanınızdayız</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 200 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M0 3 Q50 0.5 100 3 Q150 5.5 200 3" stroke="#E8845A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6"/>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-[#6B8A92] leading-relaxed mb-8 max-w-lg"
            >
              GlucoMan, diyabet hastalarını uzmanlarla buluşturan, güvenilir bilgiye erişimi kolaylaştıran ve hasta dayanışmasını güçlendiren dijital bir destek platformudur.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a
                href="#ozellikler"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-display font-semibold text-sm hover:bg-primary-light transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                Platforma Katıl
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a
                href="#is-paketleri"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary/20 text-primary font-display font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                Daha Fazla Bilgi
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - floating logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="order-1 md:order-2 flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 blur-2xl scale-110 pointer-events-none" />
              <img
                src="/assets/gman-logo.png"
                alt="GlucoMan"
                className="animate-float w-56 sm:w-72 md:w-80 lg:w-96 relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-40">
        <span className="text-xs font-display text-primary">Aşağı Kaydır</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C4A52" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;