import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Users, Video, Bell, Bot } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Uzman Soru-Cevap',
      description:
        'Doktorlar, diyetisyenler ve psikologlardan doğrudan, bilimsel temelli yanıtlar alın.',
    },
    {
      icon: BookOpen,
      title: 'Eğitim İçerikleri',
      description:
        'Beslenme, fiziksel aktivite, ilaç yönetimi ve yaşam tarzı konularında doğrulanmış eğitim materyalleri.',
    },
    {
      icon: Users,
      title: 'Hasta Toplulukları',
      description:
        'Benzer deneyimlere sahip bireylerle bağlantı kurun, deneyimlerinizi paylaşın.',
    },
    {
      icon: Video,
      title: 'Canlı Eğitim Yayınları',
      description:
        'Uzmanlar tarafından düzenlenen interaktif webinarlar ve online eğitim etkinlikleri.',
    },
    {
      icon: Bell,
      title: 'Kişiselleştirilmiş Bildirimler',
      description:
        'Diyabet yönetiminizi destekleyen akıllı hatırlatıcılar ve kişisel takip araçları.',
    },
    {
      icon: Bot,
      title: 'GlucoMan Chatbot',
      description:
        '7/24 erişilebilir, güvenli bilgi tabanına dayalı yapay zeka destekli eğitim asistanı.',
    },
  ];

  return (
    <section id="ozellikler" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-primary">
            GlucoMan Neler Sunar?
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-4" />
          <p className="mt-5 text-[#6B8A92] max-w-xl mx-auto leading-relaxed">
            Kapsamlı dijital destek ekosistemi ile diyabet yönetiminizi güçlendirin.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;