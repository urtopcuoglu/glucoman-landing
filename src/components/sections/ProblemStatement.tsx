import { motion } from 'framer-motion';
import { AlertTriangle, UserX, Heart } from 'lucide-react';

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.12 }}
    className="relative bg-white rounded-2xl p-7 border border-primary/8 overflow-hidden group hover:shadow-lg hover:shadow-accent/8 transition-all duration-300"
  >
    {/* Subtle gradient top bar */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/40 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="w-14 h-14 rounded-2xl bg-accent/8 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-display font-bold text-primary text-xl mb-3">{title}</h3>
    <p className="text-[#6B8A92] leading-relaxed">{description}</p>
  </motion.div>
);

const ProblemStatement: React.FC = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-7 h-7 text-accent" />,
      title: 'Güvenilir Bilgiye Erişim Sorunu',
      description:
        'Hastalar internet ortamında doğrulanmamış bilgilerle karşılaşmakta, bu durum yanlış uygulamalara ve motivasyon kaybına yol açmaktadır.',
    },
    {
      icon: <UserX className="w-7 h-7 text-accent" />,
      title: 'Uzman Desteğine Sınırlı Erişim',
      description:
        'Sağlık profesyonellerine düzenli erişimin kısıtlı olduğu durumlarda hastalar sorularına hızlı ve doğru yanıt bulamamaktadır.',
    },
    {
      icon: <Heart className="w-7 h-7 text-accent" />,
      title: 'Psikososyal Destek Eksikliği',
      description:
        'Diyabet yönetimi uzun vadeli bir süreç olduğundan hastalar psikolojik destek ve sosyal dayanışma mekanizmalarına ihtiyaç duymaktadır.',
    },
  ];

  return (
    <section id="sorunlar" className="py-20 md:py-28" style={{ backgroundColor: '#EDE7D9' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary">
            Diyabet Hastaları Ne İle Karşılaşıyor?
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;